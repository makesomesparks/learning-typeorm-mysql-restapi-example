const SnakeNamingStrategy = require('typeorm-naming-strategies').SnakeNamingStrategy;

module.exports = {
   "type": "mysql",
   "host": "127.0.0.0",
   "port": 3306,
   "username": "learntypeorm",
   "password": "learntypeorm-password",
   "database": "learntypeorm",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   },
   "namingStrategy": new SnakeNamingStrategy()
}
