/**
 * Fetch Icons Script
 * 
 * Downloads official SVG logos from various sources and optimizes them
 * Usage: bun run fetch-icons.js
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const ICONS_DIR = path.join(__dirname, 'public', 'skills');

// Ensure directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Icon sources - Direct SVG URLs from official sources
const iconSources = {
  // AI/ML Frameworks
  'pytorch.svg': 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg',
  'tensorflow.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  'huggingface.svg': 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg',
  'opencv.svg': 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg',
  'scikit-learn.svg': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  
  // Programming Languages
  'python.svg': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  'javascript.svg': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'typescript.svg': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  
  // Libraries
  'numpy.svg': 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg',
  'pandas.svg': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
  'jupyter.svg': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg',
  
  // Web Frameworks
  'react.svg': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'nextjs.svg': 'https://raw.githubusercontent.com/vercel/next.js/canary/packages/next/src/server/lib/squoosh/emscripten-utils.ts', // Placeholder
  'nodejs.svg': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  'fastapi.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg',
  
  // DevOps & Cloud
  'docker.svg': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  'kubernetes.svg': 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
  'aws.svg': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'google-cloud.svg': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
  
  // Databases
  'postgresql.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  'mongodb.svg': 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
  
  // Tools
  'git.svg': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  'kaggle.svg': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png',
  
  // Additional
  'prisma.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prisma.svg',
  'bun.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bun.svg',
};

/**
 * Download file from URL
 */
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('📦 Fetching technology icons...\n');
  
  const downloads = Object.entries(iconSources).map(async ([filename, url]) => {
    const dest = path.join(ICONS_DIR, filename);
    
    try {
      await downloadFile(url, dest);
    } catch (error) {
      console.error(`✗ Failed to download ${filename}:`, error.message);
    }
  });
  
  await Promise.all(downloads);
  
  console.log('\n✅ Icon fetch complete!');
  console.log(`📁 Icons saved to: ${ICONS_DIR}`);
  console.log('\n💡 Tip: Use SVGO to optimize SVGs:');
  console.log('   bun add -D svgo');
  console.log('   bunx svgo -f public/skills');
}

main().catch(console.error);
