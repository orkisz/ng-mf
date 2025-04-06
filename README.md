## Run any app
```bash
yarn nx run <app-name>:serve
```

## Run shell + apps
```bash
yarn nx serve korki --devRemotes=login,dashboard,<other apps>
```

## Add new app
```bash
yarn nx g @nx/angular:remote apps/<app-name> --prefix=<prefix for ng components> --host=korki
```

## Add new library
```bash
yarn nx g @nx/angular:lib libs/<lib-name> --prefix <prefix for ng components>
```

## Build any app
```bash
yarn nx build <app-name>
```

## Use docker compose
```bash
docker-compose up -d

open http://localhost:8080
```
