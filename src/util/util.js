// summon all utils together and export them to globals for better performance
import {
  mouseClickEvents, mouseHoverEvents, getElementTransitionDuration,
  emulateTransitionEnd, passiveHandler, queryElement,
} from 'shorter-js';
import bootstrapCustomEvent from './bootstrapCustomEvent';
import dispatchCustomEvent from './dispatchCustomEvent';
import setFocus from './setFocus';
import styleTip from './styleTip';
import getScroll from './getScroll';

// for faster execution
// export this object to global
const Util = {
  // selector
  queryElement,
  // transition
  getElementTransitionDuration,
  emulateTransitionEnd,
  bootstrapCustomEvent,
  dispatchCustomEvent,
  mouseClickEvents,
  mouseHoverEvents,
  passiveHandler,
  // misc
  setFocus,
  styleTip,
  getScroll,
};

export default Util;
