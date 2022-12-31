
/* Native JavaScript for Bootstrap 4 | Carousel
----------------------------------------------*/

// CAROUSEL DEFINITION
// ===================
var Carousel = function( element, options ) {

  // initialization element
  element = queryElement( element );

  // reset on re-init
  element[stringCarousel] && element[stringCarousel].destroy();

  // set options
  options = options || {};

  // bind, index and timer
  var self = this,
      index = element.index = 0, timer = element.timer = 0, 
      // DATA API
      intervalAttribute = element[getAttribute](dataInterval),
      intervalOption = options[interval],
      intervalData = intervalAttribute === 'false' ? 0 : parseInt(intervalAttribute),  
      pauseData = element[getAttribute](dataPause) === hoverEvent || false,
      keyboardData = element[getAttribute](dataKeyboard) === 'true' || false,
    
      // strings
      component = 'carousel',
      paused = 'paused',
      direction = 'direction',
      carouselItem = 'carousel-item',
      dataSlideTo = 'data-slide-to',

      // custom events
      slideCustomEvent, slidCustomEvent; 

  self[keyboard] = options[keyboard] === true || keyboardData;
  self[pause] = (options[pause] === hoverEvent || pauseData) ? hoverEvent : false; // false / hover

  self[interval] = typeof intervalOption === 'number' ? intervalOption
                 : intervalOption === false || intervalData === 0 || intervalData === false ? 0
                 : isNaN(intervalData) ? 5000 // bootstrap carousel default interval
                 : intervalData;

  // constants
  var isSliding = false, // isSliding prevents click event handlers when animation is running
    isTouch = false, startXPosition = null, currentXPosition = null, endXPosition = null, // touch and event coordinates
    slides = getElementsByClassName(element,carouselItem), total = slides[length],
    slideDirection = self[direction] = left,
    leftArrow = getElementsByClassName(element,component+'-control-prev')[0], 
    rightArrow = getElementsByClassName(element,component+'-control-next')[0],
    indicator = queryElement( '.'+component+'-indicators', element ),
    indicators = indicator && indicator[getElementsByTagName]( "LI" ) || [];

  // invalidate when not enough items
  if (total < 2) { return; }

  // handlers
  var pauseHandler = function () {
      if ( self[interval] !==false && !hasClass(element,paused) ) {
        addClass(element,paused);
        !isSliding && ( clearInterval(timer), timer = null );
      }
    },
    resumeHandler = function() {
      if ( self[interval] !== false && hasClass(element,paused) ) {
        removeClass(element,paused);
        !isSliding && ( clearInterval(timer), timer = null );
        !isSliding && self.cycle();
      }
    },
    indicatorHandler = function(e) {
      e[preventDefault]();
      if (isSliding) return;

      var eventTarget = e[target]; // event target | the current active item

      if ( eventTarget && !hasClass(eventTarget,active) && eventTarget[getAttribute](dataSlideTo) ) {
        index = parseInt( eventTarget[getAttribute](dataSlideTo), 10 );
      } else { return false; }

      self.slideTo( index ); //Do the slide
    },
    controlsHandler = function (e) {
      e[preventDefault]();
      if (isSliding) return;

      var eventTarget = e.currentTarget || e.srcElement;

      if ( eventTarget === rightArrow ) {
        index++;
      } else if ( eventTarget === leftArrow ) {
        index--;
      }

      self.slideTo( index ); //Do the slide
    },
    keyHandler = function (e) {
      if (isSliding) return;
      switch (e.which) {
        case 39:
          index++;
          break;
        case 37:
          index--;
          break;
        default: return;
      }
      self.slideTo( index ); //Do the slide
    },
    toggleEvents = function(action){
      if ( self[pause] && self[interval] ) {
        action( element, mouseHover[0], pauseHandler );
        action( element, mouseHover[1], resumeHandler );
        action( element, touchEvents.start, pauseHandler, passiveHandler );
        action( element, touchEvents.end, resumeHandler, passiveHandler );
      }
    
      slides[length] > 1 && action( element, touchEvents.start, touchDownHandler, passiveHandler );
  
      rightArrow && action( rightArrow, clickEvent, controlsHandler );
      leftArrow && action( leftArrow, clickEvent, controlsHandler );
    
      indicator && action( indicator, clickEvent, indicatorHandler );
      self[keyboard] && action( window, keydownEvent, keyHandler );
    },
    // touch events
    toggleTouchEvents = function(action){
      action( element, touchEvents.move, touchMoveHandler, passiveHandler );
      action( element, touchEvents.end, touchEndHandler, passiveHandler );
    },  
    touchDownHandler = function(e) {
      if ( isTouch ) { return; } 
        
      startXPosition = parseInt(e.touches[0].pageX);

      if ( element.contains(e[target]) ) {
        isTouch = true;
        toggleTouchEvents(on);
      }
    },
    touchMoveHandler = function(e) {
      if ( !isTouch ) { e.preventDefault(); return; }

      currentXPosition = parseInt(e.touches[0].pageX);
      
      //cancel touch if more than one touches detected
      if ( e.type === 'touchmove' && e.touches[length] > 1 ) {
        e.preventDefault();
        return false;
      }
    },
    touchEndHandler = function(e) {
      if ( !isTouch || isSliding ) { return }
      
      endXPosition = currentXPosition || parseInt( e.touches[0].pageX );

      if ( isTouch ) {
        if ( (!element.contains(e[target]) || !element.contains(e.relatedTarget) ) && Math.abs(startXPosition - endXPosition) < 75 ) {
          return false;
        } else {
          if ( currentXPosition < startXPosition ) {
            index++;
          } else if ( currentXPosition > startXPosition ) {
            index--;        
          }
          isTouch = false;
          self.slideTo(index);
        }
        toggleTouchEvents(off);            
      }
    },

    // private methods
    isElementInScrollRange = function () {
      var rect = element[getBoundingClientRect](),
        viewportHeight = window[innerHeight] || HTML[clientHeight]
      return rect[top] <= viewportHeight && rect[bottom] >= 0; // bottom && top
    },
    setActivePage = function( pageIndex ) { //indicators
      for ( var i = 0, icl = indicators[length]; i < icl; i++ ) {
        removeClass(indicators[i],active);
      }
      if (indicators[pageIndex]) addClass(indicators[pageIndex], active);
    };


  // public methods
  self.cycle = function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }

    timer = setInterval(function() {
      isElementInScrollRange() && (index++, self.slideTo( index ) );
    }, self[interval]);
  };
  self.slideTo = function( next ) {
    if (isSliding) return; // when controled via methods, make sure to check again      
    
    var activeItem = self.getActiveIndex(), // the current active
        orientation;
    
    // first return if we're on the same item #227
    if ( activeItem === next ) {
      return;
    // or determine slideDirection
    } else if  ( (activeItem < next ) || (activeItem === 0 && next === total -1 ) ) {
      slideDirection = self[direction] = left; // next
    } else if  ( (activeItem > next) || (activeItem === total - 1 && next === 0 ) ) {
      slideDirection = self[direction] = right; // prev
    }

    // find the right next index 
    if ( next < 0 ) { next = total - 1; } 
    else if ( next >= total ){ next = 0; }

    // update index
    index = next;

    orientation = slideDirection === left ? 'next' : 'prev'; // determine type

    slideCustomEvent = bootstrapCustomEvent(slideEvent, component, slides[next]);
    slidCustomEvent = bootstrapCustomEvent(slidEvent, component, slides[next]);

    dispatchCustomEvent.call(element, slideCustomEvent); // here we go with the slide
    if (slideCustomEvent[defaultPrevented]) return; // discontinue when prevented
    
    isSliding = true;
    clearInterval(timer);
    timer = null;
    setActivePage( next );

    if ( supportTransitions && hasClass(element,'slide') ) {

      addClass(slides[next],carouselItem +'-'+ orientation);
      slides[next][offsetWidth];
      addClass(slides[next],carouselItem +'-'+ slideDirection);
      addClass(slides[activeItem],carouselItem +'-'+ slideDirection);

      emulateTransitionEnd(slides[next], function(e) {
        var timeout = e && e[target] !== slides[next] ? e.elapsedTime*1000+100 : 20;
        
        isSliding && setTimeout(function(){
          isSliding = false;

          addClass(slides[next],active);
          removeClass(slides[activeItem],active);

          removeClass(slides[next],carouselItem +'-'+ orientation);
          removeClass(slides[next],carouselItem +'-'+ slideDirection);
          removeClass(slides[activeItem],carouselItem +'-'+ slideDirection);

          dispatchCustomEvent.call(element, slidCustomEvent);

          if ( !DOC.hidden && self[interval] && !hasClass(element,paused) ) {
            self.cycle();
          }
        }, timeout);
      });

    } else {
      addClass(slides[next],active);
      slides[next][offsetWidth];
      removeClass(slides[activeItem],active);
      setTimeout(function() {
        isSliding = false;
        if ( self[interval] && !hasClass(element,paused) ) {
          self.cycle();
        }
        dispatchCustomEvent.call(element, slidCustomEvent);
      }, 100 );
    }
  };
  self.getActiveIndex = function () {
    return slides[indexOf](getElementsByClassName(element,carouselItem+' active')[0]) || 0;
  };
  self.destroy = function () {
    toggleEvents(off);
    clearInterval(timer);
    delete element[stringCarousel];
  };

  // init
  if ( !element[stringCarousel] ) { // prevent adding event handlers twice
    toggleEvents(on);
  }
  // set first slide active if none
  if (self.getActiveIndex()<0) {
    slides[length] && addClass(slides[0],active);
    indicators[length] && setActivePage(0);
  }
  // start to cycle if set
  if ( self[interval] ){ self.cycle(); }

  element[stringCarousel] = self;
};

// CAROUSEL DATA API
// =================
supports[push]( [ stringCarousel, Carousel, '['+dataRide+'="carousel"]' ] );

