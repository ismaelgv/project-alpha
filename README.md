# Project Alpha

## Description

This is a playground project to test different technologies in a K8s deployment.

Currently you can find the following services:

- [**CRUD**](services/crud/): a CRUD service to access the persisten layer. This
  service is written in Java using Spring Boot framework.
- [**Screamer**](services/screamer/): microservice that screams everything you
  send to it. This service is written in Python using FastAPI framework.
- [**UI**](services/ui/): a simple web UI. This component is written in
  TypeScript using React.
- [**API Gateway**](services/gateway):
  - [_Development_](services/gateway/local-nginx): a simple NGINX service for
    testing purposes in the development enviroment. It is deployed using Docker
    and shall not be running in production K8s cluster.
