# Kubernetes Deployment

## Description

First you need a running Kubernetes deployment (p.e. [microk8s](), [minikube] or
[kind]()). You can find more details of some of them below.

## Classic - Plain yaml files

You just need `kubectl` to use this deployment method. You can find the related
files in the [`classic` directory](classic/).

1. You can configure some parameters in `classic/database/config.yaml` and
   `classic/database/secret.yaml`.
2. Load all the K8s objects in the directory:
   ```
   kubectl apply -f ./classic -R
   ```
3. You should be able to access to the application in your web browser simply
   using [`http://localhost`](http://localhost).

## Helm 3

You need Helm installed in your system and your cluster. You can find the
related files in the [`helm` directory](helm/).

1. You can configure some parameters in `helm/values.yaml`.
2. Install the Chart in your K8s cluster:
   ```
   helm upgrade --install alpha
   ```
3. You should be able to access to the application in your web browser simply
   using [`http://localhost`](http://localhost).

## Local Kubernetes clusters

### MicroK8s

#### Requirements

- MicroK8s
- MicroK8s add-ons:
  - Ingress
  - Storage
  - [Registry](https://microk8s.io/docs/registry-built-in)
  - Linkerd
  - Helm3 (only if you are using Helm)

#### Deployment

- Your MicroK8s cluster must be properly configured and runnning with the
  required add-ons.
- Push images to repository. You can use the
  [`build & push script`](microk8s/scripts/build_and_push_images.sh) to build
  all services:
  ```
  bash scripts/build_and_push_images.sh
  ```
