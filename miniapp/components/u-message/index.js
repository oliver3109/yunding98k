"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UMessage = class UMessage extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            v: {
                type: Object,
                value: {}
            }
        };
        this.data = {
            v: this.properties.v
        };
    }
};
UMessage = tslib_1.__decorate([
    index_1.WxComponent()
], UMessage);
exports.default = UMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLFFBQVEsR0FBN0IsTUFBcUIsUUFBUyxTQUFRLG9CQUFhO0lBQW5EOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsQ0FBQyxFQUFFO2dCQUNELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7U0FDRixDQUFDO1FBQ0YsU0FBSSxHQUFRO1lBQ1YsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQixDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUFWb0IsUUFBUTtJQUQ1QixtQkFBVyxFQUFFO0dBQ08sUUFBUSxDQVU1QjtrQkFWb0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVTWVzc2FnZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgdjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9XG4gICAgfVxuICB9O1xuICBkYXRhOiBhbnkgPSB7XG4gICAgdjogdGhpcy5wcm9wZXJ0aWVzLnZcbiAgfTtcbn1cbiJdfQ==