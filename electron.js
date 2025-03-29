import { app, BrowserWindow, dialog, globalShortcut } from 'electron';
import updater from "electron-updater";
import path from 'path';

const { autoUpdater } = updater;
let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "public", "logo.ico"), // Cambia a tu icono
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false,
        },
    });

    // En desarrollo carga el servidor de Vite, en producción carga el archivo HTML generado
    const startUrl = app.isPackaged
        ? `file://${path.join(__dirname, "dist", "index.html")}`
        : "http://localhost:5173"; // Vite por defecto usa el puerto 5173

    mainWindow.loadURL(startUrl);

    // Habilitar DevTools con atajo
    globalShortcut.register("Ctrl+Shift+I", () => {
        mainWindow.webContents.openDevTools();
    });

    // Si la app está en producción, activar actualizaciones
    if (app.isPackaged) {
        setupUpdater();
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

function setupUpdater() {

    autoUpdater.setFeedURL({
        provider: 'github',
        owner: 'kevin2561', // Tu nombre de usuario de GitHub
        repo: 'sistema-control-letreros', // El nombre del repositorio
    });
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;

    autoUpdater.on("checking-for-update", () => {
        console.log("Buscando actualizaciones...");
    });

    autoUpdater.on("update-available", (info) => {
        console.log(`Nueva versión disponible: ${info.version}`);
        dialog.showMessageBox({
            type: "info",
            title: "Actualización disponible",
            message: `Se ha encontrado una nueva versión (${info.version}). La aplicación se actualizará automáticamente.`,
            buttons: ["OK"],
        });
    });

    autoUpdater.on("update-downloaded", () => {
        console.log("Actualización descargada. Reiniciando...");
        dialog.showMessageBox({
            type: "info",
            title: "Actualización lista",
            message:
                "La actualización se ha descargado. La aplicación se reiniciará para instalar la actualización.",
            buttons: ["Reiniciar ahora"],
        }).then(() => {
            autoUpdater.quitAndInstall();
        });
    });

    autoUpdater.on("error", (err) => {
        console.error("Error en la actualización:", err);
        dialog.showMessageBox({
            type: "error",
            title: "Error en la actualización",
            message: `Ocurrió un error durante la actualización: ${err.message}`,
            buttons: ["OK"],
        });
    });

    // Buscar actualizaciones al iniciar
    autoUpdater.checkForUpdatesAndNotify();
}