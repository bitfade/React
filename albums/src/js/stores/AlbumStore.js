import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'

const CHANGE_EVENT = 'change'

class AlbumStore extends EventEmitter {
  constructor () {
    super()
    this._albums = [
      {
        id: 1,
        userId: 1,
        title: 'Album 1'
      },
      {
        id: 2,
        userId: 1,
        title: 'Album 2'
      },
      {
        id: 3,
        userId: 1,
        title: 'Album 3'
      },
      {
        id: 4,
        userId: 1,
        title: 'Album 4'
      }
    ]
    this.handleActions = this.handleActions.bind(this)
    this.emitChange = this.emitChange.bind(this)
    this.addChangeListener = this.addChangeListener.bind(this)
    this.removeChangeListener = this.removeChangeListener.bind(this)
    this.getAlbums = this.getAlbums.bind(this)

    this._token = dispatcher.register(this.handleActions)
  }

  handleActions (action) {
    console.log(action)
    this.emitChange()
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

  getAlbums () {
    return this._albumns
  }
}

export default new AlbumStore()
