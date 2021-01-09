# Web UI

## Description
This is the web user interface for the Project Alpha.

## Local

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Docker

You can build the Docker image for this component using the following command:
```
docker build -t alpha-ui .
```

This image run a production version of the UI using NGINX. The application is
exposed in the port 80 by default but you can map it to port 3000 if you do not
want to change other configurations.
```
docker run --rm -it --name alpha-ui -p 3000:80 alpha-ui
```
