#!/bin/bash

usage() {
  echo "Usage: $0 [-t <build_tag>] applications"
}

#
# GET OPTIONS
#

BUILD_TAG=latest

while getopts ":ht:" options; do
  case "$options" in
  t)
    BUILD_TAG="$OPTARG"
    ;;
  h)
    usage
    exit 0
    ;;
  * | :)
    usage
    exit 1
    ;;
  esac
done
shift $((OPTIND - 1))

#
# BUILD IMAGES
#

APPLICATIONS=$@

if [[ -z $APPLICATIONS ]]; then
  echo No application specified to build. 1>&2
  exit 1;
fi

echo BUILD_TAG=$BUILD_TAG

for application in $APPLICATIONS; do
  echo
  echo BUILDING $application:
  echo
  docker build -f _docker/$application.Dockerfile -t $application:$BUILD_TAG $application
done
