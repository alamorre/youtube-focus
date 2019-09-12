const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FOCUS':
      // If we're now focusing, inject CSS
      if(!state){
        chrome.tabs.insertCSS(null, { file: "focus.css", allFrames: true }, function() { console.log('Focus style on') })
      } else {
        chrome.tabs.insertCSS(null, { file: "unfocus.css", allFrames: true }, function() { console.log('Focus style off') })
      }
      // Return the new state
      return !state;

    // Bring theatre in front of buttons
    case 'LOWER_SEARCH':
      chrome.tabs.insertCSS(null, { file: "focus-search.css", allFrames: false }, function() { console.log('Lower search bar') })
      return state;

    // Bring theatre in front of buttons
    case 'RAISE_SEARCH':
      chrome.tabs.insertCSS(null, { file: "unfocus-search.css", allFrames: false }, function() { console.log('Raise search bar') })
      return state;

    // Bring theatre in front of buttons
    case 'PREP_THEATRE':
      chrome.tabs.insertCSS(null, { code: "#player-theater-container{ z-index: 200 !important; }", allFrames: false }, function() { })
      return state;

    default:
      return state;
  }
};
