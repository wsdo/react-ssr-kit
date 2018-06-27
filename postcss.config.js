const pxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['ios >= 8', "Android >= 4"]
    }),
    pxtorem({
      rootValue: 100,
      propList: ["*", "!border"],
    })
  ]
}