"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_1 = require("../../utils/http");
exports.default = {
    getItemList: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return http_1.default.get({ url: '/item/list', data });
    }),
    getItemDetail: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return http_1.default.get({ url: '/item/detail', data });
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBb0M7QUFTcEMsa0JBQWU7SUFFYixXQUFXLEVBQUUsQ0FBTyxJQUFVLEVBQUUsRUFBRTtRQUNoQyxPQUFPLGNBQUksQ0FBQyxHQUFHLENBQWEsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFBO0lBRUQsYUFBYSxFQUFFLENBQU8sSUFBcUIsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1BcGkge1xuICAvKiog6I635Y+W6KOF5aSH5YiX6KGoICovXG4gIGdldEl0ZW1MaXN0OiAoZGF0YT86IGFueSkgPT4gUHJvbWlzZTxBcnJheTxhbnk+PjtcbiAgLyoqIOiOt+WPluijheWkh+ijheWkhyAqL1xuICBnZXRJdGVtRGV0YWlsOiAoZGF0YT86IHsgaWQ6IHN0cmluZyB9KSA9PiBQcm9taXNlPGFueT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqIOiOt+WPluijheWkh+WIl+ihqCAqL1xuICBnZXRJdGVtTGlzdDogYXN5bmMgKGRhdGE/OiBhbnkpID0+IHtcbiAgICByZXR1cm4gaHR0cC5nZXQ8QXJyYXk8YW55Pj4oeyB1cmw6ICcvaXRlbS9saXN0JywgZGF0YSB9KTtcbiAgfSxcbiAgLyoqIOafpeivouijheWkh+ivpuaDhSAqL1xuICBnZXRJdGVtRGV0YWlsOiBhc3luYyAoZGF0YT86IHsgaWQ6IHN0cmluZyB9KSA9PiB7XG4gICAgcmV0dXJuIGh0dHAuZ2V0KHsgdXJsOiAnL2l0ZW0vZGV0YWlsJywgZGF0YSB9KTtcbiAgfVxufTtcbiJdfQ==