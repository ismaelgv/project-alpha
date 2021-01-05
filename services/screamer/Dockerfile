FROM python:3.9

WORKDIR /app

ENV POETRY_VERSION=1.1.4
RUN pip install poetry==$POETRY_VERSION

ENV POETRY_VIRTUALENVS_CREATE=false

COPY pyproject.toml poetry.lock /app/
RUN poetry install --no-dev

COPY . /app/

ENV UVICORN_PORT=8000 \
    UVICORN_HOST=0.0.0.0

ENTRYPOINT uvicorn --host $UVICORN_HOST --port $UVICORN_PORT screamer:app
