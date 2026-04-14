#!/usr/bin/env node

/**
 * React CV App Verification Script
 * Run this to verify your React app is fully working
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('\n🔍 REACT CV APP VERIFICATION\n');
console.log('Checking if your React app is properly set up...\n');

const checks = [];

// Check 1: Node modules exist
console.log('1️⃣  Checking dependencies...');
if (fs.existsSync(path.join(__dirname, 'node_modules/react'))) {
  console.log('   ✅ React is installed\n');
  checks.push(true);
} else {
  console.log('   ❌ React not found. Run: npm install\n');
  checks.push(false);
}

// Check 2: Source files exist
console.log('2️⃣  Checking source files...');
const files = ['src/App.js', 'src/index.js', 'public/index.html', 'src/index.css'];
let allFilesExist = true;
files.forEach(file => {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ❌ Missing: ${file}`);
    allFilesExist = false;
  }
});
if (allFilesExist) {
  console.log('   ✅ All source files present\n');
  checks.push(true);
} else {
  checks.push(false);
}

// Check 3: Package.json valid
console.log('3️⃣  Checking package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  if (pkg.dependencies.react && pkg.dependencies['react-scripts']) {
    console.log('   ✅ package.json is valid\n');
    checks.push(true);
  } else {
    console.log('   ❌ package.json missing dependencies\n');
    checks.push(false);
  }
} catch (e) {
  console.log('   ❌ package.json is invalid\n');
  checks.push(false);
}

// Check 4: Dev server test
console.log('4️⃣  Checking if dev server is running at http://localhost:3000...');
http.get('http://localhost:3000', (res) => {
  if (res.statusCode === 200) {
    console.log('   ✅ Dev server is running (HTTP 200)\n');
    checks.push(true);
  } else {
    console.log(`   ⚠️  Dev server returned: ${res.statusCode}`);
    console.log('   Run: npm start\n');
    checks.push(false);
  }

  // Final result
  printResults();
}).on('error', (e) => {
  console.log('   ❌ Dev server not responding');
  console.log('   Run: npm start\n');
  checks.push(false);
  printResults();
});

function printResults() {
  console.log('════════════════════════════════════════════\n');
  
  const passed = checks.filter(c => c).length;
  const total = checks.length;
  
  if (passed === total) {
    console.log('✅ ALL CHECKS PASSED!\n');
    console.log('Your React app is fully configured and running.\n');
    console.log('Next steps:');
    console.log('1. Open http://localhost:3000 in your browser');
    console.log('2. Click the camera icon to upload a photo');
    console.log('3. Edit src/App.js and save to see hot reload');
    console.log('4. Press Ctrl+P to export to PDF\n');
  } else {
    console.log(`⚠️  ${passed}/${total} checks passed\n`);
    console.log('Fixed issues shown above, then try again.\n');
  }
  
  console.log('════════════════════════════════════════════\n');
}
