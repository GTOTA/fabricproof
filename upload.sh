curl -s -X POST   http://localhost:4000/uploadFile  -H "Content-Type: multipart/form-data"   -H "authorization: Bearer $1"  -F "file=@invoke.sh" 
