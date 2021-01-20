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
    return fetch(`${this.baseUrl}/token`, {
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
      .then((data) => {
        console.log(data)
        localStorage.setItem('access', data.access);
      })
      .catch((err) => {
        throw err;
      });
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
    console.log(id)
    return fetch(`${this.baseUrl}/news/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if (res.status === 404) {
        window.location.replace('/404');
      }
      return res.json();
    })
  }

  createNewItem(title, text, image) {
    return fetch(`${this.baseUrl}/news/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(this.parseResponse)
  }

  deleteNewItem(id) {
    return fetch(`${this.baseUrl}/news/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': this.contentType,
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(this.parseResponse);
  }
}

export default Api;
