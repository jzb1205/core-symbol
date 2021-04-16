/*global define*/
import LineStyleType from './LineStyleType'
import BrushStyleType from './BrushStyleType'

class LineStyle {
    constructor(color, width, normalStyle, useExtend, extendPenStyle,brushStyle, hatched, dashCount, dashStyle, lineCap, lineJoin){
        this.color = color ? color : -1;
        this.width = width ? width : 1;
        this.normalStyle = normalStyle ? normalStyle : LineStyleType.SIMPLE_STYLE_SOLID;
        this.useExtend = useExtend ? useExtend : false;
        this.extendPenStyle = extendPenStyle ? extendPenStyle : LineStyleType.EXT_PEN_COSMETIC;
        this.brushStyle = brushStyle ? brushStyle : BrushStyleType.STYLE_SOLID;
        this.hatched = hatched ? hatched : BrushStyleType.HATCHED_HORIZONTAL;
        this.dashCount = dashCount ? dashCount : 0;
        this.dashStyle = dashStyle ? dashStyle : 0;
        this.lineCap = lineCap ? lineCap :"butt";
        this.lineJoin = lineJoin ? lineJoin :"round";
        this.colorHex = ''
        this.pattern = undefined;
    }
    getCap(value){
        switch (value){
            case 0 :
                this.lineCap = "round";
                break;
            case 256 :
                this.lineCap = "square";
                break;
            case 512 :
                this.lineCap = "butt";
                break;
            default :
                this.lineCap = "butt";
        }
        return this.lineCap;
    }
    getJoin(value){
        switch (value){
            case 0 :
                this.lineJoin = "round"; //圆接
                break;
            case 4096 :
                this.lineJoin = "bevel"; //斜接
                break;
            case 8192 :
                this.lineJoin = "miter"; //平接
                break;
            default :
                this.lineJoin = "round"; //圆接
        }
        return this.lineJoin;
    }
}
export default LineStyle