((window) => {
    var icomId = '5010'; // 1、组件id

    // 组件播放器
    class IcomPlayer {
        // 构造函数
        constructor (params) {
            if (!params) { return; }

            // 1、加载项
            this.loadList = {
                js: [
                    window.icomYxp.env.baseUrl + '/../libs/vue/vue.js',
                    window.icomYxp.env.baseUrl + '/../icomplayer/english_dictation/1.0.0/english_dictation.umd.js',
                ],
                css: [],
            };
            // 2、初始化变量
            this.icomId = icomId;
            this.domId = params.domId;
            this.startParams = params;
            // 3、对外开放的接口
            this.exports = ['start', 'post', 'submit', 'getRecord', 'setSubmit', 'isDone', 'reset', 'pause', 'showAnswer'];
        }

        // 启动
        start () {
            var me = this;
            // 判断有全局Vue, 则不加载Vue
            if (typeof window.Vue !== 'undefined') {
                me.loadList.js.shift();
            }
            window.icomYxp.utils.getScript(me.loadList.js, (e) => {
                // 没有resourceContent或resourceInfo需要掉接口补全数据
                if (typeof me.startParams.content.treeResources === 'undefined' && (typeof me.startParams.content.resourceContent === 'undefined' || typeof me.startParams.content.resourceInfo === 'undefined')) {
                    window.icomYxp.fillParam(me.startParams).then((data) => {
                        render();
                    });
                } else {
                    render();
                }
            }, 1);

            // 开始渲染
            function render () {
                var dom = document.querySelector('#' + me.domId);

                dom.innerHTML = '<div id="' + me.startParams.domId + me.startParams.icomId + '">' + me.startParams.icomId + '</div>';

                // console.log('param.domId + param.icomId', param.domId + param.content.icomId);
                me.vm = new window.Vue({
                    el: '#' + me.startParams.domId + me.startParams.icomId,
                    data: function () {
                        return {
                            param: me.startParams,
                        };
                    },
                    created: function () {
                        // console.log(66666, JSON.stringify(this.testdata));

                        // console.log(7777, this.testdata);
                    },
                    methods: {
                        getRecord: function () {
                            return this.$children[0].getRecord();
                        },
                        setSubmit: function () {
                            this.$children[0].setSubmit();
                        },
                        submit: function () {
                            this.$children[0].submit();
                        },
                        isDone: function () {
                            return this.$children[0].isDone();
                        },
                        reset: function () {
                            this.$children[0].reset();
                        },
                        pause: function () {
                            this.$children[0].pause();
                        },
                        showAnswer: function () {
                            this.$children[0].showAnswer();
                        },
                        exitSave: function (data, callback) {
                            if (this.$closeEnglishDictationLoading && this.$closeEnglishDictationLoading()) {
                                return;
                            }
                            if (this.$closeEnglishDictationToast && this.$closeEnglishDictationToast()) {
                                return;
                            }
                            if (this.$closeEnglishDictationDialog && this.$closeEnglishDictationDialog()) {
                                return;
                            }
                            this.$children[0].exitSave(data, callback);
                        },
                        
                    },
                    template: '<english-dictation :param="param"></english-dictation>',
                });
            }
            return me;
        }

        submit () {
            console.log('submit');
            this.vm.submit();
        }
        getRecord (data) {
            console.log(111, 'getRecord', data);
            return this.vm.getRecord();
        }
        setSubmit () {
            console.log('setSubmit');
            this.vm.setSubmit();
        }
        isDone () {
            return this.vm.isDone();
        }
        reset () {
            this.vm.reset();
        }
        pause () {
            this.vm.pause();
        }
        showAnswer () {
            this.vm.showAnswer();
        }
        // 切换场景scene
        changeScene (scene) {
            if (scene) {
                this.startParams.env.scene = scene;
                this.start();
            }
        }
        // 退出保存
        exitSave (data, callback) {
            this.vm.exitSave(data, callback);
        }
        
        // 测试函数
        post (params, callback) { }
    }

    /// 播放器实例化 ###################################################################################### ///
    window.icomYxp && window.icomYxp.addIcom(IcomPlayer, icomId);
})(window);
