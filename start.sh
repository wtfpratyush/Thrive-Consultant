#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

export PATH="/Users/uv/Documents/Internal Use/.tools/node/bin:$PATH"

mkdir -p "$DIR/.logs"

if lsof -ti :3000 >/dev/null 2>&1; then
    echo "Stopping existing process on port 3000..."
    lsof -ti :3000 | xargs kill -9 2>/dev/null || true
    sleep 1
fi

echo "▶ Starting Thrive New Website Frontend (port 3000)..."
BROWSER=none nohup "$DIR/node_modules/.bin/craco" start > "$DIR/.logs/frontend.log" 2>&1 &
FRONTEND_PID=$!
echo $FRONTEND_PID > "$DIR/.logs/frontend.pid"
echo "✓ Frontend started (PID: $FRONTEND_PID, Log: .logs/frontend.log)"
echo "🚀 Application is running on: http://localhost:3000"
