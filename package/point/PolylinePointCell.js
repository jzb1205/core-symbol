import PointCell from './PointCell'

class PolylinePointCell extends PointCell {
    constructor(){
        super()
        this._width = 0;
        this._pointCount = 0;
        this._points = [];
    }
    serialization (dv){
        this.serializationHeader(dv);
        this.width = dv._width;
        this.pointCount = dv._pointCount;

        var i = 0, geoPoint;
        while(i < this.pointCount){
            geoPoint = {x:dv._points[i]._x, y:dv._points[i]._y};
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
        var i = 0, point;
        while(i < this.pointCount){
            point = transform.toScreenPoint(this.points[i]);
            if(i === 0){
                context.moveTo(point.x, point.y);
            }else {
                context.lineTo(point.x, point.y);
            }
            i++;
        }

        if(!this.lineStyle.useExtend){
            context.strokeStyle = this.lineStyle.colorHex;
            context.lineWidth = this.lineStyle.width;
        }
        context.stroke();
        context.restore();
    }
}

export default PolylinePointCell