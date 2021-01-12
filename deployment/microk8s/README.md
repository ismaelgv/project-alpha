# MicroK8s Deployment

## Requirements

- MicroK8s
- MicroK8s add-ons:
  - Ingress
  - Storage
  - [Registry](https://microk8s.io/docs/registry-built-in)

## Deployment

1. Your MicroK8s cluster must be properly configured and runnning with the
   required add-ons.
2. Push images to repository. You can use the
   [`build & push script`](scripts/build_and_push_images.sh) to build all services:
   ```
   bash scripts/build_and_push_images.sh
   ```
3. You can configure some parameters in `database/config.yaml` and
   `database/secret.yaml`.
4. Load all the K8s objects in the directory:
   ```
   microk8s kubectl apply -f ./ -R
   ```
5. You should be able to access to the application in your web browser simply
   using [`http://localhost`](http://localhost).

