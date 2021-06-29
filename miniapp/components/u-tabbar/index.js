"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UplusTabbar = class UplusTabbar extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            tabbarData: {
                type: Array,
                observer: 'onTabbarDataChange'
            },
            activeIndex: {
                type: String,
                observer: 'onTabIndexChange'
            }
        };
        this.data = {
            isIpx: false,
            tabbarArray: [],
            currentTabIndex: ''
        };
    }
    ready() {
        this.setData({
            isIpx: this.app.globalData.phoneInfo.isIpx
        });
    }
    onTabIndexChange(newVal) {
        this.setData({
            currentTabIndex: newVal
        });
    }
    onTabbarDataChange(newVal) {
        this.setData({
            tabbarArray: newVal
        });
    }
    onClickTap(event) {
        const index = event.currentTarget.dataset.index;
        this.triggerEvent('change', index);
    }
};
UplusTabbar = tslib_1.__decorate([
    index_1.WxComponent()
], UplusTabbar);
exports.default = UplusTabbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBR3pELElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLG9CQUFhO0lBQXREOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxLQUFLO2dCQUNYLFFBQVEsRUFBRSxvQkFBMkI7YUFDdEM7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLGtCQUF5QjthQUNwQztTQUNGLENBQUM7UUFFRixTQUFJLEdBQUc7WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztJQW9DSixDQUFDO0lBbENDLEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFNRCxnQkFBZ0IsQ0FBQyxNQUFXO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxlQUFlLEVBQUUsTUFBTTtTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBTUQsa0JBQWtCLENBQUMsTUFBVztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0YsQ0FBQTtBQXBEb0IsV0FBVztJQUQvQixtQkFBVyxFQUFFO0dBQ08sV0FBVyxDQW9EL0I7a0JBcERvQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9iYXNlJztcbmltcG9ydCB7IFd4Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvaW5kZXgnO1xuXG5AV3hDb21wb25lbnQoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsdXNUYWJiYXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJvcGVydGllczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uID0ge1xuICAgIHRhYmJhckRhdGE6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgb2JzZXJ2ZXI6ICdvblRhYmJhckRhdGFDaGFuZ2UnIGFzIGFueVxuICAgIH0sXG4gICAgYWN0aXZlSW5kZXg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIG9ic2VydmVyOiAnb25UYWJJbmRleENoYW5nZScgYXMgYW55XG4gICAgfVxuICB9O1xuXG4gIGRhdGEgPSB7XG4gICAgaXNJcHg6IGZhbHNlLFxuICAgIHRhYmJhckFycmF5OiBbXSxcbiAgICBjdXJyZW50VGFiSW5kZXg6ICcnXG4gIH07XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlzSXB4OiB0aGlzLmFwcC5nbG9iYWxEYXRhLnBob25lSW5mby5pc0lweFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOebkeWQrOWIsOmhtemdouaVsOaNrlxuICAgKiBAcGFyYW0gbmV3VmFsXG4gICAqL1xuICBvblRhYkluZGV4Q2hhbmdlKG5ld1ZhbDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGN1cnJlbnRUYWJJbmRleDogbmV3VmFsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog55uR5ZCs5qCH562+5qCP5pWw5o2uXG4gICAqIEBwYXJhbSBuZXdWYWxcbiAgICovXG4gIG9uVGFiYmFyRGF0YUNoYW5nZShuZXdWYWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB0YWJiYXJBcnJheTogbmV3VmFsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog54K55Ye75qCH562+5qCPXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25DbGlja1RhcChldmVudDogYW55KSB7XG4gICAgY29uc3QgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIGluZGV4KTtcbiAgfVxufVxuIl19