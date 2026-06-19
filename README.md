# Dependabot Dynamic Label Test Repository

This repository demonstrates the issue where Dependabot cannot use dynamic GitHub Actions expressions in runner labels when using AWS CodeBuild as a self-hosted runner.

## 🎯 Purpose

Reproduce and document the limitation where:
- ✅ Regular GitHub Actions workflows CAN use dynamic labels like `codebuild-dependabot-${{ github.run_id }}`
- ❌ Dependabot configuration CANNOT use dynamic labels (static parsing only)

## 📦 Test Application

Simple Node.js Express application with intentionally outdated dependencies:
- express: 4.17.1 (outdated)
- lodash: 4.17.20 (outdated)
- axios: 0.21.1 (outdated)

These outdated versions will trigger Dependabot to create update pull requests.

## 🔧 Infrastructure

- **AWS CodeBuild**: Self-hosted GitHub Actions runner
- **GitHub Actions**: Test workflows with dynamic labels
- **Dependabot**: Dependency update automation

## 📊 Test Scenarios

### Scenario 1: Dynamic Label (Will Fail)
```yaml



runs-on: codebuild-dependabot-${{ github.run_id }}-${{ github.run_attempt }}

**Expected Result:** ❌ Dependabot cannot evaluate expressions

### Scenario 2: Static Label (Will Work)
```yaml



runs-on:

self-hosted
codebuild-dependabot
**Expected Result:** ✅ Dependabot successfully finds runner

## 🚀 Running the Application

```bash



npm install npm start


Visit: http://localhost:3000

## 📝 Endpoints

- `GET /` - Main endpoint with shuffled data
- `GET /health` - Health check
- `GET /test-axios` - Test axios functionality

## 🔍 Monitoring

- **GitHub Actions**: https://github.com/[USERNAME]/dependabot-dynamic-label-test/actions
- **Dependabot**: https://github.com/[USERNAME]/dependabot-dynamic-label-test/network/updates
- **Runners**: https://github.com/[USERNAME]/dependabot-dynamic-label-test/settings/actions/runners

## 📚 Documentation

This test environment demonstrates why Dependabot requires static runner labels and provides working solutions for AWS CodeBuild integration.
