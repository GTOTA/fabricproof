curl -s -X GET http://localhost:4000/channels/mychannel/transactions/$1?peer=peer1 \
  -H "authorization: Bearer $2" \
  -H "content-type: application/json"
