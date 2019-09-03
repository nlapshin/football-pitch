export interface ICoord {
  x: number;
  y: number;
}

export interface ICoordOpts {
  x?: number;
  y?: number;
}

export interface ISize {
  x: number;
  y: number;
}

export interface ICoordLine {
  start: ICoord;
  end: ICoord;
}

export interface ICoordArea {
  leftBottom: ICoord;
  rightBottom: ICoord;
  leftUpper: ICoord;
  rightUpper: ICoord;
}

export interface IPostCoord {
  left: ICoord;
  right: ICoord;
  center: ICoord;
}