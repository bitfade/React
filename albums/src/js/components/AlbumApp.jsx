import React from 'react'
import AlbumStore from '../stores/AlbumStore'
import AlbumActions from '../actions/AlbumActions'
import AlbumList from './AlbumList'

export default class AlbumApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: []
    }

    this._onChange = this._onChange.bind(this)
    this.loadAlbums = this.loadAlbums.bind(this)
  }

  componentDidMount () {
    console.log('mount')
    AlbumStore.addChangeListener(this._onChange)
  }

  componentWillUnmount () {
    console.log('umount')

    AlbumStore.removeChangeListener(this._onChange)
  }

  _onChange () {
    console.log(AlbumStore)
    this.setState({
      albums: AlbumStore.getAlbums()
    })
  }

  loadAlbums () {
    AlbumActions.loadAlbums()
  }

  render () {
    return (
      <div className="album-application">
        <AlbumList
          list={this.state.albums}
          loadAlbums={this.loadAlbums}
        />
      </div>
    )
  }
}
