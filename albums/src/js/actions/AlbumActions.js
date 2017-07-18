import dispatcher from '../dispatcher/dispatcher'
import AlbumActionConstants from '../constants/AlbumActionConstants'
import AlbumAPI from '../data/AlbumAPI'

export default class AlbumActions {
  static loadAuthors () {
    AlbumAPI.authors().then((response) => {
      console.log('action ok', response)
    }).catch((error) => {
      console.log('action ko', error)
    })
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
