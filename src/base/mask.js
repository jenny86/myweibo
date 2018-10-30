define(function(require , exports , module) {
  var temp =
    '<div class="widget-dialog">' +
      '<div class="widget-dialog-content">{{content}}</div>' +
      '<div class="widget-dialog-footer">' +
        '<button type="button" class="close" id="close">取消</button>' +
        '<button type="button" class="confirm" id="confirm">确定</button>' +
      '</div>' +
    '</div>';
  var  mask= function(config) {
    var divDome = this.divDome = document.createElement("div");
    this.config = config || {};
    this.temp = config.temp || temp;
    this.content = config.content || ''
  }
  mask.prototype = {
    create:function () {
      var doc = document;
      var body = doc.getElementsByTagName("body")[0]; //优化dom

      //实现mask
      var div = this.divDome;
      $(div).css({
        'width':'100%',
        'height':'100%',
        'position': 'fixed',
        'left':'0',
        'top':'0',
        'right':'0',
        'bottom':'0',
        'background':'rgba(0,0,0,0.5)',
        'z-index':'999',
        'display':'flex',
        'justify-content':'center',
        'align-items':'center'
      });

      body.appendChild(div);
      let content = this.content;
      let tempDom = this.temp.replace('{{content}}',content);
      $(div).html(tempDom);
      if (this.config.type != 'confirm'){
        $('#close').css('display','none')
      }
      this.bindEvent()
    },
    bindEvent:function(){
      let self = this;
      let type  = this.config.type || 'alert';
      let callBack = this.config.callBack || {};
      $('#close').on('click',function () {
        self.destory()
      })
      $('#confirm').on('click',function () {
        if (type == 'confirm' && typeof callBack == 'function'){
          self.config.callBack();
          self.destory();
        } else {
          self.destory();
        }
      })
    },
    destory:function () {
      this.divDome.remove()
    }
  }
  module.exports = mask;
})
