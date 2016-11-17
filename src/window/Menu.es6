const { app, Menu } = require('electron')

let template = [
  {
    label: '编辑',
    submenu: [
      {
        role: 'undo',
        label: '撤消'
      },
      {
        role: 'redo',
        label: '重做'
      }
    ]
  },
  {
    role: 'window',
    label: '窗口',
    submenu: [
      {
        role: 'minimize',
        label: '最小化',
        accelerator: 'CmdOrCtrl+M'
      },
      {
        role: 'close',
        label: '关闭',
        accelerator: 'CmdOrCtrl+W'
      }
    ]
  }
]

if(process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
}

if (process.env.NODE_ENV !== 'production') {
  let devTools = {
    label: '开发者工具',
    submenu: [
      {
        label: '重载',
        accelerator: 'CmdOrCtrl+R',
        click(item, focusWindow) {
          if(focusWindow) focusWindow.webContents.reload()
        }
      },
      {
        label: '切换',
        accelerator: 'CmdOrCtrl+T',
        click(item, focusWindow) {
          if(focusWindow) focusWindow.webContents.toggleDevTools()
        }
      }
    ]
  }
  template.splice(template.length - 1, 0, devTools)
}

const menu = Menu.buildFromTemplate(template)
module.exports = menu;
