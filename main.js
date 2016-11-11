const { app, BrowserWindow } = require('electron')
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080
const path = require('path')

const iconPath = path.join(__dirname, './public/images/logo.png')

class Main {
  constructor() {
    this.initApp()
  }

  initApp() {
    const self = this
    app.on('ready', () => {
      self.appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: iconPath
      })

      if (NODE_ENV === 'development') {
        self.appWindow.webContents.openDevTools()
        self.appWindow.webContents.loadURL(`http://localhost:${port}/webpack-dev-server/`)
      } else {
        self.appWindow.webContents.loadURL(`file://${__dirname}/dist/index.html`)
      }
    })

    app.on('close', () => {
      if(process.platform !== 'darwin') {
        app.quit()
      }
    })
  }
}

new Main()
