#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const os = require('os');


function getBinaryPath() {
    // In a real production setup, these binaries would be downloaded based on platform.
    // For now, we assume the binary is in the cli package's target folder or provided via a postinstall.
    const extension = os.platform() === 'win32' ? '.exe' : '';
    return path.join(__dirname, `../bin/aruviliui-cli${extension}`);
}

const binaryPath = getBinaryPath();
const args = process.argv.slice(2);

const child = spawn(binaryPath, args, {
    stdio: 'inherit',
    shell: false
});

child.on('error', (err) => {
    console.error('Failed to start Aruvili CLI:', err.message);
    console.log('\nTip: Make sure you have built the Rust CLI using "cargo build --release"');
    process.exit(1);
});

child.on('exit', (code) => {
    process.exit(code);
});
