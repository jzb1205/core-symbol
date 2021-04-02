import PointCell from './PointCell'

class CurvelinePointCell extends PointCell {
    constructor(){
        super()
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.width = 0;
    }
    serialization (dv){
        this.serializationHeader(dv);
        this.width = dv._width;
        this.pointCount = dv._pointCount;

        var i = 0;
        while(i < this.pointCount){
            let geoPoint = {
                x:dv._points[i]._x,
                y:dv._points[i]._y
            }
            this.points.push(geoPoint);
            i++;
        }
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, this.width, color);
    }
    draw(context, transform){
        context.save();
        context.beginPath();
        var i =0,
            pt0 = transform.toScreenPoint(this.points[0]),
            pt1,
            pt2,
            pt3;
        context.moveTo(pt0.x, pt0.y);
        while(i < this.pointCount - 1){
            i++;
            pt1 = transform.toScreenPoint(this.points[i]);
            i++;
            pt2 = transform.toScreenPoint(this.points[i]);
            i++;
            pt3 = transform.toScreenPoint(this.points[i]);
            context.bezierCurveTo(pt1.x, pt1.y, pt2.x, pt2.y, pt3.x, pt3.y);
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

export default CurvelinePointCell