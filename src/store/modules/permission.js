import { asyncRouterMap, constantRouterMap } from '@/router/index';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    // console.log("过滤:",route.meta.role);
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
      // console.log("state.routers:",state.routers);
    }
  },
  actions: {
    //生成路由
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const  roles  = data.ros;
          // console.log("xxxxxxxxxxx:",roles);
        let accessedRouters
        //如果路由中包含admin
        if (roles.indexOf('admin') >= 0 || roles.indexOf('管理员') >= 0) {
          accessedRouters = asyncRouterMap //需动态设置的路由
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
};
export default permission;
