//采用javascript严格模式
'use strict'

const configHandler = require('./configHandler')
const {app, BrowserWindow, dialog, ipcMain}= require('electron')

var mainWindow = null

function CreateWindow() {
  mainWindow = new BrowserWindow({show:false})
  mainWindow.loadURL('file://' + __dirname + '/Index.html')
  //mainWindow.maximize()
  mainWindow.on('closed',           ()=>{mainWindow = null})
  mainWindow.once('ready-to-show',  ()=>{mainWindow.show()})
}

app.on('window-all-closed', ()=> {
  app.quit()
})

app.on('ready', ()=> {
  CreateWindow()
})

app.on('activate', ()=> {
  if(mainWindow == null) {
    CreateWindow()
  }
})

ipcMain.on('ConsolePrint', (event, object)=> {
  console.log(object)
})

ipcMain.on('OpenConfigFile', ()=> {

  // open file dialog
  dialog.showOpenDialog({
    browserWindow: this,
    title: "Open Config File",
    defaultPath: "./Config",
    filters: [{name: 'Configs', extensions: ['json', 'xml']}, {name: 'All Files', extensions: ['*']}],  
    properties: ["openFile", "createDirectory"]
  }, (files)=> {

    // parser
    configHandler.parser(files[0], (config)=> {
      console.log(config)
      config.forEach((packetStruct)=> {
        
        // set config tree 
      })
    })
  })
})