'use strict'
import buble from '@rollup/plugin-buble'
import node from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import {terser} from 'rollup-plugin-terser'
import * as pkg from "./package.json";

// set headers
const year = (new Date).getFullYear()
const banner = 
`/*!
  * Native JavaScript for Bootstrap v${pkg.version} (${pkg.homepage})
  * Copyright 2015-${year} © ${pkg.author}
  * Licensed under MIT (https://github.com/thednp/bootstrap.native/blob/master/LICENSE)
  */`

const miniBanner = `// Native JavaScript for Bootstrap v${pkg.version} | ${year} © ${pkg.author} | ${pkg.license}-License`

// set config
const MIN = process.env.MIN === 'true' // true/false|unset
const FORMAT = process.env.FORMAT // umd|iife|esm|cjs

const INPUTFILE = process.env.INPUTFILE ? process.env.INPUTFILE : 'src/index.js'
const OUTPUTFILE = process.env.OUTPUTFILE ? process.env.OUTPUTFILE : (FORMAT === 'umd' ? './dist/bootstrap-native'+(MIN?'.min':'')+'.js' : './dist/bootstrap-native.'+FORMAT+(MIN?'.min':'')+'.js')

// process.env.NODE_ENV = "development";

const OUTPUT = {
  file: OUTPUTFILE,
  format: FORMAT, // or iife
}

const PLUGINS = [
  json(),
  node({
    mainFields: ['jsnext','module'], 
    dedupe: ['shorter-js', '@thednp/event-listener'],
  })
]

if (MIN){
  PLUGINS.push(terser({output: {preamble: miniBanner}}));
} else {
  OUTPUT.banner = banner;
}

if (FORMAT!=='esm') {
  OUTPUT.name = 'BSN';
}

if (INPUTFILE.includes('v4')){
  PLUGINS.push(buble({objectAssign: 'Object.assign'}));
}

export default [
  {
    input: INPUTFILE,
    output: OUTPUT,
    plugins: PLUGINS
  }
]