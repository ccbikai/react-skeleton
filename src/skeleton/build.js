require('babel-register', {
  cache: false
})

const fs = require('fs')
const { html } = require('./index.js')

function inject (str) {
  const tmpl = fs.readFileSync('./docs/index.html').toString()

  fs.writeFileSync('./docs/index.html', tmpl.replace('<!--placeholder-->', str))
}

inject(html)
