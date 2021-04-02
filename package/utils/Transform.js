import UnitUtil from './UnitUtil'

class Transform {
  constructor(centerX, centerY, scale, angle) {
    this.centerX = centerX ? centerX : 0;
    this.centerY = centerY ? centerY : 0;
    this.scale = scale ? scale : 1;
    this.angle = angle ? -angle : 0;
  }
  toScreenWidth(value) {
    return UnitUtil.mmToPixel(value) * this.scale;
  }
  toScreenPoint(point) {
    var oldX, oldY, newX, newY, len, newAngle;
    oldX = this.toScreenWidth(point.x);
    oldY = this.toScreenWidth(point.y);
    newX = oldX + this.centerX;
    newY = -oldY + this.centerY;
    // if (this.angle === 0) {
    //   newX = oldX + this.centerX;
    //   newY = -oldY + this.centerY;
    // } else {
    //   len = Math.sqrt(oldX * oldX + oldY * oldY);
    //   newAngle = Math.atan2(oldY, oldX) - this.angle;
    //   newX = len * Math.cos(newAngle) + this.centerX;
    //   newY = -len * Math.sin(newAngle) + this.centerY;
    // }

    return {
      x: newX,
      y: newY
    }
  }
}

export default Transform
