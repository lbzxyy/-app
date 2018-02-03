// 有了mutation去修改数据，那么我们怎么去映射state里面的这些数据呢？
// 通常我们会做一层getters的包装，也就要是说我们从getters中取数据到组件中
// 我们通常从getters中取我们state中的数据，取到我们组件中
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList
