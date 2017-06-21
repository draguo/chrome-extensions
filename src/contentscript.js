
chrome.contextMenus.create({"title": '测试', "contexts": ['all'],"onclick": genericOnClick});

function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}
