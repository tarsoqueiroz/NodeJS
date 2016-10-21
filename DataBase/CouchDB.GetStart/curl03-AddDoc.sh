#!/bin/bash

curl -X POST http://127.0.0.1:5984/getstartdb -d '{"_id": "id02deOta", "name": "Pedro Paulo da Silva", "age": 7, "type": "maid"}' -H "Content-Type: application/json"
curl -X POST http://127.0.0.1:5984/getstartdb -d '{"_id": "id03de0ta", "name": "Maria Silva de Pedro", "age": 67, "type": "boss"}' -H "Content-Type: application/json"
