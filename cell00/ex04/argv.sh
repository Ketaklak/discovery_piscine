#!/bin/bash
if [ $# -eq 0 ]; then
  echo "Aucun arguments mis"
else
  for arg in "$1" "$2" "$3"; do
    [ -n "$arg" ] && echo "$arg"
  done
fi
