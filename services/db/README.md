# PostgreSQL Database

## Description

The persistence layer of the application

## Docker

You can run PostgreSQL in Docker and populate it with the content of this
directory running the following command:

```
docker run --name alpha-postgres \
  -v ${PWD}/preload.sql:/docker-entrypoint-initdb.d/preload.sql \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=alpha \
  -d postgres:11
```

You can change the default password with the environmental variable
`POSTGRES_PASSWORD`.
