import LineStyle from './../Styles/LineStyle'
import BrushStyle from './../Styles/BrushStyle'

class PointCell {
    constructor(){
        this.position = 0;
        this.cellType = undefined;
        this.color = 0;
        this.colorLocked = false;
        this.points = []
        this.lineStyle = new LineStyle();
        this.brushStyle = new BrushStyle();
    }
    updatePosition(value){
        this.position += value;
    }
    serializationHeader(dv){
        this.cellType = dv._cellType;
        this.color = dv._color;
        this.colorLocked = dv._colorLocked;
    }
    preparePenHeader(transform, width, color){
        if (!transform) {
            return
        }

        width = !isNaN(width) ? width : 1;
        var thinkness = transform.toScreenWidth(width);
        this.lineStyle.width = thinkness < 1 ? 1 : thinkness;
        this.lineStyle.color = color;
    }
    preparePen(){

    }
    prepareBrush(){

    }
}
export default PointCell