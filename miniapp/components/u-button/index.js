"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UButton = class UButton extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            fontSize: {
                type: Number,
                value: 28
            },
            className: {
                type: String,
                value: ''
            },
            width: {
                type: String,
                value: ''
            },
            theme: {
                type: Boolean,
                value: false
            },
            border: {
                type: Boolean,
                value: false
            },
            icon: {
                type: String,
                value: ''
            },
            plain: {
                type: Boolean,
                value: false
            },
            radius: {
                type: Boolean,
                value: false
            },
            load: {
                type: Boolean,
                value: false,
                observer: this.loadChange
            },
            title: {
                type: String,
                value: '按钮'
            },
            auth: {
                type: Boolean,
                value: false
            },
            login: {
                type: Boolean,
                value: false
            }
        };
        this.data = {
            loadStatus: false,
            loading: false
        };
    }
    loadOver() {
        this.setData({
            loading: false
        });
    }
    loadChange(val) {
        this.setData({
            loading: val
        });
    }
    getUserInfo(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
                return;
            }
        });
    }
    onTap() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.properties.load) {
                return;
            }
            const net = yield this.$util.common.networkStatus();
            const netStatus = net.networkType == 'none' ? false : true;
            if (netStatus) {
                this.$util.common.throttle(this, () => {
                    wx.vibrateShort();
                    this.triggerEvent('onTap');
                });
            }
            else {
                this.triggerEvent('onTap');
            }
        });
    }
};
UButton = tslib_1.__decorate([
    index_1.WxComponent()
], UButton);
exports.default = UButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBR3pELElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBUSxTQUFRLG9CQUFhO0lBQWxEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDMUI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRixDQUFDO1FBQ0YsU0FBSSxHQUFRO1lBQ1YsVUFBVSxFQUFFLEtBQUs7WUFDakIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBZ0NKLENBQUM7SUEvQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxVQUFVLENBQUMsR0FBWTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLEdBQUc7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssV0FBVyxDQUFDLENBQU07O1lBQ3RCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksNEJBQTRCLEVBQUU7Z0JBQ25ELE9BQU87YUFDUjtRQUNILENBQUM7S0FBQTtJQUNLLEtBQUs7O1lBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDeEIsT0FBTzthQUNSO1lBQ0QsTUFBTSxHQUFHLEdBQVEsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6RCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDM0QsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQ3BDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQXZGb0IsT0FBTztJQUQzQixtQkFBVyxFQUFFO0dBQ08sT0FBTyxDQXVGM0I7a0JBdkZvQixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9iYXNlJztcbmltcG9ydCB7IFd4Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvaW5kZXgnO1xuXG5AV3hDb21wb25lbnQoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgZm9udFNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAyOFxuICAgIH0sXG4gICAgY2xhc3NOYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHdpZHRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHRoZW1lOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgcGxhaW46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIHJhZGl1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgbG9hZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiB0aGlzLmxvYWRDaGFuZ2VcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ+aMiemSridcbiAgICB9LFxuICAgIGF1dGg6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIGxvZ2luOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfVxuICB9O1xuICBkYXRhOiBhbnkgPSB7XG4gICAgbG9hZFN0YXR1czogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfTtcbiAgbG9hZE92ZXIoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgbG9hZENoYW5nZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9hZGluZzogdmFsXG4gICAgfSk7XG4gIH1cbiAgLy8g5o6I5p2D55m75b2VXG4gIGFzeW5jIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGlmIChlLmRldGFpbC5lcnJNc2cgPT0gJ2dldFVzZXJJbmZvOmZhaWwgYXV0aCBkZW55Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBhc3luYyBvblRhcCgpIHtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmxvYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV0OiBhbnkgPSBhd2FpdCB0aGlzLiR1dGlsLmNvbW1vbi5uZXR3b3JrU3RhdHVzKCk7XG4gICAgY29uc3QgbmV0U3RhdHVzID0gbmV0Lm5ldHdvcmtUeXBlID09ICdub25lJyA/IGZhbHNlIDogdHJ1ZTtcbiAgICBpZiAobmV0U3RhdHVzKSB7XG4gICAgICB0aGlzLiR1dGlsLmNvbW1vbi50aHJvdHRsZSh0aGlzLCAoKSA9PiB7XG4gICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb25UYXAnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb25UYXAnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==