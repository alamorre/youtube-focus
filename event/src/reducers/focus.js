const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FOCUS':
      // If we're now focusing, inject CSS
      if(!state){
        chrome.tabs.insertCSS(null, { code: "#unfocus-button{ background: blue !important; }", allFrames: true }, function() { console.log('Focus style on.') })
      } else {
        chrome.tabs.insertCSS(null, { code: "#focus-button{ background: pink !important; }", allFrames: true }, function() { console.log('Focus style off.') })
      }
      // Return the new state
      return !state;
    default:
      return state;
  }
};
