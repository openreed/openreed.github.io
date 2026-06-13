#!/bin/bash
# 清理旧 Jekyll 进程，避免端口冲突
lsof -ti :4000 | xargs kill -9 2>/dev/null
bundle exec jekyll serve