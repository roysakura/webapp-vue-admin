import fetch from 'axios';
// import fetch from '../utils/fetch';
/**
 * 登录
 * @param mobile:用户名
 * @param password:密码
 * @param role_name:角色(2表示内部人员)
 */
export function login(mobile, password,role_name) {
  return fetch({
    url: '/api-token-auth/',
    // url: '/user/login',
    method: 'post',
    data: {
        mobile,
        password,
        role_name
    }
  });
}

/*export function login(email, password) {
    return fetch({
        url: '/user/login',
        method: 'post',
        data: {
            email,
            password,
        }
    });
}*/

/**
 * 通过token获取用户信息
 * @param id
 */
export function getInfo(id) {
  return fetch({
    url: `/api1.0/users/${id}/permissions/`,
    method: 'get',
  });
}
/**
 * 退出登录
 */
export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  });
}



