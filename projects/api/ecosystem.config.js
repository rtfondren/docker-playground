module.exports = {
  apps: [
    {
      name: "api",
      cwd: "dist",
      script: "app.js",
      merge_logs: true,
      env: {
        PORT: 3000,
        DATABASE_URL:
          "postgresql://postgres:postgres@localhost:5432/db-api?schema=public",
      },
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
