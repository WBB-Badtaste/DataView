//采用javascript严格模式
//'use strict';

// 应用的控制模块
const {app, BrowserWindow, dialog}= require('electron')

var mainWindow = null

function CreateWindow() {
  mainWindow = new BrowserWindow({show:false})
  mainWindow.loadURL('file://' + __dirname + '/Index.html')
  mainWindow.maximize()
  mainWindow.on('closed',           ()=>{mainWindow = null})
  mainWindow.once('ready-to-show',  ()=>{mainWindow.show()})
}

app.on('window-all-closed', ()=> {
  /*
  var dirList = dialog.showOpenDialog({
    browserWindow: this,
    title: "Open Config File",
    defaultPath: "./Config",
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif']},
      {name: 'Movies', extensions: ['mkv', 'avi', 'mp4']},
      {name: 'Custom File Type', extensions: ['as']},
      {name: 'All Files', extensions: ['*']}
    ],  
    properties: ["openFile","createDirectory","multiSelections"]
  })
  dirList.forEach(function(dir) {
    console.log(dir)
  }, this);*/
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

