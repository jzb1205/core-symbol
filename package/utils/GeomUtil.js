class GeomUtil {
    constructor(){}
    /**
     * 计算椭圆弧线段
     * @param {Number} centerX 中心点X
     * @param {Number} centerY 中心点Y
     * @param {Number} semiMajorAxis 长半轴
     * @param {Number} semiMinorAxis 短半轴
     * @param {Number} rotation 旋转角度
     * @param {Number} angleS 起始角
     * @param {Number} angleE 张开角度
     * @param {Number} numPoints 需要的点数量
     * @returns {Array} 线段点集
     */
    shapeMakeEllipseArc(centerX, centerY, semiMajorAxis, semiMinorAxis,rotation, angleS, angleE, numPoints){
        var points = [];

        //弧度单位的旋转角
        // rotation = rotation * Math.PI / 180;
        //弧度单位的间隔
        var rat;
        if(angleE >= angleS){
            rat = (angleE - angleS) * Math.PI / 180 / numPoints;
        }else{
            rat = (angleE - angleS + 360) * Math.PI / 180 / numPoints;
        }

        var angle = angleS * Math.PI / 180,
            pi2 = Math.PI / 2,
            threePi2 = Math.PI * 3 / 2,
            x,
            y,
            i;
        for(i = 0; i < numPoints; i++){
            if(angle - pi2 === 0){
                x = 0;
                y = semiMinorAxis;
            }else if(angle - threePi2 === 0){
                x = 0;
                y = -semiMinorAxis;
            }else if(angle === 0){
                x = semiMajorAxis;
                y = 0;
            }else if(angle - Math.PI === 0){
                x = -semiMajorAxis;
                y = 0;
            }else{
                var dxdy = semiMajorAxis * semiMinorAxis,
                    dx2 = semiMajorAxis * semiMajorAxis,
                    dy2 = semiMinorAxis * semiMinorAxis,
                    t = Math.tan(angle);
                if(angle < pi2){
                    x = dxdy / Math.sqrt(t * t * dx2 + dy2);
                    y = Math.abs(t * x);
                }else if(angle > pi2 && angle < Math.PI){
                    x = -dxdy / Math.sqrt(t * t * dx2 + dy2);
                    y = Math.abs(t * x);
                }else if(angle > Math.PI && angle < threePi2){
                    x = -dxdy / Math.sqrt(t * t * dx2 + dy2);
                    y = -Math.abs(t * x);
                }else{
                    x = dxdy / Math.sqrt(t * t * dx2 + dy2);
                    y = -Math.abs(t * x);
                }
            }

            if(rotation !== 0){
                var dst = Math.sqrt(x * x + y * y);
                x = dst * Math.cos(rotation + angle) + centerX;
                y = dst * Math.sin(rotation + angle) + centerY;
            }else{
                x += centerX;
                y += centerY;
            }

            if(i > 0){
                points.push({x, y});
            }
            angle += rat;
        }

        //闭合
        if(points.length > 2 && angleE - angleS === 360){
            points.push(points[0]);
        }

        return points;
    }

    /**
     * 判断点集是否闭合。
     * @param points 线段点集
     * @returns {Boolean} 是否闭合
     */
    isClosed(points){
        if(points.length <= 8){
            return false;
        }

        var point1 = points[0],
            point2 = points[points.length - 1];
        return point1.x === point2.x && point1.y === point2.y;
    }
}
export default GeomUtil