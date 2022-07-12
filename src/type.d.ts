interface ICurrentPlayer {
  currentPlayer: string;
}

type CurrentPlayerState = {
  player: ICurrentPlayer;
}

type CurrentPlayerAction = {
  type: string;
  player: ICurrentPlayer;
}

type CurrentPlayerDispatchType = (args: CurrentPlayerAction) => CurrentPlayerAction;

