"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../../core/base/base");
const index_1 = require("../../../core/decorator/index");
let BChampionAvatar = class BChampionAvatar extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            list: { type: Array, value: [] }
        };
    }
    onClickAvatar(event) {
        const { id } = event.currentTarget.dataset;
        this.$router.navigateTo(`/views/database/pages/champion-detail/index?id=${id}`);
    }
};
BChampionAvatar = tslib_1.__decorate([
    index_1.WxComponent()
], BChampionAvatar);
exports.default = BChampionAvatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBd0Q7QUFDeEQseURBQTREO0FBRzVELElBQXFCLGVBQWUsR0FBcEMsTUFBcUIsZUFBZ0IsU0FBUSxvQkFBYTtJQUExRDs7UUFDRSxlQUFVLEdBQStDO1lBQ3ZELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtTQUNqQyxDQUFDO0lBUUosQ0FBQztJQU5DLGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsa0RBQWtELEVBQUUsRUFBRSxDQUN2RCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFYb0IsZUFBZTtJQURuQyxtQkFBVyxFQUFFO0dBQ08sZUFBZSxDQVduQztrQkFYb0IsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcblxuQFd4Q29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJDaGFtcGlvbkF2YXRhciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgbGlzdDogeyB0eXBlOiBBcnJheSwgdmFsdWU6IFtdIH1cbiAgfTtcblxuICBvbkNsaWNrQXZhdGFyKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy4kcm91dGVyLm5hdmlnYXRlVG8oXG4gICAgICBgL3ZpZXdzL2RhdGFiYXNlL3BhZ2VzL2NoYW1waW9uLWRldGFpbC9pbmRleD9pZD0ke2lkfWBcbiAgICApO1xuICB9XG59XG4iXX0=