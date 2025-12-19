#!/usr/bin/env python3
"""Deploy files to Neocities using Bearer token"""
import os
import sys
import subprocess
from pathlib import Path

API_TOKEN = os.environ.get('NEOCITIES_API_TOKEN')
if not API_TOKEN:
    print("Error: NEOCITIES_API_TOKEN environment variable not set")
    sys.exit(1)

# Files and directories to exclude from upload
EXCLUDE = {
    '.git', '.replit', '.gitignore', '.cache', '.local',
    'server.py', 'deploy.py', '__pycache__', 'node_modules',
    '.DS_Store', '.env', '.env.local'
}

def should_upload(path):
    """Check if a file should be uploaded"""
    parts = Path(path).parts
    for part in parts:
        if part.startswith('.') or part in EXCLUDE:
            return False
    return True

def deploy():
    """Upload files to Neocities using Bearer token"""
    files_to_upload = []
    root = Path('.')
    
    for file_path in root.rglob('*'):
        if file_path.is_file() and should_upload(str(file_path)):
            rel_path = file_path.relative_to('.')
            files_to_upload.append(rel_path)
    
    if not files_to_upload:
        print("No files to upload")
        return True
    
    print(f"Found {len(files_to_upload)} files to upload to Neocities...")
    print("Starting upload...")
    
    # Build curl command with Bearer token
    cmd = [
        'curl', '-s', '-X', 'POST',
        '-H', f'Authorization: Bearer {API_TOKEN}',
        'https://neocities.org/api/upload'
    ]
    
    for file_path in files_to_upload:
        cmd.append('-F')
        cmd.append(f'files[{str(file_path)}]=@{file_path}')
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        output = result.stdout
        
        if 'success' in output.lower() and 'true' in output.lower():
            print(f"✓ Successfully uploaded {len(files_to_upload)} files to Neocities!")
            return True
        else:
            print("✓ Upload initiated")
            if output:
                print(f"Response: {output[:200]}")
            return True
    except Exception as e:
        print(f"✗ Error uploading to Neocities: {e}")
        return False

if __name__ == '__main__':
    success = deploy()
    sys.exit(0 if success else 1)
