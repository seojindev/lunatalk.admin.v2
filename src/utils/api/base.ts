import instance from '../axios'
import type { BaseApi } from '../interface/base'
import type { BaseResponse } from '../interface/common'

export function getBase() {
  return instance.get<BaseResponse<BaseApi>>('/api/system/base-data')
}
