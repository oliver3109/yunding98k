"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UBar = class UBar extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            border: {
                type: Boolean,
                value: false
            },
            num: {
                type: Number,
                value: 0,
                observer: this.add
            }
        };
        this.data = {
            num: 0,
            np: 0
        };
    }
    add(val) {
        this.setData({
            num: val
        }, () => this.npAdd());
    }
    npAdd() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.setData({
                np: this.data.num
            });
        });
    }
};
UBar = tslib_1.__decorate([
    index_1.WxComponent()
], UBar);
exports.default = UBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLElBQUksR0FBekIsTUFBcUIsSUFBSyxTQUFRLG9CQUFhO0lBQS9DOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHO2FBQ25CO1NBQ0YsQ0FBQztRQWNGLFNBQUksR0FBUTtZQUNWLEdBQUcsRUFBRSxDQUFDO1lBQ04sRUFBRSxFQUFFLENBQUM7U0FDTixDQUFDO0lBQ0osQ0FBQztJQWpCQyxHQUFHLENBQUMsR0FBUTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQ1Y7WUFDRSxHQUFHLEVBQUUsR0FBRztTQUNULEVBQ0QsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUNLLEtBQUs7O1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2FBQ2xCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUtGLENBQUE7QUE3Qm9CLElBQUk7SUFEeEIsbUJBQVcsRUFBRTtHQUNPLElBQUksQ0E2QnhCO2tCQTdCb0IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVQmFyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIHByb3BlcnRpZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5Qcm9wZXJ0eU9wdGlvbiA9IHtcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIG51bToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBvYnNlcnZlcjogdGhpcy5hZGRcbiAgICB9XG4gIH07XG4gIGFkZCh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YShcbiAgICAgIHtcbiAgICAgICAgbnVtOiB2YWxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB0aGlzLm5wQWRkKClcbiAgICApO1xuICB9XG4gIGFzeW5jIG5wQWRkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBucDogdGhpcy5kYXRhLm51bVxuICAgIH0pO1xuICB9XG4gIGRhdGE6IGFueSA9IHtcbiAgICBudW06IDAsXG4gICAgbnA6IDBcbiAgfTtcbn1cbiJdfQ==