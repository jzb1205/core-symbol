import SurfacePointCell from './SurfacePointCell'

class SimplePointCell extends SurfacePointCell {
    constructor(){
        super()
        this._offsetX = 0;
        this._offsetY = 0;
        this._size = 0;
    }
    serialization (dv){
        this.serializationHeader(dv);
        this.startX = dv._startX;
        this.startY = dv._startY;
        this.endX = dv._endX;
        this.endY = dv._endY;
        this.width = dv._width;
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, 0, color)
    }
    prepareBrush(color){
        this.prepareBrushHeader(this.color);
    }
    draw(context, transform){
        var radius = transform.toScreenWidth(this.size),
            center = transform.toScreenPoint({x:this.offsetX, y:this.offsetY});

        context.save();
        context.beginPath();
        context.arc(center.x, center.y, radius, 0, Math.PI * 2);
        context.fillStyle = this.lineStyle.colorHex;
        context.fill();
        context.restore();
    }
}

export default SimplePointCell