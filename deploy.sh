#!/usr/bin/env bash

yarn doc &&
  cd doc &&
  git init &&
  git add . &&
  git commit -m 'deploy' &&
  git remote add origin git@github.com:kunccc/xiyo-ui-react.git &&
  git branch -M main &&
  git push -u origin main -f
cd -
