/* eslint no-console: 0 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AlbumActions from './actions/AlbumActions'

import 'plugins/bootstrap'
import 'main.scss'

import AlbumApp from 'components/AlbumApp'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <AlbumApp/>,
  document.getElementById('app')
)

AlbumActions.loadAlbums()
