## cnpm i  

## cnpm run build

###   const symbol = new PointSymbol(cellParams)
###   symbol.draw(ctx, {x,y},cellParams,symbolStyle)

####  ctx:canvas画布
####  {x,y}:绘制的坐标
####  cellParams:标准图形数据
####  symbolStyle:图形样式
##### symbolStyle = {
    symbolid:node.realSymbolId,
    symbolsize:size,
    symbolcolor:node.fillStyle,
    color:node.fillStyle,
    angle:node.rotate,
    scale:size*node.scaleNum/node.fontScale,
    opacity:1
  }


