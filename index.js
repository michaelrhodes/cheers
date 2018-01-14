var cheerio = require('cheerio')
var get = require('simple-get')
var type = 'content-type'
var xml = /xml/i

module.exports = cheers

function cheers (url, cb) {
  get.concat(url, function (err, res, buf) {
    if (err) return cb(err)

    try {
      var xmlMode = xml.test(res.headers[type])
      var $ = cheerio.load(buf.toString(), { xmlMode: xmlMode })
      cb(null, $)
    }
    catch (err) {
      cb(err)
    }
  })
}
