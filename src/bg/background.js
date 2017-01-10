// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
//chrome.extension.onMessage.addListener(
  //function(request, sender, sendResponse) {
    //chrome.pageAction.show(sender.tab.id);
    //sendResponse();
  //});


tabtags = Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

chrome.commands.onCommand.addListener(function(command) {
  re = /(.*)-tabtag-(\d)/;
  match = re.exec(command)
  action = match[1]
  tabtag = match[2] - 1
  console.log(action)
  console.log(tabtag)

  if (action == 'save') {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      tabtags[tabtag] = tabs[0].id
      console.log(tabtags[0]);
    });
  }
  else if (action == 'open') {
    chrome.tabs.update(tabtags[tabtag], {'active': true});
  };
  console.log(tabtags);
});

