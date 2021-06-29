"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UNav = class UNav extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            change: {
                type: Number,
                value: 0,
                observer: this.changeT
            },
            changeTitle: {
                type: String,
                value: ''
            },
            title: {
                type: String,
                value: '标题',
                observer: this.reinnerTitle
            },
            theme: {
                type: Boolean,
                value: false,
                observer: this.isTheme
            }
        };
        this.data = {
            title: '标题',
            headHeight: 0,
            statusBarHeight: 0,
            isIpx: false,
            back: false
        };
    }
    isTheme(val) {
        wx.setNavigationBarColor({
            frontColor: val ? '#ffffff' : '#000000',
            backgroundColor: val ? '#ffffff' : '#000000',
            animation: {
                duration: 30,
                timingFunc: 'linear'
            }
        });
    }
    reinnerTitle() {
        wx.nextTick(() => {
            this.isShow();
        });
    }
    isShow() {
        if (getCurrentPages().length > 1) {
            this.setData({
                back: true
            });
        }
    }
    goHome() {
        this.$util.common.throttle(this, () => {
            this.$router.reLaunch('/views/navigation/pages/main-page/index');
        });
    }
    goBack() {
        this.$util.common.throttle(this, () => {
            wx.navigateBack({
                delta: 1,
                fail: () => {
                    this.$router.reLaunch('/views/navigation/pages/main-page/index');
                }
            });
        });
    }
    ready() {
        this.setData({
            statusBarHeight: this.app.globalData.phoneInfo.statusBarHeight,
            headHeight: this.app.globalData.phoneInfo.headHeight,
            isIpx: this.app.globalData.phoneInfo.isIpx,
            isIos: this.app.globalData.phoneInfo.isIos,
            menuButtonObject: wx.getMenuButtonBoundingClientRect()
        });
    }
};
UNav = tslib_1.__decorate([
    index_1.WxComponent()
], UNav);
exports.default = UNav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLElBQUksR0FBekIsTUFBcUIsSUFBSyxTQUFRLG9CQUFhO0lBQS9DOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTzthQUN2QjtZQUNELFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWTthQUM1QjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdkI7U0FDRixDQUFDO1FBQ0YsU0FBSSxHQUFRO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDO0lBZ0RKLENBQUM7SUE5Q0MsT0FBTyxDQUFDLEdBQVk7UUFDbEIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN2QyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDNUMsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFlBQVk7UUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxlQUFlLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDcEMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUNULElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZTtZQUM5RCxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDcEQsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQzFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSztZQUMxQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsK0JBQStCLEVBQUU7U0FDdkQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUE1RW9CLElBQUk7SUFEeEIsbUJBQVcsRUFBRTtHQUNPLElBQUksQ0E0RXhCO2tCQTVFb0IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVTmF2IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIHByb3BlcnRpZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5Qcm9wZXJ0eU9wdGlvbiA9IHtcbiAgICBjaGFuZ2U6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgb2JzZXJ2ZXI6IHRoaXMuY2hhbmdlVFxuICAgIH0sXG4gICAgY2hhbmdlVGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAn5qCH6aKYJyxcbiAgICAgIG9ic2VydmVyOiB0aGlzLnJlaW5uZXJUaXRsZVxuICAgIH0sXG4gICAgdGhlbWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlcjogdGhpcy5pc1RoZW1lXG4gICAgfVxuICB9O1xuICBkYXRhOiBhbnkgPSB7XG4gICAgdGl0bGU6ICfmoIfpopgnLFxuICAgIGhlYWRIZWlnaHQ6IDAsXG4gICAgc3RhdHVzQmFySGVpZ2h0OiAwLFxuICAgIGlzSXB4OiBmYWxzZSxcbiAgICBiYWNrOiBmYWxzZVxuICB9O1xuXG4gIGlzVGhlbWUodmFsOiBib29sZWFuKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhckNvbG9yKHtcbiAgICAgIGZyb250Q29sb3I6IHZhbCA/ICcjZmZmZmZmJyA6ICcjMDAwMDAwJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdmFsID8gJyNmZmZmZmYnIDogJyMwMDAwMDAnLFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAzMCxcbiAgICAgICAgdGltaW5nRnVuYzogJ2xpbmVhcidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZWlubmVyVGl0bGUoKSB7XG4gICAgd3gubmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy5pc1Nob3coKTtcbiAgICB9KTtcbiAgfVxuICBpc1Nob3coKSB7XG4gICAgaWYgKGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJhY2s6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnb0hvbWUoKSB7XG4gICAgdGhpcy4kdXRpbC5jb21tb24udGhyb3R0bGUodGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy4kcm91dGVyLnJlTGF1bmNoKCcvdmlld3MvbmF2aWdhdGlvbi9wYWdlcy9tYWluLXBhZ2UvaW5kZXgnKTtcbiAgICB9KTtcbiAgfVxuICBnb0JhY2soKSB7XG4gICAgdGhpcy4kdXRpbC5jb21tb24udGhyb3R0bGUodGhpcywgKCkgPT4ge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgZGVsdGE6IDEsXG4gICAgICAgIGZhaWw6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucmVMYXVuY2goJy92aWV3cy9uYXZpZ2F0aW9uL3BhZ2VzL21haW4tcGFnZS9pbmRleCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZWFkeSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc3RhdHVzQmFySGVpZ2h0OiB0aGlzLmFwcC5nbG9iYWxEYXRhLnBob25lSW5mby5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICBoZWFkSGVpZ2h0OiB0aGlzLmFwcC5nbG9iYWxEYXRhLnBob25lSW5mby5oZWFkSGVpZ2h0LFxuICAgICAgaXNJcHg6IHRoaXMuYXBwLmdsb2JhbERhdGEucGhvbmVJbmZvLmlzSXB4LFxuICAgICAgaXNJb3M6IHRoaXMuYXBwLmdsb2JhbERhdGEucGhvbmVJbmZvLmlzSW9zLFxuICAgICAgbWVudUJ1dHRvbk9iamVjdDogd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==