import PointCell from './PointCell'
import GeomUtil from './../utils/GeomUtil'

class ArcPointCell extends PointCell {
    constructor(){
        super()
        this.width = 0;
        this.angle = 0;
        this.startAngle = 0;
        this.endAngle = 0;
        this.longAxis = 0;
        this.shortAxis = 0;
        this.offsetX = 0;
        this.offsetY = 0;
    }
    serialization (dv){
        this.serializationHeader(dv);
        this.width = dv._width;
        this.angle = -dv._angle;
        this.startAngle = dv._startAngle;
        this.endAngle = dv._endAngle;
        this.longAxis = dv._longAxis;
        this.shortAxis = dv._shortAxis;
        this.offsetX = dv._offsetX;
        this.offsetY = dv._offsetY;
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, this.width, color);
    }
    draw(context, transform){
        context.save();
        context.beginPath();
        var center = transform.toScreenPoint({x:this.offsetX, y:this.offsetY}),
            semiMajorAxis = transform.toScreenWidth(this.longAxis),
            semiMinorAxis = transform.toScreenWidth(this.shortAxis),
            allAngle = 360,
            numPoints,
            points,
            point,
            i = 0;

        //最大分成120块
        numPoints = Math.round(4 * semiMajorAxis);
        if(numPoints % 2 === 0){
            numPoints += 1;
        }
        numPoints = numPoints > 120 ? 120 : numPoints;

        points = new GeomUtil().shapeMakeEllipseArc(center.x, center.y, semiMajorAxis, semiMinorAxis,(allAngle - this.angle) + transform.angle * 180 / Math.PI, allAngle - this.endAngle,allAngle -  this.startAngle, numPoints);

        while(i < points.length){
            point = points[i];
            if(i === 0){
                context.moveTo(point.x, point.y);
            }else{
                context.lineTo(point.x, point.y);
            }
            i++;
        }

        if(!this.lineStyle.useExtend){
            context.strokeStyle = this.lineStyle.colorHex;
            context.lineWidth = this.lineStyle.width;
            context.lineCap = this.lineStyle.getCap(0);
        }
        context.stroke();
        context.restore();
    }
}

export default ArcPointCell