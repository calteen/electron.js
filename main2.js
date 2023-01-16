const { app, BrowserWindow } = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadFile('index.html')

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


function createWindow () {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      backgroundColor: '#ffff00'
    })
   
   const secWindow = new BrowserWindow({
      width: 600,
      height: 400,
    })
   
    mainWindow.loadFile('index.html')
   
    secWindow.loadURL('https://www.digitalocean.com/')
   
    mainWindow.once('ready-to-show', mainWindow.show)
   }