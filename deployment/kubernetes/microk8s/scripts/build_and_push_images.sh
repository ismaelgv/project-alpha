#!/bin/bash

script_path=$(dirname "$0")
base_path="${script_path}/../../../services"
services=('crud' 'ui' 'screamer')
repository='localhost:32000'
tag='latest'

echo "Build and push docker images to: ${repository}"

for service in "${services[@]}"; do
    echo -e "\n\n\n# Building ${service} =======================#"
    service_path="${base_path}/${service}"
    service_tag="${tag}"
    service_image="${repository}/alpha-${service}:${service_tag}"
    docker build -t "${service_image}" "${service_path}"
    docker push "${service_image}"
done

