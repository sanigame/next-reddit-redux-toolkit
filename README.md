This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t next-reddit-redux-toolkit .`.
1. Run your container: `docker run -p 3000:3000 next-reddit-redux-toolkit`.

You can view your images created with `docker images`.

## Push image to hub.docker.com

1. Tag image: `docker tag next-reddit-redux-toolkit sanigame/next-reddit-redux-toolkit:latest`.
1. Push image: `docker push sanigame/next-reddit-redux-toolkit:latest`

## Using Kubernetes

1. Apply deployment `kubectl apply -f deployment.yaml`.
1. Get deployment `kubectl get deployment`.
1. Descrive detail `kubectl describe deployment next-reddit`.
1. Get pods `kubectl get pods`

For delete pod `kubectl delete deployment next-reddit`
