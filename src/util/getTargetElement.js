import getDocument from '@thednp/shorty/src/get/getDocument';
import querySelector from '@thednp/shorty/src/selectors/querySelector';
import closest from '@thednp/shorty/src/selectors/closest';
import getAttribute from '@thednp/shorty/src/attr/getAttribute';

import dataBsTarget from '../strings/dataBsTarget';
import dataBsParent from '../strings/dataBsParent';
import dataBsContainer from '../strings/dataBsContainer';

/**
 * Returns the `Element` that THIS one targets
 * via `data-bs-target`, `href`, `data-bs-parent` or `data-bs-container`.
 *
 * @param {HTMLElement} element the target element
 * @returns {HTMLElement?} the query result
 */
export default function getTargetElement(element) {
  const targetAttr = [dataBsTarget, dataBsParent, dataBsContainer, 'href'];
  const doc = getDocument(element);

  return targetAttr.map((att) => {
    const attValue = getAttribute(element, att);
    if (attValue) {
      return att === dataBsParent ? closest(element, attValue) : querySelector(attValue, doc);
    }
    return null;
  }).filter((x) => x)[0];
}
