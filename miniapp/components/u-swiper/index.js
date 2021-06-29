"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let USwiper = class USwiper extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            margin: {
                type: String,
                value: '0'
            },
            v: {
                type: Array,
                value: []
            },
            vn: {
                type: Array,
                value: []
            },
            radius: {
                type: Boolean,
                value: false
            },
            shadow: {
                type: Boolean,
                value: false
            }
        };
        this.data = {
            interval: 5000,
            duration: 500,
            active: 0
        };
    }
    changeBanner(e) {
        this.setData({
            active: e.detail.current
        });
    }
    goBanner(e) {
        this.triggerEvent('banner', e.currentTarget.dataset.item);
    }
};
USwiper = tslib_1.__decorate([
    index_1.WxComponent()
], USwiper);
exports.default = USwiper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBUSxTQUFRLG9CQUFhO0lBQWxEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxHQUFHO2FBQ1g7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGLENBQUM7UUFDRixTQUFJLEdBQVE7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxHQUFHO1lBQ2IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFDO0lBU0osQ0FBQztJQVJDLFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxRQUFRLENBQUMsQ0FBTTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRixDQUFBO0FBcENvQixPQUFPO0lBRDNCLG1CQUFXLEVBQUU7R0FDTyxPQUFPLENBb0MzQjtrQkFwQ29CLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9iYXNlL2Jhc2UnO1xuaW1wb3J0IHsgV3hDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9pbmRleCc7XG5AV3hDb21wb25lbnQoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVVN3aXBlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgbWFyZ2luOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzAnXG4gICAgfSxcbiAgICB2OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0sXG4gICAgdm46IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IFtdXG4gICAgfSxcbiAgICByYWRpdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH1cbiAgfTtcbiAgZGF0YTogYW55ID0ge1xuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgYWN0aXZlOiAwXG4gIH07XG4gIGNoYW5nZUJhbm5lcihlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWN0aXZlOiBlLmRldGFpbC5jdXJyZW50XG4gICAgfSk7XG4gIH1cbiAgZ29CYW5uZXIoZTogYW55KSB7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Jhbm5lcicsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0pO1xuICB9XG59XG4iXX0=