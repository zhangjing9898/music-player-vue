export const singer=state=>state.singer

export const playing=state=>state.playing;

export const fullScreen=state=>state.fullScreen;

export const playlist=state=>state.playlist;

export const sequenceList=state=>state.sequenceList;

export const mode=state=>state.mode;

export const currentIndex=state=>state.currentIndex;

export const currentSong=(state)=>{
  return state.playlist[state.currentIndex]||{}
}

export const currentSongPlay=(state)=>{
  let mid=state.playlist[state.currentIndex].mid || {}
  return "http://ws.stream.qqmusic.qq.com/C100"+mid+".m4a?fromtag=46" || {}
}

export const topList=state=>state.topList;
