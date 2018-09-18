#!/bin/bash

VERSION=$(jq -r .version package.json)
TAG="chegvra/fabric-proof:$VERSION"
echo "Building $TAG"
docker build -t $TAG --label com.chegvra.version="$VERSION" .

