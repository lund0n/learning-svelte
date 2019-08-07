/* eslint-env node */
var path = require('path')
var pkg = require(path.join(process.cwd(), 'package.json'))

require('./workshop-setup')
  .setup(pkg.engines)
  .then(() => {
    console.log(`📦  Copying dimport files to public directory.`)
    var fs = require('fs-extra')
    return Promise.all([
      fs.copy(
        require.resolve('dimport/dist/index.mjs'),
        path.join(process.cwd(), 'public', 'dimport.js'),
      ),
      fs.copy(
        require.resolve('dimport/nomodule/index.js'),
        path.join(process.cwd(), 'public', 'dimport-nomodule.js'),
      ),
    ])
  })
  .then(() => {
    console.log(`⚙️  Generating exercise file list.`)
    return require('./generate-exercise-list')()
  })
  .then(
    () => {
      console.log(`💯  You're all set up! 👏`)
    },
    error => {
      console.error(`🚨  There was a problem:`)
      console.error(error)
      console.error(
        `\nIf you would like to just ignore this error, then feel free to do so and install dependencies as you normally would in "${process.cwd()}". Just know that things may not work properly if you do...`,
      )
    },
  )
