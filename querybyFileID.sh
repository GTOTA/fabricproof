curl -s -X GET http://localhost:8000/viewFile?fileID=$1 \
  -H "authorization: Bearer $2" \
  -H "content-type: application/json"
