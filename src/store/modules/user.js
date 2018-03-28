import { login, logout, getInfo } from '@/api/login';
import { getToken, setToken, removeToken,getUId,setUId } from '@/utils/auth';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    id:getUId()
  },

  mutations: {
      SET_UID:(state,id)=>{
        state.id = id;
      },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      // console.log("name:",name);
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const mobile = userInfo.mobile.trim();
        return new Promise((resolve,reject)=>{
            login(mobile, userInfo.password,userInfo.role_name).then(response => {
                const data = response.data;
                console.log("登录成功获取到的信息为:",response);
                localStorage.setItem("uId",data.user_id);
                //登录成功以后设置token
                setToken(data.token);
                setUId(data.user_id);
                commit('SET_TOKEN', data.token);
                commit('SET_UID', data.user_id);
                resolve();
            },(err)=>{
                console.log(err.toString());
                reject(err);
            });
        })
           /* .catch(err => {
            console.log("登录错误:",err);
            //这里做错误的处理
            if(error.errorcode){
                if(error.errorcode[0] === "30000"){
                    alert("不存在该用户");
                }
            }
            // reject(error);
        });*/
       /* return new Promise((resolve, reject) => {

        });*/

    },


    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        //这里为什么会无效(通过获取getId())
        getInfo(localStorage.getItem("uId")).then(response => {
          const data = response.data.data.detail;

          let role = data.roles;
          const len = role.length;
          let roleStr = '';
          for(let i=0;i<len;i++){
              roleStr+=role[i].name+",";
          }
          console.log("user info:",roleStr);
          commit('SET_ROLES', roleStr);
          commit('SET_NAME', data.personal_info.name);
          commit('SET_AVATAR', data.avatar);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit, state }) {
        commit('SET_TOKEN', '');
        commit('SET_ROLES', []);
        removeToken();
        localStorage.removeItem("uId");
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        localStorage.removeItem("uId");
        resolve();
      });
    }
  }
};

export default user;
