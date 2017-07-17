import dispatcher from '../dispatcher/dispatcher'
import AlbumActionConstants from '../constants/AlbumActionConstants'

export default class AlbumActions {
  static loadAuthors () {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.LOAD_AUTHORS
    })
  }
  static loadAlbums () {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.LOAD_ALBUMS
    })
  }
}
