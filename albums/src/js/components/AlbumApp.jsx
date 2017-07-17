import React from 'react'
import Dispatcher from '../dispatcher/dispatcher'

import AlbumList from './AlbumList'

export default class AlbumApp extends React.Component {
  render () {
    const list = [
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
    return (
      <div className="album-application">
        <AlbumList list={list}/>
      </div>
    )
  }
}
