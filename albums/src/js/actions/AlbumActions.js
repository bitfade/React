import dispatcher from '../dispatcher/dispatcher'

export default class AlbumActions {
  static loadAlbums () {
    dispatcher.dispatch({
      actionType: 'load-albums'
    })
  }
}
