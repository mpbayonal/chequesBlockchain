#!/bin/bash

cd "./cheques-blockchain/server"
    docker build -t le999/app1:1.0 .
cd -

cd "./cheques-blockchain/processor"
    docker build -t le999/tp1:1.0 .
cd -

cd "./cheques-blockchain/ledger_sync"
    docker build -t le999/ledger_sync:1.0 .
cd -
