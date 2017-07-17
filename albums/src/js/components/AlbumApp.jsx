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
    this.loadAuthors = this.loadAuthors.bind(this)
    this.loadAlbums = this.loadAlbums.bind(this)
  }

  componentDidMount () {
    console.log('mount')
    AlbumStore.addChangeListener(this._onChange)
    AlbumActions.loadAuthors()
  }

  componentWillUnmount () {
    console.log('umount')
    AlbumStore.removeChangeListener(this._onChange)
  }

  _onChange () {
    this.setState(AlbumStore.getData())
  }

  loadAuthors () {
    AlbumActions.loadAuthors()
  }

  loadAlbums () {
    // AlbumActions.loadAlbums()
  }

  render () {
    console.log(this.state)
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
          change={this.loadAuthors}
        />
      </div>
    )
  }
}
