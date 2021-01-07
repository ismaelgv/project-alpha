# Screamer

## Description
This service will scream all the content that you send to it.

## Documentation
You can check all the OpenAPI documentation of the service in the endpoint:
`http://serviceurl:8080/docs`


## Run Screamer service
### Local
* Requirements:
  * Python 3.9
  * Poetry

Install the project dependencies using Poetry:
```
poetry install
```

You can start the service with the following command:
```
poetry run uvicorn --host 0.0.0.0 --port 8000 screamer:app
```

### Docker
* Requirements:
  * Docker 

Run the following command in the service project root directory to build the
Docker images:
```
docker build -t screamer .
```

You can run the service using Docker:
```
docker run --rm -p 8000:8000 screamer
```
