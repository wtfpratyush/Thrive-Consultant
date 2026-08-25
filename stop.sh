#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "Stopping Frontend on port 3000..."
if lsof -ti :3000 >/dev/null 2>&1; then
    lsof -ti :3000 | xargs kill -9 2>/dev/null || true
    echo "✓ Frontend stopped"
else
    echo "Frontend is not running on port 3000"
fi
