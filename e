#! /bin/env bash

build() {
  docker-compose --env-file env/.env -f compose/$1 build
}

run() {
  docker-compose --env-file env/.env -f compose/$1 pull
  docker-compose --env-file env/.env -f compose/$1 up -d
}

stop() {
  docker-compose --env-file env/.env -f compose/$1 stop
}

restart() {
  stop $1
  run $1
}

list() {
  echo $1
}

# validate first argument
if [[ $(type -t $1) != function ]]
then
  # print usage and exit if first argument
  # is not a function
  echo "Usage: ./e.sh <function> [name]"
  echo "functions: "
  echo "  - build"
  echo "  - run"
  echo "  - stop"
  echo "  - restart"
  echo "  - list"
  exit 1
fi

if [[ $2 == all || -z "$2" ]]
then
  # loop all files in compose if the second
  # argument is 'all' or empty
  for file in $(cd compose && ls *.yml)
  do
    $1 $file
  done
else
  func=$1
  shift
  # loop all arguments after the first
  for file in $@
  do
    $func $file.yml
  done
fi
