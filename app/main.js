// ./app/main.js

//采用javascript严格模式
'use strict';

// 应用的控制模块
const electron = require('electron');
const app = electron.app;

const VERSION = "v1.0.0"
const APPNAME = "DataView"
app.setName(APPNAME)

app.on('window-all-closed', () => {app.quit();} );

app.on('ready', () => {
  var mainWindow = new electron.BrowserWindow();
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.maximize();
  mainWindow.on('closed', () => {mainWindow = null;});
  //mainWindow.openDevTools();
});