import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// 修改日期显示格式
const DATA_TYPE_FORMAT = 'YYYY-MM-DD HH-mm-ss'
export function formatUtcString (utcString: string, format: string = DATA_TYPE_FORMAT){
  return dayjs.utc(utcString).format(format)
}