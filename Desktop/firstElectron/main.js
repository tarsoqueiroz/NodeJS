// First Electron app

const { app, BrowserWindow } = require('electron')

let win
function createWindow() {
  // Build window navigation
  win = new BrowserWindow({
    width:  800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // and load index.html of the app
  win.loadFile('index.html')

  // open the DevTools
  win.webContents.openDevTools()

  // emmited when window is closed
  win.on('close', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})