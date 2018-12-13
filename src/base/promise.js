import axios from 'axios';
import api from "./api";
import Alert from '../base/mask'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
export default
({
   method="POST",
   url,
   data,
   succeed=()=>{},
   fail=()=>{}

 })=> {
  axios({
    method,
    url,
    data,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  })
    .then((res)=>{

      if (res.data.respcode == '000'){
        succeed(res.data.data)
      } else{
        let alert = new Alert({
          content:res.data.msg
        }).create()
      }
    })
    .catch((err)=>{
      if (typeof fail =='function') {
        fail()
      } else {
        let alert = new Alert({
              content:'你家没网了'
            }).create()
      };
    })
}
