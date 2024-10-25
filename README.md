## utils-api

### install

```sh
npm install
```

### run as dev
```sh
npm run start:dev
```
### expect
```sh
[2:51:24 PM] Starting compilation in watch mode...

[2:51:25 PM] Found 0 errors. Watching for file changes.

[Nest] 685431  - 09/25/2024, 2:51:25 PM     LOG [NestFactory] Starting Nest application...
[Nest] 685431  - 09/25/2024, 2:51:25 PM     LOG [InstanceLoader] AppModule dependencies initialized +6ms
[Nest] 685431  - 09/25/2024, 2:51:25 PM     LOG [RoutesResolver] AppController {/}: +4ms
[Nest] 685431  - 09/25/2024, 2:51:25 PM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 685431  - 09/25/2024, 2:51:25 PM     LOG [NestApplication] Nest application successfully started +1ms
```

### test
```sh
# <root>/src/app.http
###
GET http://localhost:3000
```

### expect
```sh
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
Date: Wed, 25 Sep 2024 07:52:06 GMT
Connection: keep-alive
keep-alive: timeout=5

Hello World!
```