#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "=================================================="
echo " Thrive New Website Status"
echo "=================================================="

if lsof -i :3000 >/dev/null 2>&1; then
    echo "✓ Frontend: RUNNING on http://localhost:3000"
else
    echo "✗ Frontend: STOPPED (port 3000)"
fi
echo "=================================================="
