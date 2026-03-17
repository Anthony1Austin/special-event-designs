#!/usr/bin/env node
/**
 * Copy static site files to dist/ for Vercel deployment.
 * Keeps paths unchanged (index.html, css/, js/, public/).
 */
import fs from 'fs';
import path from 'path';

const DIST = 'dist';
const ROOT_FILES = ['index.html', 'robots.txt', 'sitemap.xml', 'site.webmanifest', 'browserconfig.xml'];
const ROOT_DIRS = ['css', 'js', 'public'];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST, { recursive: true });

for (const file of ROOT_FILES) {
  if (fs.existsSync(file)) fs.copyFileSync(file, path.join(DIST, path.basename(file)));
}

for (const dir of ROOT_DIRS) {
  if (fs.existsSync(dir)) copyRecursive(dir, path.join(DIST, dir));
}

console.log('Built static site to dist/');
