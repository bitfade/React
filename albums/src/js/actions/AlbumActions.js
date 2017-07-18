import dispatcher from '../dispatcher/dispatcher'
import AlbumActionConstants from '../constants/AlbumActionConstants'
import AlbumAPI from '../data/AlbumAPI'

export default class AlbumActions {
  static loading () {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.LOADING
    })
  }

  static loaded () {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.LOADED
    })
  }

  static error (error) {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.ERROR,
      error: error
    })
  }

  static currentAuthor (id) {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.CURRENT_AUTHOR,
      value: id
    })
    this.loadAlbums(id)
  }

  static loadAuthors () {
    this.loading()
    AlbumAPI.authors().then(authors => {
      this.loaded()
      dispatcher.dispatch({
        actionType: AlbumActionConstants.AUTHORS,
        value: authors
      })
      this.currentAuthor(authors[0].id)
    }).catch(error => {
      this.error(error)
    })
  }

  static currentAlbum (id) {
    dispatcher.dispatch({
      actionType: AlbumActionConstants.CURRENT_ALBUM,
      value: id
    })
    // this.loadAlbums(id)
  }

  static loadAlbums (id) {
    this.loading()
    AlbumAPI.albums(id).then(albums => {
      this.loaded()
      dispatcher.dispatch({
        actionType: AlbumActionConstants.ALBUMS,
        value: albums
      })
      this.currentAlbum(albums[0].id)
    }).catch(error => {
      this.error(error)
    })
  }
}
