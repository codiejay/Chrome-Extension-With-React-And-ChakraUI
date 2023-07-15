const keepAlive = () =>
  setInterval(() => {
    chrome.runtime.getPlatformInfo();
  }, 20e3);
chrome.runtime.onStartup.addListener(keepAlive);

//You can delete this if you don't need to keep your extension running in the background
keepAlive();
