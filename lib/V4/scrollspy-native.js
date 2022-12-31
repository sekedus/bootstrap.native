
/* Native JavaScript for Bootstrap 4 | ScrollSpy
-----------------------------------------------*/

// SCROLLSPY DEFINITION
// ====================
var ScrollSpy = function(element, options) {

  // initialization element, the element we spy on
  element = queryElement(element);

  // reset on re-init
  element[stringScrollSpy] && element[stringScrollSpy].destroy();

  // DATA API
  var targetData = queryElement(element[getAttribute](dataTarget)),
      offsetData = element[getAttribute]('data-offset');

  // set options
  options = options || {};

  // invalidate
  if ( !options[target] && !targetData ) { return; } 

  // event targets, constants
  var self = this,
      spyTarget = options[target] && queryElement(options[target]) || targetData,
      links = spyTarget && spyTarget[getElementsByTagName]('A'),
      offset = parseInt(options['offset'] || offsetData) || 10,      
      items = [], targetItems = [], scrollOffset,
      scrollTarget = element[offsetHeight] < element[scrollHeight] ? element : window, // determine which is the real scrollTarget
      isWindow = scrollTarget === window;  

  // populate items and targets
  for (var i=0, il=links[length]; i<il; i++) {
    var href = links[i][getAttribute]('href'), 
        targetItem = href && href.charAt(0) === '#' && href.slice(-1) !== '#' && queryElement(href);
    if ( !!targetItem ) {
      items[push](links[i]);
      targetItems[push](targetItem);
    }
  }

  // private methods
  var updateItem = function(index) {
      var item = items[index],
        targetItem = targetItems[index], // the menu item targets this element
        dropdown = item[parentNode][parentNode],
        dropdownLink = hasClass(dropdown,'dropdown') && dropdown[getElementsByTagName]('A')[0],
        targetRect = isWindow && targetItem[getBoundingClientRect](),

        isActive = hasClass(item,active) || false,

        topEdge = (isWindow ? targetRect[top] + scrollOffset : targetItem[offsetTop]) - offset,
        bottomEdge = isWindow ? targetRect[bottom] + scrollOffset - offset : targetItems[index+1] ? targetItems[index+1][offsetTop] - offset : element[scrollHeight],

        inside = scrollOffset >= topEdge && bottomEdge > scrollOffset;

      if ( !isActive && inside ) {
        if ( !hasClass(item,active) ) {
          addClass(item,active);
          if (dropdownLink && !hasClass(dropdownLink,active) ) {
            addClass(dropdownLink,active);
          }
          dispatchCustomEvent.call(element, bootstrapCustomEvent( 'activate', 'scrollspy', items[index]));
        }
      } else if ( !inside ) {
        if ( hasClass(item,active) ) {
          removeClass(item,active);
          if (dropdownLink && hasClass(dropdownLink,active) && !getElementsByClassName(item[parentNode],active).length  ) {
            removeClass(dropdownLink,active);
          }
        }
      } else if ( !inside && !isActive || isActive && inside ) {
        return;
      }
    },
    toggleEvents = function(action){
      action( scrollTarget, scrollEvent, self.refresh, passiveHandler );
      action( window, resizeEvent, self.refresh, passiveHandler );
    },
    updateItems = function(){
      scrollOffset = isWindow ? getScroll().y : element[scrollTop];
      for (var index=0, itl=items[length]; index<itl; index++) {
        updateItem(index)
      }
    };

  // public method
  self.refresh = function() {
    updateItems();
  }
  self.destroy = function() {
    toggleEvents(off);
    delete element[stringScrollSpy];
  }

  // init
  if ( !element[stringScrollSpy] ) { // prevent adding event handlers twice
    toggleEvents(on);
  }
  self.refresh();
  element[stringScrollSpy] = self;
};

// SCROLLSPY DATA API
// ==================
supports[push]( [ stringScrollSpy, ScrollSpy, '['+dataSpy+'="scroll"]' ] );

