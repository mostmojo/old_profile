const fs = require('fs')
const path = require('path')
const terser = require('terser')
const { run } = require('runjs')

const CONSTANTS = {
  INDEX_MIN: 'index.js'
}

const CONFIG = {
  SRC: path.resolve(__dirname, 'src'),
  INDEX_JS: path.resolve(__dirname, 'src/index.js'),
  BUILD: path.resolve(__dirname, 'build')
}

const minifyAndWrite = (src, dest) => {
  const uglyIt = terser.minify(fs.readFileSync(src, 'utf8')).code

  fs.writeFileSync(dest, uglyIt)
}

const build = () => {
  // Delete build folder
  run(`rm -rf ${CONFIG.BUILD}`)
  // Make build folder
  run(`mkdir ${CONFIG.BUILD}`)
  // Copy everything inside src/ to build/
  run(`cp -R ${CONFIG.SRC}/* ${CONFIG.BUILD}`)

  // Generate index.min.js inro build/
  minifyAndWrite(CONFIG.INDEX_JS, `${CONFIG.BUILD}/${CONSTANTS.INDEX_MIN}`)
}

build()
