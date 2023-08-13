function runPauseScriptInTab(tab) {
    // Only run in HTTP or HTTPS pages
    if (tab.url.startsWith('http://') || tab.url.startsWith('https://')) {
        // Execute the pause script
        chrome.scripting.executeScript({
            target: { tabId: tab.id, allFrames: true },
            files: [ "pause.js" ]
        });
    }
}

// Run the following when the extension is clicked
chrome.action.onClicked.addListener(function () {
    // Run in every open tab
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(runPauseScriptInTab);
    }); 
});
