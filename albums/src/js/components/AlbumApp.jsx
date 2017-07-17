import React from 'react'
import AlbumStore from '../stores/AlbumStore'
import AlbumList from './AlbumList'

export default class AlbumApp extends React.Component {
  constructor (props) {
    super(props)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount () {
    AlbumStore.addChangeListener(this._onChange)
  }

  componentWillUnmount () {
    AlbumStore.removeChangeListener(this._onChange)
  }

  _onChange () {
    console.log('change')
    this.setState({
      albums: AlbumStore.getAlbums()
    })
  }

  render () {
    return (
      <div className="album-application">
        <AlbumList list={this.state.albums}/>
      </div>
    )
  }
}
