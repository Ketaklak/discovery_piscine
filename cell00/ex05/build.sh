#!/bin/bash
if [ $# -eq 0 ]; then
  echo "Aucun arguments donne"
else
  for arg in "$@"; do
    mkdir "ex$arg"
  done
fi
