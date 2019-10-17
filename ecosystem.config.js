module.exports = {
  apps: [
    {
      name: "react-next-koa2",
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
      // 测试服
      env: {
        NODE_ENV: "development",
        HOST: "0.0.0.0",
        PORT: 3000
      },
      // 正式服
      env_production: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 3300
        // 静态cdn地址
        // PUBLIC_URL: '//static.yay.com.cn/yuema'
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
      // "post-setup": "mkdir build",
      "post-deploy":
        "cnpm && cnpm install && npm run build:pro && pm2 reload ecosystem.config.js --env production"
    },
    development: {
      user: "root",
      host: "148.70.131.200",
      ref: "origin/master",
      repo: "https://github.com/pufei007/react-next-koa2.git",
      path: "/var/www/node-server/react-next-koa2",
      "post-setup": "mkdir build",
      "post-deploy":
        "rm -rf buildBak && mv build buildBak && cnpm && cnpm install && npm run build && pm2 reload ecosystem.config.js",
      // env: {
      //   NODE_ENV: "dev",
      //   PORT: 3012
      // }
    }
  }
};
