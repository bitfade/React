class AlbumAPI {
  constructor () {
    this.authors = this.authors.bind(this)
    this.url = this.url.bind(this)
    this.check = this.check.bind(this)
    this.fetch = this.fetch.bind(this)
    this.authors = this.authors.bind(this)
  }

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

  check (response) {
    return (response.ok) ? response : Promise.reject(new Error('Not Found'))
  }
}

export default new AlbumAPI()
