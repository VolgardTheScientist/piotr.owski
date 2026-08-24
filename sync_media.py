import os
import sys
import mimetypes
import boto3
from botocore.config import Config

def load_env(env_path):
    env_vars = {}
    if os.path.exists(env_path):
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    env_vars[k.strip()] = v.strip().strip("'").strip('"')
    return env_vars

def sync():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    env_path = os.path.join(root_dir, '.env')
    assets_dir = os.path.join(root_dir, 'assets')
    
    env_vars = load_env(env_path)
    access_key = env_vars.get('R2_ACCESS_KEY_ID') or os.environ.get('R2_ACCESS_KEY_ID')
    secret_key = env_vars.get('R2_SECRET_ACCESS_KEY') or os.environ.get('R2_SECRET_ACCESS_KEY')
    endpoint_url = env_vars.get('R2_ENDPOINT') or os.environ.get('R2_ENDPOINT')
    bucket_name = env_vars.get('R2_BUCKET_NAME') or 'piotr-owski-media'

    if not access_key or not secret_key or not endpoint_url:
        print("❌ Error: Missing R2 credentials in .env file.")
        print("Please ensure .env contains:")
        print("  R2_ACCESS_KEY_ID=...")
        print("  R2_SECRET_ACCESS_KEY=...")
        print("  R2_ENDPOINT=https://<account_id>.r2.cloudflarestorage.com")
        sys.exit(1)

    if not os.path.exists(assets_dir):
        print(f"❌ Error: Assets folder not found at {assets_dir}")
        sys.exit(1)

    print(f"⚡ Connecting to Cloudflare R2 bucket '{bucket_name}'...")
    s3 = boto3.client(
        's3',
        endpoint_url=endpoint_url,
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        config=Config(signature_version='s3v4'),
        region_name='auto'
    )

    uploaded = 0
    total_bytes = 0

    for dirpath, _, filenames in os.walk(assets_dir):
        for fname in filenames:
            local_path = os.path.join(dirpath, fname)
            rel_path = os.path.relpath(local_path, assets_dir).replace('\\', '/')
            
            key_root = rel_path                      # e.g. images/arch_loft.jpg
            key_prefixed = f"assets/{rel_path}"     # e.g. assets/images/arch_loft.jpg
            
            mime_type, _ = mimetypes.guess_type(local_path)
            extra_args = {
                'CacheControl': 'public, max-age=31536000, immutable'
            }
            if mime_type:
                extra_args['ContentType'] = mime_type

            size_kb = os.path.getsize(local_path) / 1024
            print(f"  -> [{mime_type or 'bin'}] ({size_kb:.1f} KB) {rel_path}")

            for key in [key_root, key_prefixed]:
                try:
                    s3.upload_file(
                        Filename=local_path,
                        Bucket=bucket_name,
                        Key=key,
                        ExtraArgs=extra_args
                    )
                except Exception as e:
                    print(f"     ❌ Failed {key}: {e}")
            
            uploaded += 1
            total_bytes += os.path.getsize(local_path)

    print(f"\n✨ Sync Complete! {uploaded} files ({(total_bytes / (1024*1024)):.2f} MB) synced to Cloudflare R2.")

if __name__ == '__main__':
    sync()
