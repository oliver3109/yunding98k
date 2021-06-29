"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let ULoading = class ULoading extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            title: {
                type: String,
                value: '正在加载'
            },
            font: {
                type: Boolean,
                value: true
            },
            theme: {
                type: Boolean,
                value: false,
                observer: this.isTheme
            }
        };
        this.data = {
            theme: this.properties.theme,
            title: this.properties.title
        };
    }
    isTheme(val) {
        this.setData({
            theme: val
        });
    }
};
ULoading = tslib_1.__decorate([
    index_1.WxComponent()
], ULoading);
exports.default = ULoading;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLFFBQVEsR0FBN0IsTUFBcUIsUUFBUyxTQUFRLG9CQUFhO0lBQW5EOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdkI7U0FDRixDQUFDO1FBTUYsU0FBSSxHQUFRO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBVEMsT0FBTyxDQUFDLEdBQVk7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUtGLENBQUE7QUF6Qm9CLFFBQVE7SUFENUIsbUJBQVcsRUFBRTtHQUNPLFFBQVEsQ0F5QjVCO2tCQXpCb0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVTG9hZGluZyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAn5q2j5Zyo5Yqg6L29J1xuICAgIH0sXG4gICAgZm9udDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICB0aGVtZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiB0aGlzLmlzVGhlbWVcbiAgICB9XG4gIH07XG4gIGlzVGhlbWUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHRoZW1lOiB2YWxcbiAgICB9KTtcbiAgfVxuICBkYXRhOiBhbnkgPSB7XG4gICAgdGhlbWU6IHRoaXMucHJvcGVydGllcy50aGVtZSxcbiAgICB0aXRsZTogdGhpcy5wcm9wZXJ0aWVzLnRpdGxlXG4gIH07XG59XG4iXX0=