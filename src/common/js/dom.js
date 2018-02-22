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
