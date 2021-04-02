/*global define*/
define([
    '../../Core/freezeObject'
], function(freezeObject){
    "use strict";

    /**
     * 面图元类型
     * @namespace
     * @alias FillCellType
     *
     */
    var FillCellType = {

        /**
         * 简单面
         * @type {Number}
         * @constant
         */
        SimpleFill : 0
    };

    return freezeObject(FillCellType);
});