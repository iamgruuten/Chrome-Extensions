//Chrome API - Messsaging

console.log("Cats extension loaded");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    console.log("Button is clicked");

    let msg = {
        txt: "hello"
    }

    chrome.tabs.sendMessage(tab.id, msg)
    
}