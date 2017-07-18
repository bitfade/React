import React from 'react'

export default class AlbumPhotos extends React.Component {
  render () {
    return (
      <div>
        {this.props.list.slice(0,9).map(v => <img key={v.id} src={v.src}/>)}
      </div>
    )
  }
}
