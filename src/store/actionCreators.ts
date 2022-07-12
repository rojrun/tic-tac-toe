import * as actionTypes from './actionTypes';

export function setCurrentPlayer(player: ICurrentPlayer) {
  const action: CurrentPlayerAction = {
    type: actionTypes.SET_CURRENT_PLAYER,
    player
  }
  return getCurrentPlayer(action);
}

export function getCurrentPlayer(action: CurrentPlayerAction) {
  return (dispatch: CurrentPlayerDispatchType) => {
    dispatch(action);
  }
}