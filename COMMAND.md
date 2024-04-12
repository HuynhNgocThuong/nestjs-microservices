1. nest generate library common
2. nest generate database -p common
3. nest generate config -p common

4. nest generate app reservations
5. nest generate resource reservations
6. nest g module logger

## Authentication

7. nest g app auth

- pnpm i @nestjs/passport passport passport-local
- pnpm i -D @types/passport-local
- pnpm i @nestjs/jwt passport-jwt
- pnpm i -D @types/passport-jwt

# K8S

- kubectl create deployment reservations --image=<image-name> --dry-runs=client -o yaml > deployment.yaml
- kubectl create secret docker-registry gcr-json-key --docker-server=<gcr-server-cloud> --docker-username=\_json_key --docker-password="$(cat ./file.json)" --docker-email=<abcd@gmail.com>
