/*global define*/
define([
    '../../Core/defineProperties',
    './LinePattern'
],function(
    defineProperties,
    LinePattern) {
    "use strict";

    /**
     * 线性符号样式模板
     * @alias SymbolTemplate
     * @constructor
     */
    var SymbolTemplate = function(){
        this._interval = 0;
        this._patternSize = 0;
        this._patternElements = [];
        this._position = 0;
    };

    defineProperties(SymbolTemplate.prototype, {
        /**
         * 模板因子
         * @memberof SymbolTemplate.prototype
         * @type {Number}
         */
        interval : {
            get : function(){
                return this._interval;
            },
            set : function(value){
                this._interval = value;
            }
        },

        /**
         * 模板样式数量
         * @memberof SymbolTemplate.prototype
         * @type {Number}
         */
        patternSize : {
            get : function(){
                return this._patternSize;
            },
            set : function(value){
                this._patternSize = value;
            }
        },

        /**
         * 模板样式集合
         * @memberof SymbolTemplate.prototype
         * @type {Array}
         */
        patternElements : {
            get : function(){
                return this._patternElements;
            }
        },

        /**
         * 字节读取位置
         * @memberof SymbolTemplate.prototype
         * @type {Number}
         */
        position : {
            get : function(){
                return this._position;
            },
            set : function(value){
                this._position = value;
            }
        }
    });

    SymbolTemplate.prototype.serialization = function(dv){
        this.interval = dv._interval;
        this.patternSize = dv._patternSize;
        var i = 0, mark = 0, gap = 0;
        var cellData;
        while(i < this.patternSize){
            cellData = dv._patternElements[i];
            mark = cellData._mark;
            gap = cellData._gap;
            this.patternElements.push(new LinePattern(mark, gap));
            i++;
        }
    };

    /**
     * 更新字节读取位置
     * @param {Number} value 位置偏移量
     * @private
     */
    SymbolTemplate.prototype.updatePosition = function(value){
        this.position += value;
    };

    return SymbolTemplate;
});
