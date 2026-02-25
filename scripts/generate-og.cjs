const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 72px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Ahmed Khaled', width / 2, height / 2 - 40);

ctx.fillStyle = '#888888';
ctx.font = '36px monospace';
ctx.fillText('AI Engineer | System Engineer', width / 2, height / 2 + 40);

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/og-image.png', buffer);

console.log('OG image created successfully!');
