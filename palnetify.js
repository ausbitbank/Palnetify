// For cross browser compatibility
window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();


function onSuccess() {
  console.log("Successfully redirected to Palnet");
}

function onFail(){
  console.log("Failed to redirect");
}

function PALredirect() {
  var executing = browser.tabs.executeScript({
    file: "/redirect.js"
  });
  
  executing.then(onSuccess,onFail);
}

browser.browserAction.onClicked.addListener(PALredirect);