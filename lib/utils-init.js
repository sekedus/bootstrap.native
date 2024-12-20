
/* Native JavaScript for Bootstrap | Initialize Data API
--------------------------------------------------------*/

var initCallback = function(lookUp){
  lookUp = lookUp || DOC;
  var initializeDataAPI = function( constructor, collection ){
    for (var i=0, l=collection[length]; i<l; i++) {
      new constructor(collection[i]);
    }
  };
  for (var i=0, l=supports[length]; i<l; i++) {
    initializeDataAPI( supports[i][1], lookUp[querySelectorAll] (supports[i][2]) );
  }
};

// bulk initialize all components
DOC[body] ? initCallback() : on( DOC, 'DOMContentLoaded', function(){ initCallback(); } );
