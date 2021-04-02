import PointCell from './PointCell'
import FillStyleType from './../Styles/FillStyleType'
import BrushStyleType from './../Styles/BrushStyleType'

class SurfacePointCell extends PointCell {
    constructor(){
        super()
        this.fillStyle = FillStyleType.FILL_EMPTY;
        this.fillColor = undefined;
    }
    serializationHeader2(dv){
        this.serializationCell(dv);
    }
    serialization (dv){
        this.serializationCell(dv);
    }
    serialization2(dv){
        this.serializationHeader(dv);
    };
    serializationCell(dv){
        this.serializationHeader(dv);
        this.fillStyle = dv._fillStyle;
        this.fillColor = dv._fillColor;
    }
    prepareBrushHeader(color){
        if(this.fillStyle !== FillStyleType.FILL_EMPTY && color){
            //如果传入画笔颜色为负值,或者颜色被锁定，使用图元颜色
            //16777215为白色
            this.brushStyle.color = this.lineStyle.color;

            if(this.fillStyle = FillStyleType.FILL_SOLID){
                this.brushStyle.style = BrushStyleType.STYLE_SOLID;
            }else{
                this.brushStyle.style = BrushStyleType.STYLE_HATCHED;
                this.brushStyle.hatched = this.fillStyle;
            }
        }
    }
    cellFillStyle(context, callback){
        if(this.fillStyle === FillStyleType.FILL_EMPTY){
            context.fillStyle = "rgba(0,0,0,0)";
            callback();
        }else if(this.fillStyle === FillStyleType.FILL_SOLID){
            if(this.fillColor === -1){
                context.fillStyle = "rgba(0,0,0,0)";
            }else{
                context.fillStyle = this.brushStyle.colorHex;
            }
            callback();
        }else{
            var img = new Image(), pat;
            img.onload = function(){
                pat = context.createPattern(img, "repeat");
                context.fillStyle = pat;
                callback(pat);
            };
            switch (this.fillStyle){
                case FillStyleType.FILL_HS_VERTICAL:
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEklEQVR42mNgIA78ZxhVSF+FADnECfcIwHeYAAAAAElFTkSuQmCC";
                    break;
                case FillStyleType.FILL_HS_HORIZONTAL:
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEElEQVR42mNgGAV0B/+JwQC+3An3dc4tsQAAAABJRU5ErkJggg==";
                    break;
                case FillStyleType.FILL_HS_CROSS:
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNgIA78ZxhVSDWF/4nBAPYHEu7oyP2iAAAAAElFTkSuQmCC";
                    break;
                case FillStyleType.FILL_HS_BDIAGONAL:
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEUlEQVR42mNgIA78H1VEZ0UA7RAJ9w0UEO0AAAAASUVORK5CYII=";
                    break;
                case FillStyleType.FILL_HS_FDIAGONAL:
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR42mNgYGD4z0ACGFVMJ8UA7RAJ97b9jwIAAAAASUVORK5CYII=";
                    break;
            }
        }
    }
}

export default SurfacePointCell