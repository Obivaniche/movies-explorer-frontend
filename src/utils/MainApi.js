export class MainApi {
    constructor({adress, apiURL}) {
        this._adress = adress;
        this._apiURL = apiURL
    }

    getUserData() {
        return fetch(`${this._adress}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(this._checkResponse)
    }

    setUserData(data) {
        return fetch(`${this._adress}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
        .then(this._checkResponse)
    }

    getSavedMovies() {
        return fetch(`${this._adress}/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(this._checkResponse)
    }

    // добавление в избранное
    createMovie(data) {
        return fetch(`${this._adress}/movies`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `${this._apiURL}${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `${this._apiURL}${data.image.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        })
        .then(res => res.json())
    }

    // удаление из избранного
    deleteMovie(id) {
        return fetch(`${this._adress}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(this._checkResponse)
    }

    // метод проверки ответа от сервера
    _checkResponse(response) {
        // проверка ответа
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }
}

const mainApi = new MainApi({
    adress: 'https://api.obivaniche-movies.nomoredomains.club', // мой бэк
    apiURL: 'https://api.nomoreparties.co' // бэк с фильмами
})

export default mainApi;