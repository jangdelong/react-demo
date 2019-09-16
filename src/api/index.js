import axios from 'axios'
import { getUrlParam } from '@/utils'
const debug = process.env.NODE_ENV !== 'production'
const root = debug ? '/test-api' : ''

export const post = async (url, params, config = {}) => {
  const ticket = getUrlParam('ticket')
  const appid = getUrlParam('appid') || getUrlParam('appId') || getUrlParam('client_id')
  const urlParamStr = (ticket ? '?ticket=' + ticket : '') + (appid ? '&appid=' + appid : '')

  return new Promise((resolve, reject) => {
    axios.post(root + url + urlParamStr, params, config).then(res => {
      const data = res.data
      if (data.success) {
        resolve(data)
      } else {
        reject(data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export const get = async (url, params, config = {}) => {
  const ticket = getUrlParam('ticket')
  const appid = getUrlParam('appid') || getUrlParam('appId') || getUrlParam('client_id')
  const urlParamStr = (ticket ? '?ticket=' + ticket : '') + (appid ? '&appid=' + appid : '')

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: root + url + urlParamStr,
      params,
      headers: config
    }).then(res => {
      resolve(res.data)
    }).catch(_ => {
      reject(_)
    })
  })
}

// 搜索联系人
export const searchContacts = async options => post('/api/linkspace/spacePartner/searchUser', options)
// 搜索伙伴企业
export const searchPartners = async options => post('/api/linkspace/spacePartner/listSpacePartnerForApp', options)
// 搜索业务范围
export const searchRoleScopes = async options => post('/api/linkspace/roleGroup/searchRePartnerCount', options)
