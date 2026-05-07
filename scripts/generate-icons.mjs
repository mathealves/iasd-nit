import sharp from 'sharp';
import { copyFile } from 'fs/promises';

const src = 'public/logo.png';

await Promise.all([
  sharp(src).resize(16, 16).toFile('public/favicon-16x16.png'),
  sharp(src).resize(32, 32).toFile('public/favicon-32x32.png'),
  sharp(src).resize(180, 180).toFile('public/apple-touch-icon.png'),
  copyFile(src, 'public/og-image.png'),
]);

console.log('Icons generated successfully.');
