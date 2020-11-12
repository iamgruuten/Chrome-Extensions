console.log("Chrome Extension has loaded")

chrome.runtime.onMessage.addListener(changeLoad);

let filenames = [
    "Images/cat.jpg"
];

function changeLoad(message, sender, sendResponse){
    console.log("Change Images to cats")

    let imgs = document.getElementsByTagName('img');

    for(imgElt of imgs){
        let file = filenames[0];
        let url = chrome.runtime.getURL(file);
        imgElt.src = url;
        console.log(url);
    }
}