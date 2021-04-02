import SurfacePointCell from './SurfacePointCell'

class TextPointCell extends SurfacePointCell {
    constructor(){
        super()
        this.textParam = {
            longAxis :0,
            centerX :0,
            centerY :0,
            shortAxis :0,
            width :0,
            textLength :0,
            text : undefined,
            angle :0,
            horizontal :0,
            vertical :0,
        }
        this.fontParam = {
            height :0,
            width :0,
            escapement :0,
            orientation :0,
            weight :0,
            italic : false,
            underline : false,
            strikeOut : false,
            charSet :0,
            outPrecision :0,
            clipPrecision :0,
            quality :0,
            pitchAndFamily :0,
            faceNameLength :0,
            faceName : undefined
        }
    }
    serialization (dv){
        this.serializationHeader2(dv);

        //--------------------------------------------------------------------------
        //
        // 文本内容
        //
        //--------------------------------------------------------------------------

        //文本长轴
        this.textParam.longAxis = dv._textParam._longAxis;
        //X中心
        this.textParam.centerX = dv._textParam._centerX;
        //Y中心
        this.textParam.centerY = dv._textParam._centerY;

        //文本短轴
        this.textParam.shortAxis = dv._textParam._shortAxis;

        //字体笔宽（大小）
        this.textParam.width = dv._textParam._width;

        //文本内容长度
        this.textParam.textLength = dv._textParam._textLength;

        //文本内容
        if(this.textParam.textLength > 0){
            this.textParam.text = dv._textParam._text;
        }

        //角度
        this.textParam.angle = dv._textParam._angle;

        //--------------------------------------------------------------------------
        //
        // 字体内容
        //
        //--------------------------------------------------------------------------

        //字体的字符单元或字符的高度
        this.fontParam.height = dv._fontParam._height;

        //字体中的字符的平均宽度
        this.fontParam.width = dv._fontParam._width;

        //设备的行距向量和 x 轴之间的角度
        this.fontParam.escapement = dv._fontParam._escapement

        //设备的每个字符的基线和 x 轴之间的角度
        this.fontParam.orientation = dv._fontParam._orientation;

        //字体的粗细
        this.fontParam.weight = dv._fontParam._weight;

        //斜体样式
        this.fontParam.italic = dv._fontParam._italic;

        //划线字体样式
        this.fontParam.underline = dv._fontParam._underline;

        //删除线字体样式
        this.fontParam.strikeOut = dv._fontParam._strikeOut;

        //字符集
        this.fontParam.charSet = dv._fontParam._charSet;

        //输出精度
        this.fontParam.outPrecision = dv._fontParam._outPrecision;

        //剪辑精度
        this.fontParam.clipPrecision = dv._fontParam._clipPrecision;

        //输出质量
        this.fontParam.quality = dv._fontParam._quality;

        //字体系列
        this.fontParam.pitchAndFamily = dv._fontParam._pitchAndFamily;

        //字体名称长度
        this.fontParam.faceNameLength = dv._fontParam._faceNameLength;

        //字体名称
        if(this.fontParam.faceNameLength > 0){
            this.fontParam.faceName = dv._fontParam._faceName;
        }
    }
    preparePen(transform, width, color){
        this.preparePenHeader(transform, this.width, color);
    }
    prepareBrush(color){
        this.prepareBrushHeader(color);
    }
    draw(context, transform){
        var fontWidth = transform.toScreenWidth(this.fontParam.width / 100),
            fontHeight = transform.toScreenWidth(this.fontParam.height / 100),
            textLongAxis = transform.toScreenWidth(this.textParam.longAxis),
            textShortAxis = transform.toScreenWidth(this.textParam.shortAxis);
        if(Math.abs(fontWidth) < 1 && Math.abs(fontHeight) < 1){
            return;
        }

        var center = transform.toScreenPoint({x:this.textParam.centerX, y:this.textParam.centerY}), //计算字体的中心点位置
            angle = transform.angle,
            m = 0; //文本实际宽
        if(Math.abs(angle) > 0){
            this.fontParam.escapement = angle * 10;
        }

        context.save();
        context.font = (this.fontParam.weight >= 700 ? "bold " : "normal ") + (this.fontParam.italic ? "italic " : "") + Math.abs(fontHeight) + "px " + this.fontParam.faceName;
        context.fillStyle = this.lineStyle.colorHex;
        m = context.measureText(this.textParam.text).width;
        if(textShortAxis <= 0){
            textShortAxis = m;
        }
        if(this.textParam.angle !== 0 || transform.angle !== 0){
            context.translate(center.x, center.y);
            context.rotate(angle);
            context.fillText(this.textParam.text, -m * 0.5, textShortAxis * 0.5);
        } else {
            context.fillText(this.textParam.text, center.x - m * 0.5, center.y + textShortAxis * 0.5);
        }
        context.restore();
    }
}

export default TextPointCell