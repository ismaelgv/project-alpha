#!/usr/bin/env bash

if [[ -z "${DOCKER_HOST_IP}" ]]; then
    echo "Error: DOCKER_HOST_IP variable is not set!"
    exit 1
fi

docker run --rm \
    -p 80:80 \
    -e DOCKER_HOST_IP="${DOCKER_HOST_IP}" \
    -e NGINX_ENVSUBST_TEMPLATE_SUFFIX=".template.conf" \
    -v "${PWD}/templates":/etc/nginx/templates/ \
    --name "project-alpha-gateway" \
    nginx:1.19-alpine
