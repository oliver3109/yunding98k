"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UToastPic = class UToastPic extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            sm: {
                type: Boolean,
                value: false
            },
            name: {
                type: String,
                value: ''
            }
        };
    }
};
UToastPic = tslib_1.__decorate([
    index_1.WxComponent()
], UToastPic);
exports.default = UToastPic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBVSxTQUFRLG9CQUFhO0lBQXBEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7YUFDVjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQVhvQixTQUFTO0lBRDdCLG1CQUFXLEVBQUU7R0FDTyxTQUFTLENBVzdCO2tCQVhvQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9iYXNlJztcbmltcG9ydCB7IFd4Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvaW5kZXgnO1xuQFd4Q29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVUb2FzdFBpYyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgc206IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==