//采用javascript严格模式
//'use strict';

// 应用的控制模块
const {app, BrowserWindow, dialog, ipcMain}= require('electron')

var mainWindow = null

function CreateWindow() {
  mainWindow = new BrowserWindow({show:false})
  mainWindow.loadURL('file://' + __dirname + '/Index.html')
  //mainWindow.maximize()
  mainWindow.on('closed',           ()=>{mainWindow = null})
  mainWindow.once('ready-to-show',  ()=>{mainWindow.show()})
}

app.on('window-all-closed', ()=> {app.quit()})

app.on('ready', ()=> {
  CreateWindow()
})

app.on('activate', ()=> {
  if(mainWindow == null) {
    CreateWindow()
  }
})

ipcMain.on('ConsolePrint', (event, str)=> {
  console.log(str)
})

ipcMain.on('OpenConfigFile', (event)=> {
  var dir = dialog.showOpenDialog({
    browserWindow: this,
    title: "Open Config File",
    defaultPath: "./Config",
    filters: [
      {name: 'Configs', extensions: ['json', 'xml']},
      {name: 'All Files', extensions: ['*']}
    ],  
    properties: ["openFile", "createDirectory"]
  })

  console.log(dir)
})