//采用javascript严格模式
//'use strict';

// 应用的控制模块
const electron = require('electron')
const app = electron.app

const VERSION = "v1.0.0"
const APPNAME = "DataView"
app.setName(APPNAME)

let mainWindow = null

function CreateWindow() {
  mainWindow = new electron.BrowserWindow({show:false})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.maximize()
  mainWindow.on('closed', ()=>{mainWindow = null})
  //mainWindow.once('ready-to-show', ()=>{mainWindow.show()})
  //mainWindow.openDevTools()
}

app.on('window-all-closed', ()=>{app.quit()})

app.on('ready', CreateWindow);

app.on('activate', ()=>{if(mainWindow == null){CreateWindow()}})

