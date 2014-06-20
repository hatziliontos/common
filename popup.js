// Get initial tab and window ID
var tabId, windowId;
chrome.tabs.query({active:true, currentWindow:true, windowType:'normal'},
  function(tabs) {
    if (tabs[0]) {
        // Found current tab
        window.tabId = tabs[0].id;
        windowId = tabs[0].windowId;
        requestUpdate();
    }
});
// Receive tab ID updates
chrome.tabs.onActivated.addListener(function(activeInfo) {
    if (activeInfo.windowId === windowId) {
        requestUpdate();
    }
});

// Communication with background:
var background = chrome.extension.getBackgroundPage();

// Backgrounds calls notify()
function notify(tabId, url, ip) {
    if (tabId === window.tabId) { // Tab == current active tab
        requestUpdate();
    }
}
// Get fresh information from background
function requestUpdate() {
    // tabId is the current active tab in this window
    var host = background.tabToHost[tabId] || '';
    var ip = host && background.hostToIP[host] || 'N/A';
    // Now, do something. For example:
    document.getElementById('host').textContent = host;
    document.getElementById('ip').textContent = ip;
}
