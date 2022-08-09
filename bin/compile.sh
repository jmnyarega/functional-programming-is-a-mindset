#! /bin/sh

typescript_file=$1
javascript_file=$(echo "$1" | cut -f 1 -d '.').js

tsc $typescript_file; node $javascript_file
