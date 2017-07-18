import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'
import AlbumActionConstants from '../constants/AlbumActionConstants'

const CHANGE_EVENT = 'change'

class AlbumStore extends EventEmitter {
  constructor () {
    super()
    this.data = {
      loading: false,
      currentAuthor: false,
      authors: [],
      currentAlbum: false,
      albums: []
    }

    this.handleActions = this.handleActions.bind(this)
    this.emitChange = this.emitChange.bind(this)
    this.addChangeListener = this.addChangeListener.bind(this)
    this.removeChangeListener = this.removeChangeListener.bind(this)
    this.getData = this.getData.bind(this)

    this._token = dispatcher.register(this.handleActions)
  }

  handleActions (action) {
    switch (action.actionType) {
      case AlbumActionConstants.LOADING:
        this.data.loading = true
        this.emitChange()
        break
      case AlbumActionConstants.LOADED:
        this.data.loading = false
        this.emitChange()
        break
      case AlbumActionConstants.AUTHORS:
        this.data.authors = action.value
        this.emitChange()
        break
      case AlbumActionConstants.CURRENT_AUTHOR:
        this.data.currentAuthor = action.value
        this.emitChange()
        break
      case AlbumActionConstants.ALBUMS:
        this.data.albums = action.value
        this.emitChange()
        break
      case AlbumActionConstants.CURRENT_ALBUM:
        this.data.currentAlbum = action.value
        this.emitChange()
        break
    }
  }

  emitChange () {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getData () {
    return this.data
  }
}

export default new AlbumStore()
