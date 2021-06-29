"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UModel = class UModel extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            esc: {
                type: Boolean,
                value: false
            },
            font: {
                type: String,
                value: ''
            }
        };
        this.data = {};
    }
    close() {
        this.setData({
            show: false
        });
    }
    open() {
        this.setData({
            show: true
        });
    }
    esc() {
        this.triggerEvent('esc');
    }
    ok() {
        this.triggerEvent('ok');
    }
};
UModel = tslib_1.__decorate([
    index_1.WxComponent()
], UModel);
exports.default = UModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE1BQU0sR0FBM0IsTUFBcUIsTUFBTyxTQUFRLG9CQUFhO0lBQWpEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7YUFDVjtTQUNGLENBQUM7UUFDRixTQUFJLEdBQVEsRUFBRSxDQUFDO0lBaUJqQixDQUFDO0lBaEJDLEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxHQUFHO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsRUFBRTtRQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7QUE1Qm9CLE1BQU07SUFEMUIsbUJBQVcsRUFBRTtHQUNPLE1BQU0sQ0E0QjFCO2tCQTVCb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVTW9kZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJvcGVydGllczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uID0ge1xuICAgIGVzYzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgZm9udDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9O1xuICBkYXRhOiBhbnkgPSB7fTtcbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNob3c6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGVzYygpIHtcbiAgICB0aGlzLnRyaWdnZXJFdmVudCgnZXNjJyk7XG4gIH1cbiAgb2soKSB7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoJ29rJyk7XG4gIH1cbn1cbiJdfQ==