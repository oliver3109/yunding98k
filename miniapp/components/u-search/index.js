"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let USearch = class USearch extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            theme: {
                type: Boolean,
                value: false
            },
            placeholder: {
                type: String,
                value: ''
            },
            screen: {
                type: Boolean,
                value: false
            }
        };
    }
    change(e) {
        this.triggerEvent('change', e.detail.value);
    }
    sx() {
        this.triggerEvent('sx');
    }
};
USearch = tslib_1.__decorate([
    index_1.WxComponent()
], USearch);
exports.default = USearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBUSxTQUFRLG9CQUFhO0lBQWxEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0YsQ0FBQztJQU9KLENBQUM7SUFOQyxNQUFNLENBQUMsQ0FBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELEVBQUU7UUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBckJvQixPQUFPO0lBRDNCLG1CQUFXLEVBQUU7R0FDTyxPQUFPLENBcUIzQjtrQkFyQm9CLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9iYXNlL2Jhc2UnO1xuaW1wb3J0IHsgV3hDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9pbmRleCc7XG5AV3hDb21wb25lbnQoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVVNlYXJjaCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgdGhlbWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHNjcmVlbjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH1cbiAgfTtcbiAgY2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCBlLmRldGFpbC52YWx1ZSk7XG4gIH1cbiAgc3goKSB7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3N4Jyk7XG4gIH1cbn1cbiJdfQ==