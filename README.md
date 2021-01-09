# Project Alpha

## Description

This is a playground project to test different technologies in a K8s deployment.

## Deployment

### Docker Compose
You can deploy the project using Docker Compose too. You can find more
information in the [*Deployment Compose*](deployment/compose).

## Services

Currently you can find the following services:

- [**CRUD**](services/crud/):
  A CRUD service to access the persistence layer. This service is written in
  Java using Spring Boot framework.
- [**Screamer**](services/screamer/):
  Microservice that screams everything you send to it. This service is written
  in Python using FastAPI framework.
- [**UI**](services/ui/):
  A simple web UI. This component is written in TypeScript using React.
- [**API Gateway**](services/gateway):
  - [_Development_](services/gateway/local-nginx):
    A simple NGINX service for testing purposes in the development enviroment.
    It is deployed using Docker and shall not be running in production K8s
    cluster.
