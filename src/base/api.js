

module.exports = {
    originMap:'http://www.wangyunchuan.top',
    
    /**
     * 登录
     */
     login: function() {
        return this.originMap + '/api/login';
    },
     /**
     * 注册
     */
     register: function() {
        return this.originMap + '/api/register';
    },
    /**
     * 文章列表
     */
     ArticalList: function() {
        return this.originMap + '/api/getAllartical';
    },
    /**
     * 文章详情
     */
     Articaldetail: function() {
        return this.originMap + '/api/articaldetail';
    }

    
}
