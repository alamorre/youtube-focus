const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FOCUS':
      // If we're now focusing, inject CSS
      if(!state){
        chrome.tabs.insertCSS(null, { code: "ytd-watch-next-secondary-results-renderer{ display: none !important; }", allFrames: true }, function() { console.log('Watch next off') })
        chrome.tabs.insertCSS(null, { code: "ytd-browse{ display: none !important; }", allFrames: true }, function() { console.log('Home recommendations off') })
      } else {
        chrome.tabs.insertCSS(null, { code: "ytd-watch-next-secondary-results-renderer{ display: flex !important; }", allFrames: true }, function() { console.log('Watch next on') })
        chrome.tabs.insertCSS(null, { code: "ytd-browse{ display: flex !important; }", allFrames: true }, function() { console.log('Home recommendations on') })
      }
      // Return the new state
      return !state;

    // Bring theatre in front of buttons
    case 'PREP_THEATRE':
      chrome.tabs.insertCSS(null, { code: "#player-theater-container{ z-index: 200 !important; }", allFrames: false }, function() { console.log('Theater in front') })
      return state;

    default:
      return state;
  }
};
