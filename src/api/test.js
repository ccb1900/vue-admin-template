import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table2/list',
    method: 'get',
    params
  })
}
