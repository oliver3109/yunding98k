"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UPicker = class UPicker extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            type: {
                type: String,
                value: 'text'
            },
            d: {
                type: Array,
                value: []
            },
            textAlign: {
                type: String,
                value: 'left'
            },
            height: {
                type: String,
                value: '100%'
            },
            v: {
                type: String,
                value: '',
                observer: this.bindValue
            },
            placeholder: {
                type: String,
                value: ''
            },
            width: {
                type: String,
                value: '100rpx'
            }
        };
        this.data = {
            v: this.properties.v,
            d: this.properties.d
        };
    }
    bindValue(e) {
        this.setData({
            v: e
        });
    }
    bindPickerChange(e) {
        this.setData({
            v: e.detail.value
        }, () => {
            this.triggerEvent('change', { value: e.detail.value });
        });
    }
};
UPicker = tslib_1.__decorate([
    index_1.WxComponent()
], UPicker);
exports.default = UPicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBUSxTQUFRLG9CQUFhO0lBQWxEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3pCO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRixDQUFDO1FBQ0YsU0FBSSxHQUFRO1lBQ1YsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JCLENBQUM7SUFnQkosQ0FBQztJQWZDLFNBQVMsQ0FBQyxDQUFNO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdCQUFnQixDQUFDLENBQU07UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FDVjtZQUNFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDbEIsRUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQW5Eb0IsT0FBTztJQUQzQixtQkFBVyxFQUFFO0dBQ08sT0FBTyxDQW1EM0I7a0JBbkRvQixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9iYXNlJztcbmltcG9ydCB7IFd4Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvaW5kZXgnO1xuQFd4Q29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVQaWNrZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJvcGVydGllczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uID0ge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAndGV4dCdcbiAgICB9LFxuICAgIGQ6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IFtdXG4gICAgfSxcbiAgICB0ZXh0QWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbGVmdCdcbiAgICB9LFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcxMDAlJ1xuICAgIH0sXG4gICAgdjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb2JzZXJ2ZXI6IHRoaXMuYmluZFZhbHVlXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcxMDBycHgnXG4gICAgfVxuICB9O1xuICBkYXRhOiBhbnkgPSB7XG4gICAgdjogdGhpcy5wcm9wZXJ0aWVzLnYsXG4gICAgZDogdGhpcy5wcm9wZXJ0aWVzLmRcbiAgfTtcbiAgYmluZFZhbHVlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB2OiBlXG4gICAgfSk7XG4gIH1cbiAgYmluZFBpY2tlckNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoXG4gICAgICB7XG4gICAgICAgIHY6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgeyB2YWx1ZTogZS5kZXRhaWwudmFsdWUgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19