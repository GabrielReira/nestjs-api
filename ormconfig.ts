module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    "dist/**/*.entity{.ts,.js}"
  ],
  migrations: [
    'dist/src/migrations/*{.ts,.js}'
  ],
  cli: {
    "migrationsDir": "src/migrations"
  },
  autoLoadEntities: true,
  synchronize: false
}