/*global define*/
export default class FontParam {
    constructor(){
        this._height = 0;
        this._width = 0;
        this._escapement = 0;
        this._orientation = 0;
        this._weight = 0;
        this._italic = false;
        this._underline = false;
        this._strikeOut = false;
        this._charSet = 0;
        this._outPrecision = 0;
        this._clipPrecision = 0;
        this._quality = 0;
        this._pitchAndFamily = 0;
        this._faceNameLength = 0;
        this._faceName = undefined;
    }
}