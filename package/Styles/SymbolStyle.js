/*global define*/
define([
    '../Core/defined',
    '../Core/defineProperties'
    ],function(
    defined,
    defineProperties){
    "use strict";

    /**
     * 符号样式（单位：毫米）
     * @param {Number} color 颜色（十进制），默认为-1，即采用符号源的颜色。
     * @param {Number} angle 角度，默认为0。只针对点符号生效。
     * @param {Number} scale 比例
     * @param {Number} outlineColor 边框颜色（十进制），默认为-1，即采用符号源的颜色。
     * @param {Number} opacity 符号透明度
     * @alias SymbolStyle
     * @constructor
     */
    var SymbolStyle = function(color, angle, scale, outlineColor,opacity){
        this._color = defined(color) ? color : -1;
        this._angle = defined(angle) ? angle : 0;
        this._scale = defined(scale) ? scale : 1;
        this._outlineColor = defined(outlineColor) ? outlineColor : -1;
        this._opacity = defined(opacity) ? opacity : 1;
    };

    defineProperties(SymbolStyle.prototype, {
        /**
         * 颜色（十进制），默认为-1，即采用符号源的颜色。
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        color : {
            get : function(){
                return this._color;
            },
            set : function(value){
                this._color = value;
            }
        },

        /**
         * 角度，默认为0。只针对点符号生效。
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        angle : {
            get : function(){
                return this._angle;
            },
            set : function(value){
                this._angle = value;
            }
        },

        /**
         * 比例
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        scale : {
            get : function(){
                return this._scale;
            },
            set : function(value){
                this._scale = value;
            }
        },

        /**
         * 边框颜色（十进制），默认为-1，即采用符号源的颜色。
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        outlineColor : {
            get : function(){
                return this._outlineColor;
            },
            set : function(value){
                this._outlineColor = value;
            }
        },

        /**
         * 透明度，默认为1
         * @memberof  SymbolStyle.prototype
         * @type {Number}
         */
        opacity:{
            get:function () {
                return this._opacity;
            },
            set:function (value) {
                this._opacity = value;
            }
        }
    });

    return SymbolStyle;
});