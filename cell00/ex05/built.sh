#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No supplied arguments"
fi

for arg in "$@"
do
	mkdir ex$arg
done
