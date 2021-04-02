import PointCell from './PointCell'

class LinePointCell extends PointCell {
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
        this.startX = dv._startX;
        this.startY = dv._startY;
        this.endX = dv._endX;
        this.endY = dv._endY;
        this.width = dv._width;
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, this.width, color);
    }
    draw(context, transform){
        var startPoint, endPoint;
        startPoint = transform.toScreenPoint({x:this.startX, y:this.startY});
        endPoint = transform.toScreenPoint({x:this.endX, y:this.endY});

        context.save();
        context.beginPath();
        context.moveTo(startPoint.x, startPoint.y);
        context.lineTo(endPoint.x, endPoint.y);

        if(!this.lineStyle.useExtend){
            context.strokeStyle = this.lineStyle.colorHex;
            context.lineWidth = this.lineStyle.width;
            context.lineCap = this.lineStyle.getCap(256);
        }
        context.stroke();
        context.restore();
    }
}

export default LinePointCell