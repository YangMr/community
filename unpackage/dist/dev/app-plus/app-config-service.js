
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/msg/msg","pages/my/my","pages/search/search","pages/user-chat/user-chat","pages/user-set/user-set","pages/user-password/user-password","pages/user-email/user-email","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"社区交友","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff"},"tabBar":{"color":"#323232","selectedColor":"#ed6384","backgroundColor":"#ffffff","borderStyle":"black","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png","text":"社区"},{"pagePath":"pages/news/news","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png","text":"动态"},{"pagePath":"pages/msg/msg","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png","text":"消息"},{"pagePath":"pages/my/my","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"社区交友","compilerVersion":"3.8.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"center","placeholder":"搜索帖子","backgroundColor":"#f5f4f2","borderRadius":"5px","disabled":true,"placeholderColor":"#6d6c67"},"buttons":[{"float":"right","color":"#333333","colorPressed":"#bbbbbb","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息列表","enablePullDownRefresh":true,"titleNView":{"buttons":[{"float":"left","color":"#333333","colorPressed":"#bbbbbb","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""},{"float":"right","color":"#333333","colorPressed":"#bbbbbb","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/search/search","meta":{},"window":{"enablePullDownRefresh":true,"onReachBottomDistance":0,"titleNView":{"searchInput":{"align":"center","placeholder":"搜索帖子","backgroundColor":"#f5f4f2","borderRadius":"5px","placeholderColor":"#6d6c67"},"buttons":[{"float":"right","color":"#333333","colorPressed":"#bbbbbb","fontSize":"14px","text":"搜索"}]}}},{"path":"/pages/user-chat/user-chat","meta":{},"window":{"softinputMode":"adjustPan","bounce":"none","titleNView":{"buttons":[{"float":"right","color":"#333333","colorPressed":"#bbbbbb","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/user-set/user-set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/user-password/user-password","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/user-email/user-email","meta":{},"window":{"navigationBarTitleText":"邮箱绑定"}},{"path":"/pages/login/login","meta":{},"window":{"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
