#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -n "Installing dependencies ..."
    if npm install > /dev/null 2>&1; then
        echo -e " ${GREEN}[PASSED]${NC}"
    else
        echo -e " ${RED}[FAILED]${NC}"
        npm install
        exit 1
    fi
fi

# Check formatting (without auto-fix, matching CI)
echo -n "Checking code formatting ..."
if npm run format:check > /dev/null 2>&1; then
    echo -e " ${GREEN}[PASSED]${NC}"
else
    echo -e " ${RED}[FAILED]${NC}"
    echo "Run 'npm run format' to fix formatting issues"
    npm run format:check
    exit 1
fi

# Run linter (without auto-fix, matching CI)
echo -n "Running ESLint ..."
if npm run lint > /dev/null 2>&1; then
    echo -e " ${GREEN}[PASSED]${NC}"
else
    echo -e " ${RED}[FAILED]${NC}"
    echo "Run 'npm run lint:fix' to fix linting issues"
    npm run lint
    exit 1
fi

# Run build (includes TypeScript check)
echo -n "Running build (TypeScript check) ..."
if npm run build > /dev/null 2>&1; then
    echo -e " ${GREEN}[PASSED]${NC}"
else
    echo -e " ${RED}[FAILED]${NC}"
    npm run build
    exit 1
fi