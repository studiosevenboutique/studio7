#!/bin/bash

# Security Check Script for Studio Seven
# Run this before deploying to production

set -e

echo "🔍 Running security checks..."

# 1. Check for npm audit vulnerabilities
echo ""
echo "1️⃣ Checking for known vulnerabilities..."
npm audit --audit-level=moderate || {
    echo "⚠️  WARNING: Vulnerabilities found!"
    echo "Run 'npm audit fix' to attempt automatic fixes"
    exit 1
}

# 2. Verify package-lock.json integrity
echo ""
echo "2️⃣ Verifying package-lock.json integrity..."
npm ci --dry-run || {
    echo "❌ package-lock.json is out of sync!"
    echo "Run 'npm install' to update it"
    exit 1
}

# 3. Check for outdated packages
echo ""
echo "3️⃣ Checking for outdated packages..."
npm outdated || true

# 4. Scan for common security issues in code
echo ""
echo "4️⃣ Scanning for hardcoded secrets..."
if command -v grep &> /dev/null; then
    # Check for common secret patterns
    if grep -r -E "(api[_-]?key|secret[_-]?key|password|token|bearer)" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" . | grep -v "node_modules" | grep -v ".git" | grep -v "security-check.sh"; then
        echo "⚠️  WARNING: Potential secrets found in code!"
        echo "Review the above matches and ensure no real secrets are committed"
    else
        echo "✅ No obvious secrets found"
    fi
fi

# 5. Check for suspicious dependencies
echo ""
echo "5️⃣ Checking for suspicious package names..."
if npm ls --json | grep -E "(99fkw4w8|malicious|hack|exploit)" > /dev/null 2>&1; then
    echo "❌ SUSPICIOUS PACKAGE DETECTED!"
    exit 1
else
    echo "✅ No suspicious packages found"
fi

echo ""
echo "✅ All security checks passed!"
echo ""
echo "💡 Recommendations:"
echo "   - Run this script before every deployment"
echo "   - Keep dependencies updated weekly"
echo "   - Review Dependabot PRs promptly"
echo "   - Monitor your Render build logs"

