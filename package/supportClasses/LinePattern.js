/*global define*/
define([
    '../../Core/defined',
    '../../Core/defineProperties'
],function(
    defined,
    defineProperties){
    "use strict";

    /**
     * 线样式
     * @alias LinePattern
     * @constructor
     */
    var LinePattern = function(mark, gap){
        this._mark = defined(mark) ? mark : 0;
        this._gap = defined(gap) ? gap : 0;
    };

    defineProperties(LinePattern.prototype, {
        /**
         *
         * @memberof TextParam.prototype
         * @type {Number}
         */
        mark : {
            get : function(){
                return this._mark;
            },
            set : function(value){
                this._mark = value;
            }
        },

        /**
         *
         * @memberof TextParam.prototype
         * @type {Number}
         */
        gap : {
            get : function(){
                return this._gap;
            },
            set : function(value){
                this._gap = value;
            }
        }
    });

    return LinePattern;
});