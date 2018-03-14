//check 是否有这个class
export function hasClass(el,className) {
  //new一个正则表达式pattern 再进行检测
  let reg=new RegExp('(^|\\s)'+className+'(\\s|$)')
  return reg.test(el.className)
}

//增加class
export function addClass(el,className) {
  if(hasClass(el,className)){
    return
  }

  let newClass=el.className.split(' ')
  newClass.push(className);
  el.className=newClass.join(' ')
}

export function getData(el,name,val) {
  const prefix='data-';
  if(val){
    return el.setAttribute(prefix+name,val)
  }
  return el.getAttribute(prefix+name);
}

//测试样本
let elementStyle=document.createElement('div').style;

//供应商  立即执行函数  通常执行1次
//在一个表达式后面加上括号，表示该表达式立即执行
let vendor=(()=>{
  let transformNames={
    webkit:'webkitTransform',
    Moz:'MozTransform',
    O:'OTransform',
    ms:'msTransform',
    standard:'transform'
  }

  for(let key in transformNames){
    if(elementStyle[transformNames[key]]!==undefined){
      return key
    }
  }
  return false
})()

export function prefixStyle(style) {
  console.log("style")
  if(vendor===false){
    console.log("venderFalse")
    return false
  }

  if(vendor==='standard'){
    return style
  }

  return vendor+style.charAt(0).toUpperCase()+style.substr(1)
}
