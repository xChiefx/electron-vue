/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
import { BrowserWindow } from "electron";
import path from 'path';

require('electron-debug')({ showDevTools: true })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  // 安装vue-devtools
  BrowserWindow.addDevToolsExtension(path.resolve(__dirname, '../../devTools/vue-devtools'));
})
  /*let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })*/

// Require `main` process to boot app
require('./index')
