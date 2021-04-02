import SurfacePointCell from './SurfacePointCell'

class PiePointCell extends SurfacePointCell {
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

        this.angle = dv._angle;

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
    prepareBrush(color){
        this.prepareBrushHeader(color);
    };
    draw(context, transform){
        var that = this;
        context.save();
        context.beginPath();
        if(!this.lineStyle.useExtend){
            context.strokeStyle = this.lineStyle.colorHex;
            context.lineWidth = this.lineStyle.width;
            this.cellFillStyle(context, function(pat){
                that.drawExe(context, transform);
            });
        }
    }
    drawExe(context, transform) {
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

        points = new GeomUtil.shapeMakeEllipseArc(center.x, center.y, semiMajorAxis, semiMinorAxis,
            (allAngle - this.angle) + transform.angle * 180 / Math.PI, allAngle - this.endAngle,
            allAngle - this.startAngle, numPoints);

        //添加中心连接点
        points.unshift(center);

        while(i < points.length){
            point = points[i];
            if(i === 0){
                context.moveTo(point.x, point.y);
            }else{
                context.lineTo(point.x, point.y);
            }
            i++;
        }
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    };
}

export default PiePointCell