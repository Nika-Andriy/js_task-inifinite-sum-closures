'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const addNumber = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return addNumber;
  };

  return addNumber;
}

module.exports = makeInfinityAdder;
