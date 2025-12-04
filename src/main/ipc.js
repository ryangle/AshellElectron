const { ipcMain } = require('electron')

function onWindowEvent(mainWindow) {
  ipcMain.on('openMainWindow', () => {
    mainWindow.setResizable(true)
    mainWindow.setSize(800, 600)
    mainWindow.setResizable(false)
  })
}

export { onWindowEvent }
