class AlbumAPI {
  url (...opts) {
    return 'https://jsonplaceholder.typicode.com/' + opts.join('/')
  }

  fetch (...opts) {
    return fetch(this.url(...opts)).then(this.check).then(response => response.json())
  }

  authors () {
    return this.fetch('users').then(
      response => response.map(
        v => ({
          id: v.id,
          title: v.name
        })
      )
    )
  }

  albums (id) {
    return this.fetch('users', id, 'albums').then(
      response => response.map(
        v => ({
          id: v.id,
          title: v.title
        })
      )
    )
  }

  photos (id) {
    return this.fetch('albums', id, 'photos').then(
      response => response.map(
        v => ({
          id: v.id,
          src: v.thumbnailUrl
        })
      )
    )
  }

  check (response) {
    return (response.ok) ? response : Promise.reject(new Error('Not Found'))
  }
}

export default new AlbumAPI()
