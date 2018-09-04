

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
    }
    
}
