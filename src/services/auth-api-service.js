import config from '../config'

const AuthApiService = {
    postLogin(value) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(value)
        })
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

}
export default AuthApiService
