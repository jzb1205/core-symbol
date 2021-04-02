class ColorUtil {
  constructor(){}
  /**
   * 十进制转RGB
   * @param {Number} value 十进制颜色
   * @returns {r: number, g: number, b: number} RGB值
   */
  tenToRGB(value) {
    var r = value / Math.pow(256, 2);
    var g = (value % Math.pow(256, 2)) / 256;
    var b = value % 256;
    return {
      r: r,
      g: g,
      b: b
    };
  }

  /**
   * 十进制转RGB。提示：本方法只是为了适应C/S错误的数据而设。
   * @param {Number} value 十进制颜色
   * @returns {r: number, g: number, b: number} RGB值
   */
  tenToRGB2(value) {
    var b = value / Math.pow(256, 2);
    var g = (value % Math.pow(256, 2)) / 256;
    var r = value % 256;
    return {
      r: r,
      g: g,
      b: b
    };
  }

  /**
   * RGB转十进制
   * @param {Number} r 红色
   * @param {Number} g 绿色
   * @param {Number} b 蓝色
   * @returns {Number} 十进制值
   */
  rgbToTen(r, g, b) {
    return r * 256 * 256 + g * 256 + b;
  }

  /**
   * RGB颜色值转化为16进制
   * @param {Number} r 红色
   * @param {Number} g 绿色
   * @param {Number} b 蓝色
   * @returns {Number} 十六进制
   */
  rgbToHex(r, g, b) {
    return r << 16 | g << 8 | b;
  }

  /**
   * 转化为16进制字符串
   * @param {Number} value 十六进制值
   * @returns {String} 十六进制字符串
   */
  toHexString(value) {
    var result = value.toString(16);
    if (result.length < 6) {
      result = "00" + result;
    }
    return "#" + result;
  }

  /**
   * 16进制转RGB
   * @param {Number} value 十六进制值
   * @returns {r: number, g: number, b: number} RGB值
   */
  hexToRGB(value) {
    var r = value >> 16;
    var g = (value >> 8) & 0xFF;
    var b = value & 0xFF;
    return {
      "r": r,
      "g": g,
      "b": b
    };
  }

  /**
   * 十进制转十六进制
   * @param {Number} value 十进制值
   * @returns {Number} 十六进制
   */
  tenToHex(value) {
    var rgb = this.tenToRGB(value);
    return this.rgbToHex(rgb.r, rgb.g, rgb.b);
  }

  /**
   * 十进制转十六进制。提示：本方法只是为了适应C/S错误的数据而设。
   * @param {Number} value 十进制值
   * @returns {Number} 十六进制
   */
  tenToHex2(value) {
    var rgb = this.tenToRGB2(value);
    return this.rgbToHex(rgb.r, rgb.g, rgb.b);
  }
}
export default ColorUtil
