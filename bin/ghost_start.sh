#!/bin/bash

export NODE_ENV=development

mkdir /tmp/content
mkdir /tmp/content/data
chmod -R a+rwx /tmp/content

echo "up goes the ghost"
node ghost.js

