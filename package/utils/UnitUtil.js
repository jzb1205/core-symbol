    export default {
      /**
       * 打印分辨率（每英寸96点）
       */
      DPI: 96,

      /**
       * 1英寸等于25.4毫米
       */
      MMPERINCH: 25.4,

      /**
       * 角度转弧度转换因子
       */
      DEGTORAD: 0.0174532925199433,

      /**
       * 弧度转角度转换因子
       */
      RADTODEG: 57.29577951308232,

      /**
       * 毫米转换成像素
       * @param {Number} mm 毫米
       * @returns {Number} 像素值
       */
      mmToPixel: function (mm) {
        return (mm / this.MMPERINCH) * this.DPI;
      },

      /**
       * 像素转换成毫米
       * @param {Number} pixel 像素值
       * @returns {Number} 毫米值
       */
      pixelToMm: function (pixel) {
        return (pixel / this.DPI) * this.MMPERINCH;
      }
    }
