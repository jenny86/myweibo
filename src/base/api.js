/**
 * @fileoverview 数据接口配置
 * @author 陈立英
 */
import Url from 'c-url';

module.exports = {
    // webapi域名配置
    originMap:{
        stage: 'https://external.pengpengla.com',
        pro: 'https://external.sfansclub.com'
    },
    /**
     * 根据环境获取接口域名
     * @name getOrigin
     */
    getOrigin: function() {
        // 当前开发环境
        var env = Url.query('env');
        var host;

        if (!env || env == 'null') {
            env = 'pro';
        }
        return this.originMap[env] || this.originMap['pro'];
    },
    /**
     * 活动信息
     */
     getInfo: function() {
        return this.getOrigin() + '/h5/hits/info';
        //return 'http://www.mocky.io/v2/5873006e0f00003e21c6acca';
    },
    /**
     * 榜单列表
     */
     getList: function() {
        return this.getOrigin() + '/h5/hits/optionList';
        //return 'http://www.mocky.io/v2/5873006e0f00003e21c6acca';
    },
    /**
     * 分享接口
     */
    postShare: function() {
        return this.getOrigin() + '/h5/hits/share';
        //return 'http://www.mocky.io/v2/586e03ee1300009302e81746';
    },
    /**
     * 送心接口
     */
    postLike: function() {
        return this.getOrigin() + '/h5/hits/hit';
        //return 'http://www.mocky.io/v2/586e03ee1300009302e81746';
    },
    /**
     * 详情
     */
    getDesc: function() {
        return this.getOrigin() + '/h5/hits/desc';
        //return 'http://www.mocky.io/v2/586e03ee1300009302e81746';
    },
    /**
     * 搜索
     */
    getSearch: function() {
        return this.getOrigin() + '/h5/hits/search';
        //return 'http://www.mocky.io/v2/586e03ee1300009302e81746';
    }
    
}
