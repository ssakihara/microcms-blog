// next.jsを本番環境でpm2を使ってサーバを立てるとき
module.exports = {
  apps: [
    {
      name: 'microcms-blog',
      exec_mode: 'cluster',
      instances: 2, // 分散サーバ数 多ければCPU使用率高
      script: './node_modules/next/dist/bin/next',
      args: 'start',
    },
  ],
}
