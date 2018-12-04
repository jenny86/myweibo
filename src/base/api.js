

module.exports = {
    originMap:'http://api.wangyunchuan.top',
    // originMap:'http://local.pengpengla.cn:3000',
    /**
     * 登录
     */
     login: function() {
        return this.originMap + 'api/login';
    },
     /**
     * 注册
     */
     register: function() {
        return this.originMap + '/register';
    },
    /**
     * 文章列表
     */
     ArticalList: function() {
        return this.originMap + '/m/ArticleInfo/article_List';
    },
    /**
     * 文章详情
     */
     Articaldetail: function() {
        return this.originMap + '/articaldetail';
    },
    /**
     * 我的文章列表
     */
    MyArtical: function() {
      return this.originMap + '/myArtical';
    },
    /**
     * 评论列表
     */
    commentList: function() {
      return this.originMap + '/getReplylist';
    },
    /**
     * 发布文章
     */
    pubArtical: function() {
      return this.originMap + '/pubArtical';
    }
    
}
