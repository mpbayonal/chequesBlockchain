#!/bin/bash

cd "./cheques-blockchain/server"
    docker build .
cd -

cd "./cheques-blockchain/processor"
    docker build .
cd -

cd "./cheques-blockchain/ledger_sync"
    docker build .
cd -
