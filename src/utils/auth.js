import Cookies from 'js-cookie'
//获取token的键
const TokenKey = 'Admin-Token';
const UIdKey = 'uId';
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUId() {
    return Cookies.get(UIdKey)
}

export function setUId(token) {
    return Cookies.set(UIdKey, token)
}

export function removeUId() {
    return Cookies.remove(UIdKey)
}
