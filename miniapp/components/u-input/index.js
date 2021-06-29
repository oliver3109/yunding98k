"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UInput = class UInput extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            password: {
                type: Boolean,
                value: false
            },
            disable: {
                type: Boolean,
                value: false
            },
            type: {
                type: String,
                value: 'text'
            },
            fontSize: {
                type: Number,
                value: 28
            },
            disabled: {
                type: Boolean,
                value: false
            },
            width: {
                type: String,
                value: '100rpx'
            },
            value: {
                type: String,
                value: '',
                observer: this.changeValue
            },
            placeholder: {
                type: String,
                value: ''
            },
            textAlign: {
                type: String,
                value: 'left'
            }
        };
        this.data = {
            value: this.properties.value
        };
    }
    changeValue(e) {
        this.setData({
            value: e
        });
    }
    bindValue(e) {
        this.triggerEvent('change', { value: e.detail.value });
    }
};
UInput = tslib_1.__decorate([
    index_1.WxComponent()
], UInput);
exports.default = UInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE1BQU0sR0FBM0IsTUFBcUIsTUFBTyxTQUFRLG9CQUFhO0lBQWpEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDM0I7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsTUFBTTthQUNkO1NBQ0YsQ0FBQztRQUNGLFNBQUksR0FBUTtZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztJQVNKLENBQUM7SUFSQyxXQUFXLENBQUMsQ0FBTTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQU07UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFuRG9CLE1BQU07SUFEMUIsbUJBQVcsRUFBRTtHQUNPLE1BQU0sQ0FtRDFCO2tCQW5Eb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSW5wdXQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJvcGVydGllczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uID0ge1xuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICBkaXNhYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3RleHQnXG4gICAgfSxcbiAgICBmb250U2l6ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDI4XG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnMTAwcnB4J1xuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG9ic2VydmVyOiB0aGlzLmNoYW5nZVZhbHVlXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICB0ZXh0QWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbGVmdCdcbiAgICB9XG4gIH07XG4gIGRhdGE6IGFueSA9IHtcbiAgICB2YWx1ZTogdGhpcy5wcm9wZXJ0aWVzLnZhbHVlXG4gIH07XG4gIGNoYW5nZVZhbHVlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB2YWx1ZTogZVxuICAgIH0pO1xuICB9XG4gIGJpbmRWYWx1ZShlOiBhbnkpIHtcbiAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgeyB2YWx1ZTogZS5kZXRhaWwudmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==