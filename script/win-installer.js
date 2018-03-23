#!/usr/bin/env node

const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');
const rimraf = require('rimraf');

deleteOutputFolder()
  .then(getInstallerConfig)
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  const rootPath = path.join(__dirname, '..');
  const outPath = path.join(rootPath, 'out');
  const distPath = path.join(rootPath, 'dist');

  return Promise.resolve({
    appDirectory: path.join(outPath, 'web-box-connect-win32-ia32'),  //productName-platform-arch
    exe: 'web-box-connect.exe',
    iconUrl: 'https://raw.githubusercontent.com/electron/electron-api-demos/master/assets/app-icon/win/app.ico',
    loadingGif: path.join(rootPath, 'assets', 'img', 'loading.gif'),
    noMsi: true,
    outputDirectory: path.join(distPath, 'windows-installer'),
    setupExe: 'web-box-connect.exe',
    setupIcon: path.join(rootPath, 'assets', 'app-icon', 'win', 'app.ico'),
    skipUpdateIcon: true
  })
}

function deleteOutputFolder () {
  return new Promise((resolve, reject) => {
    rimraf(path.join(__dirname, '..', 'out', 'windows-installer'), (error) => {
      error ? reject(error) : resolve()
    })
  })
}
