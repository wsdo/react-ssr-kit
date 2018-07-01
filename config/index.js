const isProd = process.env.NODE_ENV === 'production'

const proUrl = 'http://api.shudong.wang' // 生产环境api地址
// const devUrl = 'https://news-at.zhihu.com' // 开发api地址
const devUrl = 'http://api.shudong.wang' // 开发api地址

const FaceUrl = isProd ? proUrl : devUrl

module.exports = {
  baseUrl: FaceUrl,
  client: {
    // baseurl: '/api/4',
    baseurl: '/v1',
    timeout: 10000
  },
  server: {
    baseurl: FaceUrl + '/v1',
    timeout: 10000
  }
}
