/*global define*/
define([
    '../Core/defined',
    '../Core/defineProperties'
],function(
    defined,
    defineProperties){
    "use strict";

    /**
     * 标注
     * @param {String} text 标注内容
     * @alias LabelStyle
     * @constructor
     */
    var LabelStyle = function(text){
        this._text = defined(text) ? text : undefined;
        this._fontFamily = "宋体";
        this._color = 0x00000;
        this._height = 14;
        this._position = 7;
        this._direction = 0;
        this._rowCharNums = 0;
        this._offsetX = 0;
        this._offsetY = 0;
        this._mouseEnabled = false;
        this._bold = false;
    };

    defineProperties(LabelStyle.prototype, {
        /**
         * 标注内容
         * @memberof SymbolStyle.prototype
         * @type {String}
         */
        text : {
            get : function(){
                return this._text;
            },
            set : function(value){
                this._text = value;
            }
        },

        /**
         * 字体
         * @memberof SymbolStyle.prototype
         * @type {String}
         */
        fontFamily : {
            get : function(){
                return this._fontFamily;
            },
            set : function(value){
                this._fontFamily = value;
            }
        },

        /**
         * 颜色。默认为0x00000
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
         * 高度（大小），默认为14px
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        height : {
            get : function(){
                return this._height;
            },
            set : function(value){
                this._height = value;
            }
        },

        /**
         * 位置。按九宫格排列：<br />
         * 0|6|3 <br />
         * _____ <br />
         * 2|8|5 <br />
         * _____ <br />
         * 1|7|4
         *
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        position : {
            get : function(){
                return this._position;
            },
            set : function(value){
                this._position = value;
            }
        },

        /**
         * 方向。0表示横向，1表示竖向。
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        direction : {
            get : function(){
                return this._direction;
            },
            set : function(value){
                this._direction = value;
            }
        },

        /**
         * 每行显示字数
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        rowCharNums : {
            get : function(){
                return this._rowCharNums;
            },
            set : function(value){
                this._rowCharNums = value;
            }
        },

        /**
         * X偏移
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        offsetX : {
            get : function(){
                return this._offsetX;
            },
            set : function(value){
                this._offsetX = value;
            }
        },

        /**
         * Y偏移
         * @memberof SymbolStyle.prototype
         * @type {Number}
         */
        offsetY : {
            get : function(){
                return this._offsetY;
            },
            set : function(value){
                this._offsetY = value;
            }
        },

        /**
         * 响应鼠标
         * @memberof SymbolStyle.prototype
         * @type {Boolean}
         */
        mouseEnabled : {
            get : function(){
                return this._mouseEnabled;
            },
            set : function(value){
                this._mouseEnabled = value;
            }
        },

        /**
         * 粗体
         * @memberof SymbolStyle.prototype
         * @type {Boolean}
         */
        bold : {
            get : function(){
                return this._bold;
            },
            set : function(value){
                this._bold = value;
            }
        }
    });

    return LabelStyle;
});