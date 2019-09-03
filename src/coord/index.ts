import { round } from 'mathjs';

import {
  ICoord, IPostCoord, ICoordArea,
} from './model';

import {
  pitchSize,
  pitchCoord,
  postCoord,
  goalAreaCoord,
  penaltyAreaCoord,
  dangerZoneCoord,
} from './designations'

export default class Pitch {
  private ROUND_COEF = 2;

  constructor() {}

  public get pitchSize(): ICoord { return pitchSize }
  public get pitchCoord(): ICoordArea { return pitchCoord }
  public get postCoord(): IPostCoord { return postCoord }
  public get goalAreaCoord(): ICoordArea { return goalAreaCoord }
  public get penaltyAreaCoord(): ICoordArea { return penaltyAreaCoord }
  public get dangerZoneCoord(): ICoordArea { return dangerZoneCoord }

  public checkToArea(coord: ICoord, area: ICoordArea) : boolean {
    const { x, y } = coord;

    const minx = area.leftBottom.x;
    const maxx = area.rightBottom.x;
    const miny = area.leftBottom.y;
    const maxy = area.leftUpper.y;

    if ((x < minx) || (x > maxx)) {
      return false;
    }

    if ((y < miny) || (y > maxy)) {
      return false;
    }

    return true;
  }

  public checkToPitch(coord: ICoord): boolean {
    return this.checkToArea(coord, this.pitchCoord);
  }

  public checkToGoalArea(coord: ICoord) {
    return this.checkToArea(coord, this.goalAreaCoord);
  }

  public checkToPenaltyArea(coord: ICoord) {
    return this.checkToArea(coord, this.penaltyAreaCoord);
  }

  public checkToDangerZone(coord: ICoord) {
    return this.checkToArea(coord, this.dangerZoneCoord);
  }

  public convertPercentToYard(coord: ICoord) {
    const { x, y } = coord;
    const { x: xLength, y: yLength } = this.pitchSize;

    return {
      x: this.round((x * xLength) / 100),
      y: this.round((y * yLength) / 100),
    };
  }

  public convertYardToPercent(coord: ICoord) {
    const { x, y } = coord;
    const { x: xLength, y: yLength } = this.pitchSize;

    return {
      x: this.round((x * 100) / xLength),
      y: this.round((y * 100) / yLength),
    };
  }

  private round(value: number): number {
    return round(value, this.ROUND_COEF);
  }
}