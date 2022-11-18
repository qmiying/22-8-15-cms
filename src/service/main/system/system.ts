import hyRequest from "@/service";
import { IDataType } from "@/service/types";

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post< IDataType >({
    url: url,
    data: queryInfo
  })
}