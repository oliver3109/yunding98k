"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../core/base/base");
const index_1 = require("../../core/decorator/index");
let UList = class UList extends base_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            body: {
                type: Boolean,
                value: false
            },
            column: {
                type: Boolean,
                value: false
            },
            big: {
                type: Boolean,
                value: false
            },
            click: {
                type: Boolean,
                value: false
            },
            vn: {
                type: Array,
                value: [],
                observer: this.vnChange
            },
            sm: {
                type: Boolean,
                value: false
            },
            v: {
                type: Object,
                value: {
                    src: '',
                    title: '',
                    p: ''
                },
                observer: this.vChange
            }
        };
        this.data = {
            v: this.properties.v,
            vn: []
        };
    }
    body() {
        if (this.properties.body) {
            wx.previewImage({
                current: this.properties.v.src,
                urls: [this.properties.v.src]
            });
        }
    }
    vChange(val) {
        this.initList(val);
    }
    initList(val) {
        this.data.v.title =
            this.data.vn.length != 0 ? this.data.v[this.data.vn[0]] : val.title;
        this.data.v.src =
            this.data.vn.length != 0 ? this.data.v[this.data.vn[1]] : val.src;
        this.data.v.p =
            this.data.vn.length != 0 ? this.data.v[this.data.vn[2]] : val.p;
        this.setData({
            v: this.data.v
        });
    }
    vnChange(val) {
        this.data.vn = val;
    }
};
UList = tslib_1.__decorate([
    index_1.WxComponent()
], UList);
exports.default = UList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXlEO0FBRXpELElBQXFCLEtBQUssR0FBMUIsTUFBcUIsS0FBTSxTQUFRLG9CQUFhO0lBQWhEOztRQUNFLGVBQVUsR0FBK0M7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELEdBQUcsRUFBRTtnQkFDSCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNMLEdBQUcsRUFBRSxFQUFFO29CQUNQLEtBQUssRUFBRSxFQUFFO29CQUNULENBQUMsRUFBRSxFQUFFO2lCQUNOO2dCQUNELFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTzthQUN2QjtTQUNGLENBQUM7UUFDRixTQUFJLEdBQStCO1lBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEIsRUFBRSxFQUFFLEVBQUU7U0FDUCxDQUFDO0lBMEJKLENBQUM7SUF6QkMsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxPQUFPLEVBQUcsSUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDdkMsSUFBSSxFQUFFLENBQUUsSUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFRO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsUUFBUSxDQUFDLEdBQVE7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxRQUFRLENBQUMsR0FBZTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztDQUNGLENBQUE7QUFsRW9CLEtBQUs7SUFEekIsbUJBQVcsRUFBRTtHQUNPLEtBQUssQ0FrRXpCO2tCQWxFb0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvYmFzZSc7XG5pbXBvcnQgeyBXeENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL2luZGV4JztcbkBXeENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVTGlzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcm9wZXJ0aWVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuUHJvcGVydHlPcHRpb24gPSB7XG4gICAgYm9keToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgY29sdW1uOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICBiaWc6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIGNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICB2bjoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWx1ZTogW10sXG4gICAgICBvYnNlcnZlcjogdGhpcy52bkNoYW5nZVxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIHY6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHNyYzogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgcDogJydcbiAgICAgIH0sXG4gICAgICBvYnNlcnZlcjogdGhpcy52Q2hhbmdlXG4gICAgfVxuICB9O1xuICBkYXRhOiB7IHY6IGFueTsgdm46IEFycmF5PGFueT4gfSA9IHtcbiAgICB2OiB0aGlzLnByb3BlcnRpZXMudixcbiAgICB2bjogW11cbiAgfTtcbiAgYm9keSgpIHtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmJvZHkpIHtcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6ICh0aGlzIGFzIGFueSkucHJvcGVydGllcy52LnNyYyxcbiAgICAgICAgdXJsczogWyh0aGlzIGFzIGFueSkucHJvcGVydGllcy52LnNyY11cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB2Q2hhbmdlKHZhbDogYW55KSB7XG4gICAgdGhpcy5pbml0TGlzdCh2YWwpO1xuICB9XG4gIGluaXRMaXN0KHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRhLnYudGl0bGUgPVxuICAgICAgdGhpcy5kYXRhLnZuLmxlbmd0aCAhPSAwID8gdGhpcy5kYXRhLnZbdGhpcy5kYXRhLnZuWzBdXSA6IHZhbC50aXRsZTtcbiAgICB0aGlzLmRhdGEudi5zcmMgPVxuICAgICAgdGhpcy5kYXRhLnZuLmxlbmd0aCAhPSAwID8gdGhpcy5kYXRhLnZbdGhpcy5kYXRhLnZuWzFdXSA6IHZhbC5zcmM7XG4gICAgdGhpcy5kYXRhLnYucCA9XG4gICAgICB0aGlzLmRhdGEudm4ubGVuZ3RoICE9IDAgPyB0aGlzLmRhdGEudlt0aGlzLmRhdGEudm5bMl1dIDogdmFsLnA7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHY6IHRoaXMuZGF0YS52XG4gICAgfSk7XG4gIH1cbiAgdm5DaGFuZ2UodmFsOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhLnZuID0gdmFsO1xuICB9XG59XG4iXX0=