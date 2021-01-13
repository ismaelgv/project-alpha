# MicroK8s Deployment

## Requirements

- MicroK8s
- MicroK8s add-ons:
  - Ingress
  - Storage
  - [Registry](https://microk8s.io/docs/registry-built-in)

## Deployment

- Your MicroK8s cluster must be properly configured and runnning with the
  required add-ons.
- Push images to repository. You can use the
  [`build & push script`](scripts/build_and_push_images.sh) to build all services:
  ```
  bash scripts/build_and_push_images.sh
  ```

### Classic

You just need `kubectl` to use this deployment method. You can find the related
files in the [`classic` directory](classic/).

1. You can configure some parameters in `classic/database/config.yaml` and
   `classic/database/secret.yaml`.
2. Load all the K8s objects in the directory:
   ```
   microk8s kubectl apply -f ./classic -R
   ```
3. You should be able to access to the application in your web browser simply
   using [`http://localhost`](http://localhost).
