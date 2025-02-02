'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateInAction = { ...state };
  const response = [];

  actions.map((action) => {
    if (action.type === 'addProperties') {
      stateInAction = { ...stateInAction, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      stateInAction = { ...stateInAction };

      action.keysToRemove.map(
        (keyToRemove) => delete stateInAction[keyToRemove],
      );
    }

    if (action.type === 'clear') {
      stateInAction = {};
    }

    response.push(stateInAction);
  });

  return response;
}

module.exports = transformStateWithClones;
