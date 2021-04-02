/*global define*/
define([
    '../../Core/freezeObject'
], function(freezeObject){
    "use strict";

    /**
     * 定位点线图元类型。
     * @namespace
     * @alias LocatePointLineCellType
     *
     */
    var LocatePointLineCellType = {

        //--------------------------------------------------------------------------
        //
        // 端点类型
        //
        //--------------------------------------------------------------------------

        /**
         * 不绘端点
         * @type {Number}
         * @constant
         */
        LOCATE_NONE : 0,

        /**
         * 仅绘起点
         * @type {Number}
         * @constant
         */
        LOCATE_BEGIN : 1,

        /**
         * 仅绘终点
         * @type {Number}
         * @constant
         */
        LOCATE_END : 2,

        /**
         * 绘两端点
         * @type {Number}
         * @constant
         */
        LOCAT_BOTH : 3,

        //--------------------------------------------------------------------------
        //
        // 点符号方位
        //
        //--------------------------------------------------------------------------

        /**
         * 正北方向
         * @type {Number}
         * @constant
         */
        DIRECTION_NORTH : 0,

        /**
         * 左侧方向
         * @type {Number}
         * @constant
         */
        DIRECTION_LEFT : 1,

        /**
         * 右侧方向
         * @type {Number}
         * @constant
         */
        DIRECTION_RIGHT : 2,

        /**
         * 双侧方向
         * @type {Number}
         * @constant
         */
        DIRECTION_BIDIRECTIONAL : 3,

        /**
         * 角平分线
         * @type {Number}
         * @constant
         */
        DIRECTION_BISECTOR : 4
    };

    return freezeObject(LocatePointLineCellType);
});