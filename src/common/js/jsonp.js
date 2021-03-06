import originJsonp from 'jsonp'

export default function jsonp(url,data,option) {
  url+=(url.indexOf('?')<0?'?':'&')+param(data);

  return new Promise((resolve,reject)=>{
    originJsonp(url,option,(err,data)=>{
      if(!err){
        resolve(data)
      }else{
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url='';
  for(var k in data){
    let value=data[k]!==undefined?data[k]:'';
    //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
    url+='&'+k+"="+encodeURIComponent(value);
  }
  return url?url.substring(1):''
}
