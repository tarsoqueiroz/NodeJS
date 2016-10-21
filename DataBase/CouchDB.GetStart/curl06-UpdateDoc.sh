#!/bin/bash

curl -X PUT http://127.0.0.1:5984/getstartdb/id01de01 -d '{"_rev":"2-651db9f28ea59d2f0dc8d36c8deb0fa9", "name": "Ana Maria da Silva e Silva"}' -H "Content-Type: application/json"
