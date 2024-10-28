"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = exports.BadRequest = exports.ErrorHandler = void 0;
var enumHttpStatusCode_1 = __importDefault(require("../enum/enumHttpStatusCode"));
var ErrorHandler = /** @class */ (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(message, statusCode) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return ErrorHandler;
}(Error));
exports.ErrorHandler = ErrorHandler;
var BadRequest = /** @class */ (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(message) {
        return _super.call(this, message, enumHttpStatusCode_1.default.BAD_REQUEST) || this;
    }
    return BadRequest;
}(ErrorHandler));
exports.BadRequest = BadRequest;
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(message) {
        return _super.call(this, message, enumHttpStatusCode_1.default.NOT_FOUND) || this;
    }
    return NotFound;
}(ErrorHandler));
exports.NotFound = NotFound;
//# sourceMappingURL=ErrorHandlers.js.map