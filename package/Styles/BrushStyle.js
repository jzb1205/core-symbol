
import BrushStyleType from "./BrushStyleType";

class BrushStyle {
    constructor(color, style, hatched){
        this.color = color ? color : -1;
        this.style = style ? style : BrushStyleType.STYLE_SOLID;
        this.hatched = hatched ? hatched : BrushStyleType.HATCHED_HORIZONTAL;
    }
}

export default BrushStyle