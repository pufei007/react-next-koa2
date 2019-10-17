module.exports = {
  apps: [
    {
      name: "react-nextkoa2",
      script: "./server.js",
      cwd: "./", // current workspace
      watch: [
        // watch directorys and restart when they change
        ".next"
      ],
      ignore_watch: [
        // ignore watch
        "node_modules",
        "logs",
        "static"
      ],

      instances: 2, // start 2 instances
      node_args: "--harmony",
      env: {
        NODE_ENV: "production",
        PORT: 5999
      },
      out_file: "./logs/out.log", // normal log
      error_file: "./logs/err.log", // error log
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm Z" // date format
    }
  ],
  deploy: {
    production: {
      user: "root", // ssh 用户名
      host: "148.70.131.200", // 目标服务器地址
      ref: "origin/master",
      repo: "https://github.com/pufei007/react-next-koa2.git",
      path: "/var/www/node-server/react-next-koa2", // 目标服务器部署地址
      "post-deploy":
        "cnpm install && pm2 reload ecosystem.config.js --env production"
    },
    dev: {
      user: "osboxes",
      host: "192.168.1.186",
      ref: "origin/master",
      repo: "https://github.com/choelea/image-utils-web.git",
      path: "/home/osboxes/temp",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env dev",
      env: {
        NODE_ENV: "dev",
        PORT: 3012
      }
    }
  }
};
