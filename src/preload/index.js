import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  foo: (data) => ipcRenderer.invoke('sendSignal', data),
  getProducts: () => ipcRenderer.invoke('getProducts'),
  getProductsType: (id) => ipcRenderer.invoke('getProductsType', id)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
