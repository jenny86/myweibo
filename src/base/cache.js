export default{
  /**
   * 获取缓存数据
   */
  getCache(key){
    var ret = localStorage.getItem(key);
    if (ret) {
      var opt = this.deserialize(ret);
      var isExpire = this.isExpire(opt.expires);
      // 已经失效
      if (isExpire) {
        ret = null;
        this.removeItem(key);
      } else {
        return opt.expires > 0 ? opt.data : opt;
      }
    } else {
      return null;
    }

    // var ret = localStorage.getItem(key);
    // return ret;
  },
  setCache(key,value,expires){
    let newValue,curStamp = +new Date;
    if (expires > 0) {
      newValue =  {
        data: value,
        expires: curStamp + expires
      };
    } else {
      newValue = value;
    }
    newValue = this.serialize(newValue);
    localStorage.setItem(key, newValue);
  },
  /**
   * 判断key是否失效
   * @return {Boolean}  true 无效； false未失效
   */
  isExpire: function(time) {
    if (time > 0) {
      return new Date().getTime() > Number(time);
    } else {
      return false;
    }
  },
  /**
   * 反序列化工具方法
   * @name deserialize
   */
  deserialize: function(value) {
    if (typeof value != 'string') {
      return undefined;
    }
    try {
      return JSON.parse(value)
    } catch (e) {
      return value || undefined;
    }
  },
  /**
   * 序列化工具方法
   * @name serialize
   */
  serialize: function(value) {
    return JSON.stringify(value)
  }

}
