window.yxpapiConfig = {
    'env': (function () {
        if (window.location.origin.indexOf('dev') !== -1 || window.location.origin.indexOf('localhost') !== -1 || /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(window.location.hostname)) {
            return 'development';
        } else if (window.location.origin.indexOf('test') !== -1) {
            return 'test';
        } else {
            return 'production';
        }
    })(),
    'development': {
        host: '',
        protocol: '',
        path: '',
        init:(function(){
            if(Vue){
                Vue.config.devtools = true;
                Vue.config.productionTip = true;
            }
        })(),
        loginAddress: {
            hash: '#/login',
            pathname: '/yxp-login/',
            origin: '',
            appId: '10000',
            appName: '我的空间',
        },
    },
    'test': {
        host: '',
        protocol: '',
        path: '',
        init:(function(){
            if(Vue){
                Vue.config.devtools = true;
                Vue.config.productionTip = true;
            }
        })(),

        loginAddress: {
            hash: '#/login',
            pathname: '/yxp-login/',
            origin: '',
            appId: '10000',
            appName: '我的空间',
        },
    },
    'production': {
        host: '',
        protocol: '',
        path: '',
        init:(function(){
            if(Vue){
                Vue.config.devtools = true;
                Vue.config.productionTip = true;
            }
        })(),

        loginAddress: {
            hash: '#/login',
            pathname: '/yxp-login/',
            origin: '',
            appId: '10000',
            appName: '我的空间1222331',
        },
    },
};
