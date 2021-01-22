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
    return Promise.reject(new Error(this.errorMessages.SERVER_ERROR));
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
      .then((res) => {
        return res.json()
      })
  }

  editNewItem(data) {
    return fetch(`${this.baseUrl}/news/`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body:  data
      
    })
      .then((res) => {
        return res.json()
      })
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
}

export default Api;
