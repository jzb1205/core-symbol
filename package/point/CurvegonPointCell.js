import SurfacePointCell from './SurfacePointCell'

class CurvegonPointCell extends SurfacePointCell {
    constructor(){
        super()
        this._startX = 0;
        this._startY = 0;
        this._endX = 0;
        this._endY = 0;
        this._width = 0;
    }
    serialization (dv){
        this.serializationHeader2(dv);
        this.width = dv._width;
        this.points = []
        var i = 0, x, y, geoPoint, point;
        while(i < dv._pointCount){
            point = dv._points[i];
            x = point._x;
            y = point._y;
            geoPoint = {x, y};
            this.points.push(geoPoint);
            i++;
        }
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, this.width, color);
    }
    prepareBrush(color){
        this.prepareBrushHeader(color);
    };
    draw(context, transform) {
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
    drawExe(context, transform) {
        var i = 0,
            pt0 = transform.toScreenPoint(this.points[0]),
            pt1,
            pt2;
        context.moveTo(pt0.x, pt0.y);
        while(i < this.pointCount -1){
            i++;
            pt1 = transform.toScreenPoint(this.points[i]);
            i++
            pt2 = transform.toScreenPoint(this.points[i]);
            context.quadraticCurveTo(pt1.x, pt1.y, pt2.x, pt2.y);
        }
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }
}

export default CurvegonPointCell