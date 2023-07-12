const dummy = () => {
  console.log("dummy")
}

const inject = async (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: {
        tabId
      },
      world: "MAIN", // MAIN in order to access the window object
      func: dummy
    },
    () => {
      console.log("Background script got callback after injection")
    }
  )
  chrome.scripting.insertCSS({
    target: { tabId: tabId },
    css: ".cfc-virtual-scroll-content-wrapper { background-color: red; }"
  })
}

// Simple example showing how to inject.
// You can inject however you'd like to, doesn't have
// to be with chrome.tabs.onActivated
chrome.tabs.onActivated.addListener((e) => {
  inject(e.tabId)
  console.log("hellooooo")
})
