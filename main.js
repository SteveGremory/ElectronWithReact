const {BrowserWindow, app} = require("electron");
const path = require("path")

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1920,
        height: 1080,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })
    
    window.loadFile('index.html');
}

app.whenReady().then(createWindow)