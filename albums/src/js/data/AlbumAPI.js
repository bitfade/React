class AlbumAPI {
  constructor () {
    this.authors = this.authors.bind(this)
    this.url = this.url.bind(this)
    this.check = this.check.bind(this)
    this.fetch = this.fetch.bind(this)
    this.authors = this.authors.bind(this)
  }

  url (endpoint) {
    return 'https://jsonplaceholder.typicode.com/' + endpoint
  }

  fetch (endpoint) {
    return fetch(this.url(endpoint)).then(this.check).then(response => response.json())
  }

  authors () {
    return this.fetch('users').then((response) => {
      console.log('parse', response)
      // return response.json().then()
      return 'ok'
    })
  }

  check (response) {
    return (response.ok) ? response : Promise.reject(new Error('Not Found'))
  }
}

export default new AlbumAPI()
