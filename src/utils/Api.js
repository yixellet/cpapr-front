class Api {
  constructor(baseUrl, errorMessages) {
    this.baseUrl = baseUrl;
    this.errorMessages = errorMessages;
    this.parseResponse = this.parseResponse.bind(this);
  }

  parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status));
  }

  signin(username, password) {
    return fetch(`${this.baseUrl}/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise));
      })
  }

  getNews(pageSize, currentPage) {
    return fetch(`${this.baseUrl}/news/?count=${pageSize}&page=${currentPage}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(this.parseResponse)
  }

  getNewItem(id) {
    return fetch(`${this.baseUrl}/news/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  createNewItem(data) {
    return fetch(`${this.baseUrl}/news/`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body:  data
      
    })
      .then((res) => this.parseResponse(res))
  }

  editNewItem(id, data) {
    return fetch(`${this.baseUrl}/news/${id}/`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body:  data
      
    })
    .then((res) => this.parseResponse(res))
  }

  deleteNewItem(id) {
    return fetch(`${this.baseUrl}/news/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': this.contentType,
        authorization: `Bearer ${localStorage.getItem('access')}`,
      },
    })
  }

  getDocs() {
    return fetch(`${this.baseUrl}/documents/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(this.parseResponse)
  }

  deleteImage(id) {
    const formData = new FormData();
    formData.append("image", "")
    return fetch(`${this.baseUrl}/news/${id}/`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: formData
    })
    .then((res) => this.parseResponse(res))
  }

  addImage(id, data) {
    return fetch(`${this.baseUrl}/news/${id}/`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: data
    })
    .then((res) => this.parseResponse(res))
  }

  getStructure() {
    return fetch(`${this.baseUrl}/structure/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(this.parseResponse)
  }
}

export default Api;
