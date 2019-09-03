import Pitch from './';

describe('pitch:coord', () => {
  describe('checkToArea', () => {
    it('should return true if the specified coord includes to area, otherwise return false', () => {
      const pitch = new Pitch();

      const area = {
        leftBottom: { x: 30, y: 30 },
        leftUpper: { x: 30, y: 40 },
        rightBottom: { x: 40, y: 30 },
        rightUpper: { x: 40, y: 40 },
      };

      expect(pitch.checkToArea({ x: 35, y: 35 }, area)).toBeTruthy;
      expect(pitch.checkToArea({ x: 29, y: 29 }, area)).toBeFalsy;
      expect(pitch.checkToArea({ x: 29, y: 35 }, area)).toBeFalsy;
      expect(pitch.checkToArea({ x: 41, y: 35 }, area)).toBeFalsy;
      expect(pitch.checkToArea({ x: 35, y: 29 }, area)).toBeFalsy;
      expect(pitch.checkToArea({ x: 35, y: 41 }, area)).toBeFalsy;
    });
  });

  describe('checkToPitch', () => {
    it('should check whether coord belongs to pitch', () => {
      const pitch = new Pitch();

      expect(pitch.checkToPitch({ x: 1, y: 1 })).toBeTruthy();
      expect(pitch.checkToPitch({ x: 65, y: 100 })).toBeTruthy();
      expect(pitch.checkToPitch({ x: 87, y: 100 })).toBeFalsy();
    });
  });

  describe('checkToGoalArea', () => {
    it('should return true if the specified coord includes to danger zone, otherwise return false', () => {
      const pitch = new Pitch();

      expect(pitch.checkToGoalArea({ x: 34, y: 6 })).toBeTruthy();
      expect(pitch.checkToGoalArea({ x: 31, y: 6 })).toBeTruthy();
      expect(pitch.checkToGoalArea({ x: 44, y: 6 })).toBeFalsy();
      expect(pitch.checkToGoalArea({ x: 24, y: 6 })).toBeFalsy();
      expect(pitch.checkToGoalArea({ x: 34, y: 7 })).toBeFalsy();
    });
  });

  describe('checkToPenaltyArea', () => {
    it('should return true if the specified coord includes to danger zone, otherwise return false', () => {
      const pitch = new Pitch();

      expect(pitch.checkToPenaltyArea({ x: 34, y: 12 })).toBeTruthy();
      expect(pitch.checkToPenaltyArea({ x: 31, y: 12 })).toBeTruthy();
      expect(pitch.checkToPenaltyArea({ x: 12, y: 12 })).toBeFalsy();
      expect(pitch.checkToPenaltyArea({ x: 56, y: 12 })).toBeFalsy();
      expect(pitch.checkToPenaltyArea({ x: 34, y: 22 })).toBeFalsy();
    });
  });

  describe('checkToDangerZone', () => {
    it('should return true if the specified coord includes to danger zone, otherwise return false', () => {
      const pitch = new Pitch();

      expect(pitch.checkToDangerZone({ x: 34, y: 12 })).toBeTruthy();
      expect(pitch.checkToDangerZone({ x: 31, y: 12 })).toBeTruthy();
      expect(pitch.checkToDangerZone({ x: 30, y: 12 })).toBeFalsy();
      expect(pitch.checkToDangerZone({ x: 38, y: 12 })).toBeFalsy();
      expect(pitch.checkToDangerZone({ x: 34, y: 20 })).toBeFalsy();
    });
  });

  describe('convertPercentToYard', () => {
    it('should convert percent coord to yard coord', () => {
      const pitch = new Pitch();

      expect(pitch.convertPercentToYard({ x: 50, y: 50 })).toEqual({ x: 43, y: 52.5 });
      expect(pitch.convertPercentToYard({ x: 40, y: 40 })).toEqual({ x: 34.4, y: 42 });
    });
  });

  describe('convertYardToPercent', () => {
    it('should convert yard coord to percent coord', () => {
      const pitch = new Pitch();

      expect(pitch.convertYardToPercent({ x: 43, y: 52.5 })).toEqual({ x: 50, y: 50 });
      expect(pitch.convertYardToPercent({ x: 34.4, y: 42 })).toEqual({ x: 40, y: 40 });
    });
  });
});
