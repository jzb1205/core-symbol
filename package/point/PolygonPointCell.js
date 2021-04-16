import SurfacePointCell from './SurfacePointCell'

class PolygonPointCell extends SurfacePointCell {
    constructor(){
        super()
        this._width = 0;
        this._pointCount = 0;
        this._points = [];
    }
    serialization (dv){
        this.serializationHeader2(dv);
        this.width = dv._width;
        this.pointCount = dv._pointCount;

        var i = 0, geoPoint;
        this.points = []
        while(i < this.pointCount){
            geoPoint = {x:dv._points[i]._x, y:dv._points[i]._y}
            this.points.push(geoPoint);
            i++;
        }
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, this.width, color);
    }
    prepareBrush(color){
        this.prepareBrushHeader(color);
    }
    draw(context, transform){
        var that = this;
        context.save();
        context.beginPath();
        if(!this.lineStyle.useExtend){
            context.strokeStyle = this.lineStyle.colorHex;
            context.fillStyle = this.lineStyle.colorHex;
            context.lineWidth = this.lineStyle.width;
            this.cellFillStyle(context, function(pat){
                that.drawExe(context, transform);
            });
        }
    }
    drawExe(context, transform){
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
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }
}

export default PolygonPointCell