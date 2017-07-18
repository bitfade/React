import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'
import AlbumActionConstants from '../constants/AlbumActionConstants'

const CHANGE_EVENT = 'change'

class AlbumStore extends EventEmitter {
  constructor () {
    super()
    this.data = {
      loading: false,
      authors: []
    }

    this.handleActions = this.handleActions.bind(this)
    this.emitChange = this.emitChange.bind(this)
    this.addChangeListener = this.addChangeListener.bind(this)
    this.removeChangeListener = this.removeChangeListener.bind(this)
    this.getData = this.getData.bind(this)

    this._token = dispatcher.register(this.handleActions)
  }

  handleActions (action) {
    console.log(action.actionType)
    switch (action.actionType) {
      case AlbumActionConstants.LOAD_AUTHORS:
        this.data.loading = true
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
