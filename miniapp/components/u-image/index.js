"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UImage = class UImage extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            mode: {
                type: String,
                value: 'aspectFill'
            },
            radius: {
                type: Boolean,
                value: false
            },
            src: {
                type: String,
                value: ''
            },
            picArr: {
                type: Array,
                value: [],
                observer: this.picChange
            },
            click: {
                type: Boolean,
                value: true
            }
        };
    }
    picChange(val) {
        this.setData({
            picArr: val
        });
    }
    preview() {
        if (this.properties.click) {
            wx.previewImage({
                current: this.properties.src,
                urls: this.data.picArr.length != 0
                    ? this.data.picArr
                    : [this.properties.src]
            });
        }
    }
};
UImage = tslib_1.__decorate([
    index_1.WxComponent()
], UImage);
exports.default = UImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE1BQU0sR0FBM0IsTUFBcUIsTUFBTyxTQUFRLG9CQUFhO0lBQWpEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxZQUFZO2FBQ3BCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDekI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLENBQUM7SUFpQkosQ0FBQztJQWhCQyxTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLEdBQUc7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTztRQUNMLElBQUssSUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDbEMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxPQUFPLEVBQUcsSUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHO2dCQUNyQyxJQUFJLEVBQ0QsSUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7b0JBQ25DLENBQUMsQ0FBRSxJQUFZLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzNCLENBQUMsQ0FBQyxDQUFFLElBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ3JDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF4Q29CLE1BQU07SUFEMUIsbUJBQVcsRUFBRTtHQUNPLE1BQU0sQ0F3QzFCO2tCQXhDb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSW1hZ2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJvcGVydGllczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uID0ge1xuICAgIG1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnYXNwZWN0RmlsbCdcbiAgICB9LFxuICAgIHJhZGl1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHBpY0Fycjoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWx1ZTogW10sXG4gICAgICBvYnNlcnZlcjogdGhpcy5waWNDaGFuZ2VcbiAgICB9LFxuICAgIGNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH07XG4gIHBpY0NoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBwaWNBcnI6IHZhbFxuICAgIH0pO1xuICB9XG4gIHByZXZpZXcoKSB7XG4gICAgaWYgKCh0aGlzIGFzIGFueSkucHJvcGVydGllcy5jbGljaykge1xuICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogKHRoaXMgYXMgYW55KS5wcm9wZXJ0aWVzLnNyYyxcbiAgICAgICAgdXJsczpcbiAgICAgICAgICAodGhpcyBhcyBhbnkpLmRhdGEucGljQXJyLmxlbmd0aCAhPSAwXG4gICAgICAgICAgICA/ICh0aGlzIGFzIGFueSkuZGF0YS5waWNBcnJcbiAgICAgICAgICAgIDogWyh0aGlzIGFzIGFueSkucHJvcGVydGllcy5zcmNdXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==