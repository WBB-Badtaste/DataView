const fs = require('fs')
const json = require('JSON')

exports.parser = (file, callback)=> {
  fs.readFile(file, 'utf8', (err, data)=> {
    if (err) {
      consle('Fail to read data. errCode:\n', err)
      return
    }

    callback(json.parse(data))
  })
}
