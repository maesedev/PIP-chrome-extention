chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'var video = document.querySelector("video"); if (video) {video.requestPictureInPicture();} else {alert("ERROR: There´s no video on this page.")}'
    });
  });
  