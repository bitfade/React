import React from 'react'
import Spinner from 'react-spinner-material'
import AlbumStore from '../stores/AlbumStore'
import AlbumActions from '../actions/AlbumActions'
import AlbumList from './AlbumList'

export default class AlbumApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = AlbumStore.getData()

    this._onChange = this._onChange.bind(this)
    this.currentAuthor = this.currentAuthor.bind(this)
    this.loadAuthors = this.loadAuthors.bind(this)
    this.loadAlbums = this.loadAlbums.bind(this)
  }

  componentDidMount () {
    AlbumStore.addChangeListener(this._onChange)
    AlbumActions.loadAuthors()
  }

  componentWillUnmount () {
    AlbumStore.removeChangeListener(this._onChange)
  }

  _onChange () {
    this.setState(AlbumStore.getData())
  }

  loadAuthors () {
    AlbumActions.loadAuthors()
  }

  loadAlbums () {
    AlbumActions.loadAlbums(this.state.currentAuthor)
  }

  currentAuthor (id) {
    AlbumActions.currentAuthor(id)
  }

  currentAlbum (id) {
    AlbumActions.currentAlbum(id)
  }

  render () {
    return (
      <div className="album-application">
        <div className="text-center">
          <Spinner width={50}
            height={70}
            spinnerColor={'#333'}
            spinnerWidth={5}
            show={this.state.loading} />
        </div>
        <AlbumList
          list={this.state.authors}
          selected={this.state.currentAuthor}
          change={this.currentAuthor}
          reload={this.loadAuthors}
        />
        <AlbumList
          list={this.state.albums}
          selected={this.state.currentAlbum}
          change={this.currentAlbum}
          reload={this.loadAlbums}
        />
      </div>
    )
  }
}
