import config from '../config'
import TokenService from './token-api-service'

const UserService = {
    updateUser(user) {
        return fetch(`${config.API_ENDPOINT}/profile/userId`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(user)
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        });
    },
    getUser(userId) {
        return fetch(`${config.API_ENDPOINT}/profile`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        })
    },
    postUser(user) {
        console.log(user)
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(console.log(user))
    }
};

export default UserService