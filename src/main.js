const { app, BrowserWindow } = require('electron')
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080
const path = require('path')
const menu = require('window/Menu')

const iconPath = path.join(__dirname, '../public/images/logo.png')

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

      if (process.platform === 'darwin') {
        app.dock.setIcon(iconPath)
      }

      app.setApplicationMenu(menu)

      let path = `http://localhost:${port}/webpack-dev-server/index.html`
      if (NODE_ENV === 'development') {
        self.appWindow.webContents.openDevTools()
      } else {
        path = `file://${__dirname}/index.html`
      }
      self.appWindow.webContents.loadURL(path)
    })

    app.on('close', () => {
      if(process.platform !== 'darwin') {
        app.quit()
      }
    })
  }
}

new Main()
