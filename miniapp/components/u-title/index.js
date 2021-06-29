"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UTitle = class UTitle extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            icon: {
                type: String,
                value: ''
            },
            scrollList: {
                type: Array,
                value: []
            },
            scroll: {
                type: Boolean,
                value: false
            },
            title: {
                type: String,
                value: ''
            },
            more: {
                type: Boolean,
                value: true
            },
            border: {
                type: Boolean,
                value: true
            },
            padding: {
                type: Boolean,
                value: false
            },
            theme: {
                type: Boolean,
                value: false
            },
            load: {
                type: Boolean,
                value: true,
                observer: this.next
            },
            sticky: {
                type: Number,
                value: 0
            }
        };
        this.data = {
            ios: false,
            active: 0,
            scrollLeft: 0,
            isSticky: false,
            load: this.properties.load
        };
    }
    next(val) {
        this.setData({
            load: val
        });
    }
    ready() {
        this.init();
    }
    change(bool) {
        if (bool != this.data.isSticky) {
            this.setData({
                isSticky: bool
            });
        }
    }
    onTap(e) {
        if (this.data.load) {
            this.$util.common.throttle(this, () => {
                this.setData({
                    scrollLeft: e.currentTarget.offsetLeft - this.$util.common.rpxToPx(375),
                    active: e.currentTarget.dataset.index
                }, () => {
                    this.triggerEvent('itemclick', { value: this.data.active });
                });
            });
        }
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.setData({
                ios: this.app.globalData.phoneInfo.isIos
            });
        });
    }
};
UTitle = tslib_1.__decorate([
    index_1.WxComponent()
], UTitle);
exports.default = UTitle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE1BQU0sR0FBM0IsTUFBcUIsTUFBTyxTQUFRLG9CQUFhO0lBQWpEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDcEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGLENBQUM7UUFnQkYsU0FBSSxHQUFRO1lBQ1YsR0FBRyxFQUFFLEtBQUs7WUFDVixNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxDQUFDO1lBQ2IsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1NBQzNCLENBQUM7SUFzQkosQ0FBQztJQTNDQyxJQUFJLENBQUMsR0FBWTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsR0FBRztTQUNWLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFhO1FBQ2xCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFRRCxLQUFLLENBQUMsQ0FBTTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQ1Y7b0JBQ0UsVUFBVSxFQUNSLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQzdELE1BQU0sRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2lCQUN0QyxFQUNELEdBQUcsRUFBRTtvQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDSyxJQUFJOztZQUNSLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLO2FBQ3pDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGLENBQUE7QUF2Rm9CLE1BQU07SUFEMUIsbUJBQVcsRUFBRTtHQUNPLE1BQU0sQ0F1RjFCO2tCQXZGb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVVGl0bGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJvcGVydGllczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uID0ge1xuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgc2Nyb2xsTGlzdDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWx1ZTogW11cbiAgICB9LFxuICAgIHNjcm9sbDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgbW9yZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgdGhlbWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIGxvYWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiB0aGlzLm5leHRcbiAgICB9LFxuICAgIHN0aWNreToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDBcbiAgICB9XG4gIH07XG4gIG5leHQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvYWQ6IHZhbFxuICAgIH0pO1xuICB9XG4gIHJlYWR5KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGNoYW5nZShib29sOiBib29sZWFuKSB7XG4gICAgaWYgKGJvb2wgIT0gdGhpcy5kYXRhLmlzU3RpY2t5KSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1N0aWNreTogYm9vbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGRhdGE6IGFueSA9IHtcbiAgICBpb3M6IGZhbHNlLFxuICAgIGFjdGl2ZTogMCxcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIGlzU3RpY2t5OiBmYWxzZSxcbiAgICBsb2FkOiB0aGlzLnByb3BlcnRpZXMubG9hZFxuICB9O1xuICBvblRhcChlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxvYWQpIHtcbiAgICAgIHRoaXMuJHV0aWwuY29tbW9uLnRocm90dGxlKHRoaXMsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6XG4gICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0IC0gdGhpcy4kdXRpbC5jb21tb24ucnB4VG9QeCgzNzUpLFxuICAgICAgICAgICAgYWN0aXZlOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2l0ZW1jbGljaycsIHsgdmFsdWU6IHRoaXMuZGF0YS5hY3RpdmUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGluaXQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlvczogdGhpcy5hcHAuZ2xvYmFsRGF0YS5waG9uZUluZm8uaXNJb3NcbiAgICB9KTtcbiAgfVxufVxuIl19