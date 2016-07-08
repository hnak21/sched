const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
//  mainWindow = new BrowserWindow({width: 800, height: 600, nodeIntegration: false})

  mainWindow = new BrowserWindow({width: 1920, height: 1200, webPreferences: {nodeIntegration: false}})
  mainWindow.loadURL('file://' + __dirname + '/external-dragging.html')

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('active', function() {
  if (mainWindow === null)
    createWindow()
})
