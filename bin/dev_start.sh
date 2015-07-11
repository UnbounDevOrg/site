#!/bin/bash

#export NODE_ENV=development
# Note: hot reloading and clustering don't always work well together so you may want to disable clustering in dev
#export NODE_CLUSTERED=0
#export NODE_SERVE_STATIC=1
#export NODE_HOT_RELOAD=1
#export NODE_LOGGER_GRANULARLEVELS=1

#./bin/start.sh

NBS_CURR_PROJECT_PATH=$PWD

export NODE_ENV=development
export NODE_CLUSTERED=0
export NODE_SERVE_STATIC=1
export NODE_HOT_RELOAD=0
export NODE_LOGGER_GRANULARLEVELS=1

export NODE_CONFIG_DIR="$NBS_CURR_PROJECT_PATH/config"

node server_site_austin.js

