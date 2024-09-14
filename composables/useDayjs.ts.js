// composables/useDayjs.js
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/zh-tw';

// 擴展 dayjs 的 UTC 插件和設置語言
dayjs.extend(utc);
dayjs.locale('zh-tw');

// 封裝 dayjs 方便在組件中使用
export const useDayjs = () => {
  return dayjs;
};
