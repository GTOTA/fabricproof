curl -s -X POST   http://localhost:4000/channels/mychannel/chaincodes/mycc   -H "authorization: Bearer $1"   -H "content-type: application/json"   -d '{
"peers":["org1/peer0","org2/peer0"], "fcn":"move",
"args":["a","b","20"]
}'
