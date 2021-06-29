"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WxComponent = exports.WxPage = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const base_1 = require("../base/base");
function WxPage(decoratorOptions) {
    return function (constructor) {
        class WxPage extends constructor {
            constructor(..._args) {
                super();
            }
            onShareAppMessage() {
                return (decoratorOptions === null || decoratorOptions === void 0 ? void 0 : decoratorOptions.shareOptions) || {};
            }
            onLoad(options) {
                if (!(decoratorOptions === null || decoratorOptions === void 0 ? void 0 : decoratorOptions.shareOptions)) {
                    wx.hideShareMenu();
                }
                super.onLoad && super.onLoad(options);
            }
            onReady() {
                super.onReady && super.onReady();
            }
            onShow() {
                super.onShow && super.onShow();
            }
            onUnload() {
                this.storeBindings && this.storeBindings.destroyStoreBindings();
                super.onUnload && super.onUnload();
            }
            $setShareAppMessage(options) {
                const _super = Object.create(null, {
                    onShareAppMessage: { get: () => super.onShareAppMessage, set: v => super.onShareAppMessage = v }
                });
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    let config = options;
                    if (decoratorOptions === null || decoratorOptions === void 0 ? void 0 : decoratorOptions.shareOptions) {
                        config = Object.assign({}, decoratorOptions.shareOptions, options);
                    }
                    _super.onShareAppMessage = function () {
                        return config;
                    };
                });
            }
        }
        const current = new WxPage();
        const obj = util_1.toObject(current);
        Page(obj);
    };
}
exports.WxPage = WxPage;
function WxComponent() {
    return function (constructor) {
        class WxComponent extends constructor {
            constructor(..._args) {
                super();
                this.options = {
                    addGlobalClass: true
                };
            }
            created() {
                super.created && super.created();
            }
            attached() {
                super.attached && super.attached();
            }
            detached() {
                this.storeBindings && this.storeBindings.destroyStoreBindings();
                super.detached && super.detached();
            }
        }
        const current = new WxComponent();
        const obj = base_1.toComponent(util_1.toObject(current));
        Component(obj);
    };
}
exports.WxComponent = WxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0NBQW1DO0FBRW5DLHVDQUEwRDtBQUcxRCxTQUFnQixNQUFNLENBQUMsZ0JBQW1DO0lBQ3hELE9BQU8sVUFBVSxXQUErQjtRQUM5QyxNQUFNLE1BQU8sU0FBUSxXQUFXO1lBRTlCLFlBQVksR0FBRyxLQUFZO2dCQUN6QixLQUFLLEVBQUUsQ0FBQztZQUNWLENBQUM7WUFDRCxpQkFBaUI7Z0JBQ2YsT0FBTyxDQUFBLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLFlBQVksS0FBSSxFQUFFLENBQUM7WUFDOUMsQ0FBQztZQUNELE1BQU0sQ0FBQyxPQUFhO2dCQUNsQixJQUFJLEVBQUMsZ0JBQWdCLGFBQWhCLGdCQUFnQix1QkFBaEIsZ0JBQWdCLENBQUUsWUFBWSxDQUFBLEVBQUU7b0JBQ25DLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDcEI7Z0JBQ0QsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFHRCxPQUFPO2dCQUNMLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLENBQUM7WUFDRCxNQUFNO2dCQUNKLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFDRCxRQUFRO2dCQUNOLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNoRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxDQUFDO1lBR0ssbUJBQW1CLENBQUMsT0FBcUI7Ozs7O29CQUM3QyxJQUFJLE1BQU0sR0FBaUIsT0FBTyxDQUFDO29CQUNuQyxJQUFJLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLFlBQVksRUFBRTt3QkFHbEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDcEU7b0JBQ0QsT0FBTSxpQkFBaUIsR0FBRzt3QkFDeEIsT0FBTyxNQUFNLENBQUM7b0JBQ2hCLENBQUMsQ0FBQztnQkFDSixDQUFDO2FBQUE7U0FDRjtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsZUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQztBQUNKLENBQUM7QUE5Q0Qsd0JBOENDO0FBRUQsU0FBZ0IsV0FBVztJQUN6QixPQUFPLFVBQVUsV0FBb0M7UUFDbkQsTUFBTSxXQUFZLFNBQVEsV0FBVztZQUtuQyxZQUFZLEdBQUcsS0FBWTtnQkFDekIsS0FBSyxFQUFFLENBQUM7Z0JBSlYsWUFBTyxHQUFRO29CQUNiLGNBQWMsRUFBRSxJQUFJO2lCQUNyQixDQUFDO1lBR0YsQ0FBQztZQUNELE9BQU87Z0JBQ0wsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsQ0FBQztZQUNELFFBQVE7Z0JBQ04sS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsQ0FBQztZQUNELFFBQVE7Z0JBQ04sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQ2hFLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLENBQUM7U0FDRjtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFFbEMsTUFBTSxHQUFHLEdBQUcsa0JBQVcsQ0FBQyxlQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQTFCRCxrQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b09iamVjdCB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgQmFzZVBhZ2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgdG9Db21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UnO1xuaW1wb3J0IHsgRGVjb3JhdG9yT3B0aW9ucywgU2hhcmVPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBXeFBhZ2UoZGVjb3JhdG9yT3B0aW9ucz86IERlY29yYXRvck9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogbmV3ICgpID0+IEJhc2VQYWdlKTogdm9pZCB7XG4gICAgY2xhc3MgV3hQYWdlIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgc3RvcmVCaW5kaW5nczogYW55O1xuICAgICAgY29uc3RydWN0b3IoLi4uX2FyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICB9XG4gICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIGRlY29yYXRvck9wdGlvbnM/LnNoYXJlT3B0aW9ucyB8fCB7fTtcbiAgICAgIH1cbiAgICAgIG9uTG9hZChvcHRpb25zPzogYW55KSB7XG4gICAgICAgIGlmICghZGVjb3JhdG9yT3B0aW9ucz8uc2hhcmVPcHRpb25zKSB7XG4gICAgICAgICAgd3guaGlkZVNoYXJlTWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uTG9hZCAmJiBzdXBlci5vbkxvYWQob3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8vIOmHjeWGmeeUn+WRveWRqOacn+WHveaVsO+8jOWPr+S7peWcqOi/memHjOWJjeWQjuaLpuaIquaTjeS9nFxuICAgICAgb25SZWFkeSgpIHtcbiAgICAgICAgc3VwZXIub25SZWFkeSAmJiBzdXBlci5vblJlYWR5KCk7XG4gICAgICB9XG4gICAgICBvblNob3coKSB7XG4gICAgICAgIHN1cGVyLm9uU2hvdyAmJiBzdXBlci5vblNob3coKTtcbiAgICAgIH1cbiAgICAgIG9uVW5sb2FkKCkge1xuICAgICAgICB0aGlzLnN0b3JlQmluZGluZ3MgJiYgdGhpcy5zdG9yZUJpbmRpbmdzLmRlc3Ryb3lTdG9yZUJpbmRpbmdzKCk7XG4gICAgICAgIHN1cGVyLm9uVW5sb2FkICYmIHN1cGVyLm9uVW5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKiDorr7nva7lubbopobnm5bpobXpnaLliIbkuqvphY3nva4gKi9cbiAgICAgIGFzeW5jICRzZXRTaGFyZUFwcE1lc3NhZ2Uob3B0aW9uczogU2hhcmVPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWc6IFNoYXJlT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChkZWNvcmF0b3JPcHRpb25zPy5zaGFyZU9wdGlvbnMpIHtcbiAgICAgICAgICAvLyDlkIjlubbmlbDmja4gb3B0aW9ucyDkvJjlhYjnuqfpq5jkuo4gZGVjb3JhdG9yT3B0aW9ucy5zaGFyZU9wdGlvbnNcbiAgICAgICAgICAvLyDlpoLmnpxrZXnnm7jlkIwgb3B0aW9ucyDnmoTlgLzkvJropobnm5YgZGVjb3JhdG9yT3B0aW9ucy5zaGFyZU9wdGlvbnNcbiAgICAgICAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWNvcmF0b3JPcHRpb25zLnNoYXJlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBXeFBhZ2UoKTtcbiAgICBjb25zdCBvYmogPSB0b09iamVjdChjdXJyZW50KTtcbiAgICBQYWdlKG9iaik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBXeENvbXBvbmVudCgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogbmV3ICgpID0+IEJhc2VDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjbGFzcyBXeENvbXBvbmVudCBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICAgIHN0b3JlQmluZGluZ3M6IGFueTtcbiAgICAgIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcbiAgICAgIH07XG4gICAgICBjb25zdHJ1Y3RvciguLi5fYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgIH1cbiAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZWQgJiYgc3VwZXIuY3JlYXRlZCgpO1xuICAgICAgfVxuICAgICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHN1cGVyLmF0dGFjaGVkICYmIHN1cGVyLmF0dGFjaGVkKCk7XG4gICAgICB9XG4gICAgICBkZXRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5zdG9yZUJpbmRpbmdzICYmIHRoaXMuc3RvcmVCaW5kaW5ncy5kZXN0cm95U3RvcmVCaW5kaW5ncygpO1xuICAgICAgICBzdXBlci5kZXRhY2hlZCAmJiBzdXBlci5kZXRhY2hlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFd4Q29tcG9uZW50KCk7XG4gICAgLy8g6L+Z6YeM5piv5LiOIFBhZ2Ug5LiN5LiA5qC355qE5Zyw5pa5XG4gICAgY29uc3Qgb2JqID0gdG9Db21wb25lbnQodG9PYmplY3QoY3VycmVudCkpO1xuICAgIENvbXBvbmVudChvYmopO1xuICB9O1xufVxuIl19