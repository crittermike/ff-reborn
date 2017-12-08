// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'ff-show-tab') {
    chrome.tabs.query({url: 'https://*.force.com/*', currentWindow: true}, (tabs) => {
      let tabId = tabs[0].id
      chrome.tabs.update(tabId, {active: true})
    })
  }
})
