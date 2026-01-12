/**
 * Enhanced Fetch Icons Script
 * 
 * Downloads SVG logos using Simple Icons CDN and Wikimedia
 * Usage: bun run scripts/fetch-icons-enhanced.js
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const ICONS_DIR = path.join(process.cwd(), 'public', 'skills');

// Ensure directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Simple Icons CDN base URL
const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';

// Icon configuration with multiple fallback sources
const icons = {
  // AI/ML Frameworks
  pytorch: {
    primary: `${SIMPLE_ICONS_CDN}/pytorch`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg',
  },
  tensorflow: {
    primary: `${SIMPLE_ICONS_CDN}/tensorflow`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  },
  'huggingface': {
    primary: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg',
    fallback: `${SIMPLE_ICONS_CDN}/huggingface`,
  },
  opencv: {
    primary: `${SIMPLE_ICONS_CDN}/opencv`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg',
  },
  'scikit-learn': {
    primary: `${SIMPLE_ICONS_CDN}/scikitlearn`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  },
  
  // Programming Languages
  python: {
    primary: `${SIMPLE_ICONS_CDN}/python`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  javascript: {
    primary: `${SIMPLE_ICONS_CDN}/javascript`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  },
  typescript: {
    primary: `${SIMPLE_ICONS_CDN}/typescript`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  
  // Python Libraries
  numpy: {
    primary: `${SIMPLE_ICONS_CDN}/numpy`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg',
  },
  pandas: {
    primary: `${SIMPLE_ICONS_CDN}/pandas`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
  },
  jupyter: {
    primary: `${SIMPLE_ICONS_CDN}/jupyter`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg',
  },
  
  // Web Frameworks
  react: {
    primary: `${SIMPLE_ICONS_CDN}/react`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  nextdotjs: {
    primary: `${SIMPLE_ICONS_CDN}/nextdotjs`,
    filename: 'nextjs.svg',
  },
  nodedotjs: {
    primary: `${SIMPLE_ICONS_CDN}/nodedotjs`,
    filename: 'nodejs.svg',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  fastapi: {
    primary: `${SIMPLE_ICONS_CDN}/fastapi`,
  },
  
  // DevOps & Cloud
  docker: {
    primary: `${SIMPLE_ICONS_CDN}/docker`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  },
  kubernetes: {
    primary: `${SIMPLE_ICONS_CDN}/kubernetes`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
  },
  amazonaws: {
    primary: `${SIMPLE_ICONS_CDN}/amazonaws`,
    filename: 'aws.svg',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  googlecloud: {
    primary: `${SIMPLE_ICONS_CDN}/googlecloud`,
    filename: 'google-cloud.svg',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
  },
  
  // Databases
  postgresql: {
    primary: `${SIMPLE_ICONS_CDN}/postgresql`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  },
  mongodb: {
    primary: `${SIMPLE_ICONS_CDN}/mongodb`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
  },
  
  // Tools
  git: {
    primary: `${SIMPLE_ICONS_CDN}/git`,
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  },
  kaggle: {
    primary: `${SIMPLE_ICONS_CDN}/kaggle`,
  },
  prisma: {
    primary: `${SIMPLE_ICONS_CDN}/prisma`,
  },
  bun: {
    primary: `${SIMPLE_ICONS_CDN}/bun`,
  },
};

/**
 * Download file from URL with redirect support
 */
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(response.headers.location, dest)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Status ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });
    
    request.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

/**
 * Download icon with fallback
 */
async function downloadIcon(name, config) {
  const filename = config.filename || `${name}.svg`;
  const dest = path.join(ICONS_DIR, filename);
  
  // Try primary source
  try {
    await downloadFile(config.primary, dest);
    console.log(`✓ ${filename}`);
    return true;
  } catch (error) {
    console.log(`  ↳ Primary failed for ${filename}: ${error.message}`);
  }
  
  // Try fallback if available
  if (config.fallback) {
    try {
      await downloadFile(config.fallback, dest);
      console.log(`✓ ${filename} (fallback)`);
      return true;
    } catch (error) {
      console.error(`✗ ${filename} - All sources failed`);
      return false;
    }
  }
  
  console.error(`✗ ${filename} - No fallback available`);
  return false;
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Fetching technology icons from Simple Icons CDN & Wikimedia...\n');
  
  let successful = 0;
  let failed = 0;
  
  for (const [name, config] of Object.entries(icons)) {
    const result = await downloadIcon(name, config);
    if (result) {
      successful++;
    } else {
      failed++;
    }
  }
  
  console.log(`\n📊 Download Summary:`);
  console.log(`   ✅ Successful: ${successful}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`\n📁 Icons saved to: ${ICONS_DIR}`);
  
  if (successful > 0) {
    console.log('\n✨ Icons ready to use!');
    console.log('💡 All icons are official brand SVGs from Simple Icons and Wikimedia');
  }
}

main().catch(console.error);
