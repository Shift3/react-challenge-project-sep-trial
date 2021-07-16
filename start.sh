#!/usr/bin/env bash

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac
echo ${machine}

case ${machine} in
    Mac)
        echo "Running Mac Startup"
        ;;
    Cygwin)
        echo "Running Windows Startup"
        ;;
    MinGw)
        echo "Running Windows Startup"
        ;;
esac