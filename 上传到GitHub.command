#!/bin/bash
cd "$(dirname "$0")"

export PATH="$(pwd)/.node/bin:$PATH"

echo "=========================================="
echo "  正在生成网站文件 (docs 文件夹)..."
echo "=========================================="
npm run export-docs
if [ $? -ne 0 ]; then
  echo "构建失败，请检查是否已 npm install"
  read -p "按回车键关闭..."
  exit 1
fi

echo ""
echo "=========================================="
echo "  正在推送到 GitHub..."
echo "=========================================="
git add docs package.json 部署说明-必看.txt
git commit -m "Update docs folder for GitHub Pages" 2>/dev/null || true
git push origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✓ 上传成功！"
  echo ""
  echo "最后一步（只需做一次）："
  echo "打开 https://github.com/ggu90278-svg/PAWHAVEN/settings/pages"
  echo "Source 选: Deploy from a branch"
  echo "Branch: main    Folder: /docs"
  echo ""
  echo "网站地址: https://ggu90278-svg.github.io/PAWHAVEN/"
  open "https://github.com/ggu90278-svg/PAWHAVEN/settings/pages"
else
  echo ""
  echo "推送失败 → 请用【网页上传】方式："
  echo "1. 打开 Finder 里的 docs 文件夹"
  echo "2. 到 GitHub 仓库 Upload files 上传 docs 内全部文件"
  echo ""
  open "$(pwd)/docs"
  open "https://github.com/ggu90278-svg/PAWHAVEN"
fi
read -p "按回车键关闭..."
