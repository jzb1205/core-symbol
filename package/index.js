import LinePointCell from "./point/LinePointCell";
import RectanglePointCell from "./point/RectanglePointCell";
import TextPointCell from "./point/TextPointCell";
import PolylinePointCell from "./point/PolylinePointCell";
import PolygonPointCell from "./point/PolygonPointCell";
import CurvelinePointCell from "./point/CurvelinePointCell";
import EllipsePointCell from "./point/EllipsePointCell";
import CurvegonPointCell from "./point/CurvegonPointCell";
import ArcPointCell from "./point/ArcPointCell";
import PiePointCell from "./point/PiePointCell";
import ChordPointCell from "./point/ChordPointCell";
import SimplePointCell from "./point/SimplePointCell";
import SurfacePointCell from "./point/SurfacePointCell";
import Transform from "./utils/Transform";
import PointCellType from "./supportClasses/PointCellType";
import elesymbol from './../config/elesymbol'

export class PointSymbol {
  constructor(dv) {
    this.cellsCount = dv ? dv._cellsCount : 0;
    this.cellsBound =  dv ? dv._cellsBound : {}
    this.pointCells = [];
  }
  serialization(dv) {
    this.pointCells = []
    this.symbolType = dv._symbolType;
    //符号唯一代码
    this.symbolCode = dv._symbolCode;
    this.symbolName = dv._symbolName;
    //绘制模式
    this.drawMode = dv._drawMode;
    this.cellsCount = dv._cellsCount;
    this.cellsBound.left = dv._cellsBound._left;
    this.cellsBound.right = dv._cellsBound._right;
    this.cellsBound.bottom = dv._cellsBound._bottom;
    this.cellsBound.top = dv._cellsBound._top;
    var i = 0,
      cellType,
      pointCell;
    var cellsData = dv._pointCells;
    while (i < this.cellsCount) {
      cellType = cellsData[i]._cellType;
      pointCell = this.createCell(cellType);
      if (pointCell) {
        pointCell.serialization(cellsData[i]);
        this.pointCells.push(pointCell);
      }
      i++;
    }
  }
  createCell(cellType) {
    var result = undefined;
    switch (cellType) {
      case PointCellType.LinePoint:
        result = new LinePointCell();
        break;
      case PointCellType.RectanglePoint:
        result = new RectanglePointCell();
        break;
      case PointCellType.TextPoint:
        result = new TextPointCell();
        break;
      case PointCellType.PolylinePoint:
        result = new PolylinePointCell();
        break;
      case PointCellType.PolygonPoint:
        result = new PolygonPointCell();
        break;
      case PointCellType.CurvelinePoint:
        result = new CurvelinePointCell();
        break;
      case PointCellType.EllipsePoint:
        result = new EllipsePointCell();
        break;
      case PointCellType.CurvegonPoint:
        result = new CurvegonPointCell();
        break;
      case PointCellType.ArcPoint:
        result = new ArcPointCell();
        break;
      case PointCellType.PiePoint:
        result = new PiePointCell();
        break;
      case PointCellType.ChordPoint:
        result = new ChordPointCell();
        break;
      case PointCellType.SimplePoint:
        result = new SimplePointCell();
        break;
    }

    return result;
  }
  draw(context, geometry, symbolStyle) {

    if (!symbolStyle || symbolStyle && !symbolStyle.symbolid) {
      return;
    }
    this.serialization(elesymbol[symbolStyle.symbolid]);

    var color = -1,
      angle = 0,
      scale = 1,
      opacity = 1,
      transform;
    if (symbolStyle) {
      color = symbolStyle.symbolcolor;
      angle = (symbolStyle.angle * Math.PI) / 180;
      scale = symbolStyle.symbolsize;
      opacity = symbolStyle.opacity;
    }
    transform = new Transform(geometry.x, geometry.y, scale, angle);
    this.pointCells.forEach(function (pointCell) {
      pointCell.preparePen(transform, 1, color);
      if (pointCell instanceof SurfacePointCell) {
        pointCell.prepareBrush(color);
      }
      context.globalAlpha = symbolStyle.opacity;
      pointCell.draw(context, transform);
    });
  }
  cellsBoundWidth() {
    return this.cellsBound.right - this.cellsBound.left > 0 ?
      this.cellsBound.right - this.cellsBound.left :
      this.cellsBound.left - this.cellsBound.right;
  }
  cellsBoundHeight() {
    return this.cellsBound.bottom - this.cellsBound.top > 0 ?
      this.cellsBound.bottom - this.cellsBound.top :
      this.cellsBound.top - this.cellsBound.bottom;
  }
}