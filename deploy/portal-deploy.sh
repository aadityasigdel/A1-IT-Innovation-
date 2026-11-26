#!/bin/bash
# Builds and (re)starts the intern portal container on the VPS.
#   first time:  git clone https://github.com/aadityasigdel/A1-IT-Innovation-.git /root/A1-IT-Innovation-
#   every time:  bash /root/A1-IT-Innovation-/deploy/portal-deploy.sh
# NPM: portal.a1itinnovation.com.np → http://<VPS>:8093 (SSL: Let's Encrypt).
# The new image is built while the old container still serves; the swap takes ~1 s.
set -e

REPO_DIR="/root/A1-IT-Innovation-"
BRANCH="main"
NAME="a1-portal"
PORT=8093

cd "$REPO_DIR"
echo "[1/4] Fetching latest code..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

TAG=$(git rev-parse --short HEAD)
echo "[2/4] Building $NAME:$TAG ..."
docker build -t "$NAME:$TAG" -t "$NAME:latest" .

echo "[3/4] Swapping container..."
docker rm -f "$NAME" >/dev/null 2>&1 || true
docker run -d --name "$NAME" --restart unless-stopped -p "$PORT:80" "$NAME:$TAG"

echo "[4/4] Checking..."
sleep 2
curl -fsS -o /dev/null "http://127.0.0.1:$PORT/" && echo "OK: $NAME:$TAG on :$PORT" || { echo "NOT answering on :$PORT"; docker logs --tail 30 "$NAME"; exit 1; }
