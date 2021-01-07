# CRUD service

## Description
This service handle all the interaction with the persistence layer.

## Documentation
You can access the documentation from the following URL when the application is
running: `http://serviceurl:8080/swagger-ui`

## Run Screamer service

### Configuration
Before starting the service you need a running instance of PostgreSQL. You can
configure all the information related to the connection in the properties file
located (`src/main/resources/application.properties`) or set the corresponding
environmental variables:

| Variable           | Description                 | Default value |
|--------------------|-----------------------------|---------------|
| `CRUD_DB_HOST`     | Hostname of the running DB. | `localhost`   |
| `CRUD_DB_PORT`     | Port of the DB.             | `5432`        |
| `CRUD_DB_USERNAME` | DB username.                | `postgres`    |
| `CRUD_DB_PASSWORD` | DB username password.       | `1234`        |

### Local
* Requirements:
  * Java 11
  * PostgreSQL

You can start the service with the following command:
```
./mvnw spring-boot:run
```

### Docker
* Requirements:
  * Docker 
  * Java 11 (only for building)

You can build the Docker image using Spring Boot CLI:
```
./mvnw spring-boot:build-image
```

You can run the service using Docker:
```
docker run --rm -it --name alpha-crud -p 8080:8080 alpha-crud:[TAG]
```
