import {
  ISize, IPostCoord, ICoordArea,
} from '../model';

const pitchSize: ISize = {
  x: 86, y: 105
}

const pitchCoord: ICoordArea = {
  leftBottom: { x: 0, y: 0 },
  rightBottom: { x: 86, y: 0 },
  leftUpper: { x: 0, y: 105 },
  rightUpper: { x: 86, y: 105 },
}

const postCoord: IPostCoord = {
  left: { x: 30.34, y: 0 },
  right: { x: 37.66, y: 0 },
  center: { x: 34, y: 0 },
}

const goalAreaCoord: ICoordArea = {
  leftBottom: { x: 24.84, y: 0 },
  rightBottom: { x: 43.16, y: 0 },
  leftUpper: { x: 24.84, y: 6 },
  rightUpper: { x: 43.16, y: 6 },
}

const penaltyAreaCoord: ICoordArea = {
  leftBottom: { x: 12.34, y: 0 },
  rightBottom: { x: 55.66, y: 0 },
  leftUpper: { x: 12.34, y: 18 },
  rightUpper: { x: 55.66, y: 18 },
}

const dangerZoneCoord: ICoordArea = {
  leftBottom: { x: postCoord.left.x, y: 6 },
  rightBottom: { x: postCoord.right.x, y: 6 },
  leftUpper: { x: postCoord.left.x, y: penaltyAreaCoord.leftUpper.y },
  rightUpper: { x: postCoord.right.x, y: penaltyAreaCoord.rightUpper.y },
}

export {
  pitchSize,
  pitchCoord,
  postCoord,
  goalAreaCoord,
  penaltyAreaCoord,
  dangerZoneCoord,
}