/*global define*/
define([
    '../../Core/freezeObject'
], function(freezeObject){
    "use strict";

    /**
     * 线图元类型。
     * @namespace
     * @alias LineCellType
     *
     */
    var LineCellType = {

        /**
         * 简单线
         * @type {Number}
         * @constant
         */
        SimpleLine : 0,

        /**
         * 哈希线
         * @type {Number}
         * @constant
         */
        HashLine : 1,

        /**
         * 制图线
         * @type {Number}
         * @constant
         */
        CartographicLine : 2,

        /**
         * 点线
         * @type {Number}
         * @constant
         */
        PointLine : 3,

        /**
         * 定位点线
         * @type {Number}
         * @constant
         */
        LocalPointLine : 4
    };

    return freezeObject(LineCellType);
});