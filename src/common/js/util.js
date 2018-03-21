function getRandomInit(min,max) {
  //random的数字落在min跟max之间
  return Math.floor(Math.random()*(max-min+1)+min);

}


export function shuffle(arr){
  //复制副本
  let _ar=arr.slice();
  for(let i=0;i<_ar.length;i++){
    let j=getRandomInit(0,i);
    let t=_ar[i];
    _ar[i]=_ar[j];
    _ar[j]=t;
  }
  return _ar;
}
