# Security Policy

## 🛡️ Security Measures

This project implements multiple layers of security to protect against malicious code injection and other vulnerabilities.

### 1. Content Security Policy (CSP)
- Strict CSP headers configured in `next.config.js`
- Only allows scripts from trusted domains
- Blocks inline scripts by default (except where necessary)
- Prevents XSS attacks

### 2. Automated Dependency Scanning
- **Dependabot**: Automatically checks for vulnerable dependencies weekly
- **GitHub Actions**: Runs security scans on every push and PR
- **npm audit**: Runs before every build

### 3. Build Security
- Package lock file integrity verification
- Automated secret scanning with TruffleHog
- Dependency review on pull requests

### 4. Security Headers
- `Strict-Transport-Security`: Forces HTTPS
- `X-Frame-Options`: Prevents clickjacking
- `X-Content-Type-Options`: Prevents MIME sniffing
- `X-XSS-Protection`: Enables browser XSS protection
- `Referrer-Policy`: Controls referrer information

## 🔍 Running Security Checks

### Before Every Deployment
```bash
npm run security:check
```

### Check for Vulnerabilities
```bash
npm run security:audit
```

### Fix Vulnerabilities Automatically
```bash
npm run security:fix
```

### Manual Audit
```bash
npm audit
```

## 📋 Security Checklist

- [ ] Run `npm run security:check` before deploying
- [ ] Review and merge Dependabot PRs weekly
- [ ] Monitor GitHub Security Alerts
- [ ] Review Render build logs for suspicious activity
- [ ] Keep Node.js and npm updated
- [ ] Use environment variables for secrets (never commit them)
- [ ] Enable 2FA on GitHub, Render, and npm accounts

## 🚨 Reporting Security Issues

If you discover a security vulnerability, please email: [your-email@studiosevenboutique.com]

**Do not** create a public GitHub issue for security vulnerabilities.

## 🔐 Best Practices

1. **Never commit secrets**: Use environment variables
2. **Review dependencies**: Check package reputation before installing
3. **Keep updated**: Regularly update dependencies
4. **Monitor logs**: Check Render deployment logs for anomalies
5. **Use lock files**: Always commit `package-lock.json`
6. **Enable 2FA**: On all accounts (GitHub, npm, Render)
7. **Review PRs**: Carefully review all dependency updates
8. **Clear cache**: If suspicious activity detected, clear Render build cache

## 📊 Security Monitoring

### GitHub Security Features Enabled
- ✅ Dependabot alerts
- ✅ Dependabot security updates
- ✅ Code scanning (via GitHub Actions)
- ✅ Secret scanning

### Render Security
- ✅ Auto-deploy from protected branch only
- ✅ Environment variables for secrets
- ✅ HTTPS enforced
- ✅ Regular security audits in build process

## 🔄 Incident Response

If a security incident is detected:

1. **Immediate**: Clear Render build cache and trigger clean rebuild
2. **Investigate**: Check git history, npm audit, and build logs
3. **Remediate**: Remove malicious code, update dependencies
4. **Verify**: Run full security scan
5. **Document**: Record incident and prevention measures
6. **Monitor**: Watch for recurrence

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

---

Last Updated: 2026-01-07

