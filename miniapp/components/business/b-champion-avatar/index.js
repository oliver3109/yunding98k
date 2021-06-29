"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../../core/base/base");
const index_1 = require("../../../core/decorator/index");
let BChampionAvatar = class BChampionAvatar extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            uuid: String,
            url: String,
            name: String,
            itemUrls: {
                type: Array,
                value: []
            },
            clickable: {
                type: Boolean,
                value: true
            },
            width: { type: Number, value: 70 },
            height: { type: Number, value: 70 }
        };
    }
    onClick() {
        const { clickable, uuid } = this.properties;
        if (clickable && uuid) {
            this.$router.navigateTo(`/views/database/pages/champion-detail/index?id=${uuid}`);
        }
    }
};
BChampionAvatar = tslib_1.__decorate([
    index_1.WxComponent()
], BChampionAvatar);
exports.default = BChampionAvatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBd0Q7QUFDeEQseURBQTREO0FBRzVELElBQXFCLGVBQWUsR0FBcEMsTUFBcUIsZUFBZ0IsU0FBUSxvQkFBYTtJQUExRDs7UUFDRSxlQUFVLEdBQStDO1lBRXZELElBQUksRUFBRSxNQUFNO1lBRVosR0FBRyxFQUFFLE1BQU07WUFFWCxJQUFJLEVBQUUsTUFBTTtZQUVaLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBRUQsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFFRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFFbEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1NBQ3BDLENBQUM7SUFVSixDQUFDO0lBUkMsT0FBTztRQUNMLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ3JCLGtEQUFrRCxJQUFJLEVBQUUsQ0FDekQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFoQ29CLGVBQWU7SUFEbkMsbUJBQVcsRUFBRTtHQUNPLGVBQWUsQ0FnQ25DO2tCQWhDb0IsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcblxuQFd4Q29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJDaGFtcGlvbkF2YXRhciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgLy8g6Iux6ZuEVVVJRFxuICAgIHV1aWQ6IFN0cmluZyxcbiAgICAvLyDlpLTlg4/lnLDlnYBcbiAgICB1cmw6IFN0cmluZyxcbiAgICAvLyDlkI3np7BcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgLy8g6KOF5aSH5Zu+54mH5Zyw5Z2AXG4gICAgaXRlbVVybHM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IFtdXG4gICAgfSxcbiAgICAvLyDmmK/lkKblj6/ku6Xngrnlh7tcbiAgICBjbGlja2FibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8g5a695bqmIHJweFxuICAgIHdpZHRoOiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDcwIH0sXG4gICAgLy8g6auY5bqmIHJweFxuICAgIGhlaWdodDogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiA3MCB9XG4gIH07XG5cbiAgb25DbGljaygpIHtcbiAgICBjb25zdCB7IGNsaWNrYWJsZSwgdXVpZCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIGlmIChjbGlja2FibGUgJiYgdXVpZCkge1xuICAgICAgdGhpcy4kcm91dGVyLm5hdmlnYXRlVG8oXG4gICAgICAgIGAvdmlld3MvZGF0YWJhc2UvcGFnZXMvY2hhbXBpb24tZGV0YWlsL2luZGV4P2lkPSR7dXVpZH1gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19