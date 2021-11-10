learning-typeorm-mysql-restapi-example
===

Learn TypeORM and make restAPI web service
> TypeORM을 공부하며 restapi 웹서비스를 만드는 과정을 작성합니다
---

# Environments
1. nodejs
2. express
3. typeorm
4. typescript
5. mysql
6. vscode

# Start
First, check and update `ormconfig-open.js`
```
$ vi ormconfig-open.js
$ mv ./ormconfig-open.js ./ormconfig.js
$ npm i
$ npm start
```

# Test
```
$ npm test
```

# Entity
- Alias
- Snake naming strategy
- Primary key using fuction result

# Route
- /account/...
- /account/third-party/...
- /user/...
- /user/.../note/...

# To do
- [x] Set relationship: user-userEmail-verifyEmail
- [ ] sendmail
- [ ] 3rdparty firebase4 4
- [ ] route....