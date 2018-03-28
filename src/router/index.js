import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';
/*const Layout = resolve =>{
    require(['../views/layout/Layout.vue'],resolve);
};*/
/* login */
const Login = _import('login/index');
/*const Login = resolve =>{
    require(['../views/login/index.vue'],resolve);
};*/
/* dashboard */
const dashboard = _import('dashboard/index');
/*const dashboard = resolve =>{
    require(['../views/dashboard/index.vue'],resolve);
};*/
/* error page */
const Err404 = _import('404');

/* demo page */
const Form = _import('page/form');

//新闻相关
const News = _import('news/index');
const SendNews = _import('news/mnews/SendNews');
const EditNews = _import('news/mnews/editnews');


//帖子相关
const TieZi = _import('tiezi/index');
const sendtiezi = _import('tiezi/mtiezi/sendtiezi');
const EditTieZi = _import('tiezi/mtiezi/edittiezi');
//资料库相关
const Datum = _import('datum/index');
const upload = _import('datum/mdatum/upload');
const download = _import('datum/mdatum/download');

//用户管理(需要权限)
const InnderUser = _import('inneruser/index');
const AddUser = _import('inneruser/muser/adduser');
const EditUser = _import('inneruser/muser/edituser');

//广告模块
const AdvHome = _import('adv/index');
const AddAdv = _import('adv/madv/addadv');
const EditAdv = _import('adv/madv/editadv');
const EditTHome = _import('adv/madv/advhome');

//评论模块
const CommentHome = _import('comment/index');
const ActiveU = _import('comment/activeu');

//权限模块
const PermissionHome = _import('permanage/index');

//标签管理模块
const TagHome = _import('tag/index');
const addTag = _import('tag/mtag/addtag');
const editTag = _import('tag/mtag/edittag');
const addCategory = _import('tag/mtag/addcategory');
const editCategory = _import('tag/mtag/editcategory');
const categoryIndex = _import('tag/mtag/category');

//积分模块
const JiFenHome = _import('jifen/index');
const addJiFen = _import('jifen/mjifen/addjifen');
const editJiFen = _import('jifen/mjifen/editjifen');

//爬虫相关
const Table = _import('table/index');

//名片管理
const CardHome = _import('card/index');
//举报
const ReportHome = _import('report/index');
Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  * //所有权限通用路由表
  //如首页和登录页和一些不用权限的公用页面
  **/
export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }],
  }
];

export default new Router({
  mode: 'history',
  base: '/webapp/admin/',//设置路由路径模式
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    name: '首页',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', component: Form,icon: 'zonghe',name: '首页' }
    ]
  },
    {
        path: '/table',
        component: Layout,
        redirect: '/table/index',
        name: '爬虫管理',
        noDropdown: true,
        icon: 'tubiaoleixingzhengchang',
        //角色限制：这个就只能管理员去访问, meta: { role: ['admin','新闻管理员'] }
        children: [
            { path: 'index', component: Table, name: '爬取文章' },
        ]
    },

    {
        path:'/news',
        component:Layout,
        redirect:'news/mnews/SendNews',
        name: '新闻管理',
        icon: 'zujian',
        children: [//全部人员可看
            { path: 'index', component: News, name: '新闻列表', icon: 'zonghe' },
            { path: 'SendNews', component: SendNews, name: '发布新闻', icon: 'zonghe' },
            { path: 'editnews/:newsId', component: EditNews, name: '编辑新闻', icon: 'zonghe',meta: {
                title: '新闻编辑',
                needAuth: true
            }   }
        ]
  },
    {
        path: '/card',
        component: Layout,
        redirect: '/card/index',
        name: '名片管理',
        icon: 'tubiaoleixingzhengchang',
        noDropdown: true,//没有下拉
        //角色限制：这个就只能管理员去访问
        children: [
            { path: 'index', component: CardHome, name: '名片管理'}
        ]
    },
    {
        path: '/report',
        component: Layout,
        redirect: '/report/index',
        name: '举报管理',
        icon: 'tubiaoleixingzhengchang',
        noDropdown: true,//没有下拉
        //角色限制：这个就只能管理员去访问
        children: [
            { path: 'index', component: ReportHome, name: '举报'}
        ]
    },
    {
        path:'/tiezi',
        component:Layout,
        redirect:'tiezi/mtiezi/sendtiezi',
        name: '帖子管理',
        icon: 'zujian',
        children: [//全部人员可看EditTieZi
            { path: 'index', component: TieZi, name: '帖子列表', icon: 'zonghe' },
            { path: 'sendtiezi', component: sendtiezi, name: '发布帖子', icon: 'zonghe' },
            { path: 'edittiezi/:tieId', component: EditTieZi, name: '编辑帖子', icon: 'zonghe',meta: {
                title: '编辑帖子',
                needAuth: true
            }   }
        ]
  },
    {
        path:'/datum',
        component:Layout,
        redirect:'datum/mdatum/upload',
        name: '资料库管理',
        icon: 'zujian',
        children: [ //全部人员可看
            { path: 'index', component: Datum, name: '资料列表', icon: 'zonghe' },
            { path: 'upload', component: upload, name: '上传资料', icon: 'zonghe' },
            { path: 'download/:datumId', component: download, name: '编辑资料', icon: 'zonghe' }
        ]
  },
    {
        path:'/comment',
        component:Layout,
        redirect:'comment/index',
        name: '评论管理',
        icon: 'zujian',
        children: [ //全部人员可看
            { path: 'index', component: CommentHome, name: '评论列表', icon: 'zonghe' },
            { path: 'activeu', component: ActiveU, name: '活跃度', icon: 'zonghe' },
        ]
    },
    {
        path:'/jifen',
        component:Layout,
        redirect:'jifen/index',
        name: '积分管理',
        icon: 'zujian',
        children: [ //全部人员可看
            { path: 'index', component: JiFenHome, name: '积分列表', icon: 'zonghe' },
            { path: 'addjifen', component: addJiFen, name: '添加积分', icon: 'zonghe' },
            { path: 'editjifen/:jId', component: editJiFen, name: '编辑积分', icon: 'zonghe' },

        ]
    },
    {
        path:'/tag',
        component:Layout,
        redirect:'tag/mtag/addtag',
        name: '标签管理',
        icon: 'zujian',
        children: [ //全部人员可看
            { path: 'index', component: TagHome, name: '标签列表', icon: 'zonghe' },
            { path: 'addtag', component: addTag, name: '添加标签', icon: 'zonghe' },
            { path: 'edittag/:tagId', component: editTag, name: '编辑标签', icon: 'zonghe' },
            { path: 'catgeory', component: categoryIndex, name: '类别列表', icon: 'zonghe' },
            { path: 'addcategory', component: addCategory, name: '添加类别', icon: 'zonghe' },
            { path: 'editcategory/:catId', component: editCategory, name: '编辑类别', icon: 'zonghe' },
        ]
    },
    {
        path: '/inneruser',
        component: Layout,
        redirect: 'inneruser/muser/adduser',
        name: '管理员管理',
        icon: 'tubiaoleixingzhengchang',
        //角色限制：这个就只能管理员去访问EditUser
    // , meta: { role: ['admin','新闻管理员'] }
children: [
            { path: 'index', component: InnderUser, name: '管理员列表'},
            { path: 'adduser', component: AddUser, name: '添加管理员'},
            { path: 'edituser/:adminId', component: EditUser, name: '编辑管理员', icon: 'zonghe',meta: {
                title: '编辑管理员',
                needAuth: true
            }   }
            ]

    },
    {
        path: '/adv',
        component: Layout,
        redirect: 'adv/madv/addadv',
        name: '广告管理',
        icon: 'tubiaoleixingzhengchang',
        //角色限制：这个就只能管理员去访问
        children: [
            { path: 'index', component: AdvHome, name: '广告列表' },
            { path: 'addadv', component: AddAdv, name: '添加广告' },
            { path: 'editadv/:advId', component: EditAdv, name: '编辑广告' },
            { path: 'advhome', component: EditTHome, name: '广告首页' }
        ]

    },{
    path: '/permanage',
    component: Layout,
    redirect: '/permanage/index',
    name: '权限管理',
    icon: 'tubiaoleixingzhengchang',
    noDropdown: true,//没有下拉
    //角色限制：这个就只能管理员去访问
    children: [
        { path: 'index', component: PermissionHome, name: '权限列表', meta: { role: ['admin','新闻管理员'] } }
        ]
  },

  { path: '*', redirect: '/404', hidden: true }
];
