

NBS_CURR_PROJECT_PATH=$PWD

export NODE_ENV=production
export NODE_CLUSTERED=0
export NODE_SERVE_STATIC=1
export NODE_HOT_RELOAD=0
export NODE_LOGGER_GRANULARLEVELS=1

export NODE_CONFIG_DIR="$NBS_CURR_PROJECT_PATH/config"

node server.js

