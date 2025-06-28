#!/bin/bash
# upstream-pull.sh - pulls latest changes from upstream and syncs your fork

# color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # no Color

echo -e "${GREEN}Syncing with upstream repository...${NC}"

# check if upstream remote exists
if ! git remote | grep -q 'upstream'; then
  echo -e "${RED}❌ Error: Upstream remote not found${NC}"
  exit 1
fi

# perform sync operations with error checking
if git fetch upstream && \
   git checkout main && \
   git merge --ff-only upstream/main && \
   git push origin main
then
  echo -e "${GREEN}Successfully synced with upstream!${NC}"
else
  echo -e "${RED}Error occurred during sync${NC}"
  exit 1
fi
