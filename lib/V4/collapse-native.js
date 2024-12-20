
/* Native JavaScript for Bootstrap 4 | Collapse
-----------------------------------------------*/

// COLLAPSE DEFINITION
// ===================
var Collapse = function( element, options ) {

  // initialization element
  element = queryElement(element);

  // reset on re-init
  element[stringCollapse] && element[stringCollapse].destroy();

  // set options
  options = options || {};

  // bind, event targets and constants
  var self = this, 
    accordion = null, collapse = null,
    accordionData = element[getAttribute]('data-parent'),
    activeCollapse, activeElement,

    // component strings
    component = 'collapse',
    collapsed = 'collapsed',
    isAnimating = 'isAnimating',

    // custom events
    showCustomEvent = bootstrapCustomEvent(showEvent, component),
    shownCustomEvent = bootstrapCustomEvent(shownEvent, component),
    hideCustomEvent = bootstrapCustomEvent(hideEvent, component),
    hiddenCustomEvent = bootstrapCustomEvent(hiddenEvent, component),
    
    // private methods
    openAction = function(collapseElement,toggle) {
      dispatchCustomEvent.call(collapseElement, showCustomEvent);
      if ( showCustomEvent[defaultPrevented] ) return;
      collapseElement[isAnimating] = true;
      addClass(collapseElement,collapsing);
      removeClass(collapseElement,component);
      collapseElement[style][height] = collapseElement[scrollHeight] + 'px';
      
      emulateTransitionEnd(collapseElement, function() {
        collapseElement[isAnimating] = false;
        collapseElement[setAttribute](ariaExpanded,'true');
        toggle[setAttribute](ariaExpanded,'true');
        removeClass(collapseElement,collapsing);
        addClass(collapseElement, component);
        addClass(collapseElement,showClass);
        collapseElement[style][height] = '';
        dispatchCustomEvent.call(collapseElement, shownCustomEvent);
      });
    },
    closeAction = function(collapseElement,toggle) {
      dispatchCustomEvent.call(collapseElement, hideCustomEvent);
      if ( hideCustomEvent[defaultPrevented] ) return;
      collapseElement[isAnimating] = true;
      collapseElement[style][height] = collapseElement[scrollHeight] + 'px'; // set height first
      removeClass(collapseElement,component);
      removeClass(collapseElement,showClass);
      addClass(collapseElement,collapsing);
      collapseElement[offsetWidth]; // force reflow to enable transition
      collapseElement[style][height] = '0px';
      
      emulateTransitionEnd(collapseElement, function() {
        collapseElement[isAnimating] = false;
        collapseElement[setAttribute](ariaExpanded,'false');
        toggle[setAttribute](ariaExpanded,'false');
        removeClass(collapseElement,collapsing);
        addClass(collapseElement,component);
        collapseElement[style][height] = '';
        dispatchCustomEvent.call(collapseElement, hiddenCustomEvent);
      });
    },
    getTarget = function() {
      var href = element.href && element[getAttribute]('href'),
        parent = element[getAttribute](dataTarget),
        id = href || ( parent && parent.charAt(0) === '#' ) && parent;
      return id && queryElement(id);
    };
  
  // public methods
  self.toggle = function(e) {
    e[preventDefault]();
    if (!hasClass(collapse,showClass)) { self.show(); } 
    else { self.hide(); }
  };
  self.hide = function() {
    if ( collapse[isAnimating] ) return;    
    closeAction(collapse,element);
    addClass(element,collapsed);
  };
  self.show = function() {
    if ( accordion ) {
      activeCollapse = queryElement('.'+component+'.'+showClass,accordion);
      activeElement = activeCollapse && (queryElement('['+dataTarget+'="#'+activeCollapse.id+'"]',accordion)
                    || queryElement('[href="#'+activeCollapse.id+'"]',accordion) );
    }

    if ( !collapse[isAnimating] || activeCollapse && !activeCollapse[isAnimating] ) {
      if ( activeElement && activeCollapse !== collapse ) {
        closeAction(activeCollapse,activeElement); 
        addClass(activeElement,collapsed);
      }
      openAction(collapse,element);
      removeClass(element,collapsed);
    }
  };
  self.destroy = function() {
    off(element, clickEvent, self.toggle);
    delete element[stringCollapse];
  }

  // init
  if ( !element[stringCollapse] ) { // prevent adding event handlers twice
    on(element, clickEvent, self.toggle);
  }
  collapse = getTarget();
  collapse[isAnimating] = false;  // when true it will prevent click handlers  
  accordion = queryElement(options.parent) || accordionData && getClosest(element, accordionData);
  element[stringCollapse] = self;
};

// COLLAPSE DATA API
// =================
supports[push]( [ stringCollapse, Collapse, '['+dataToggle+'="collapse"]' ] );

