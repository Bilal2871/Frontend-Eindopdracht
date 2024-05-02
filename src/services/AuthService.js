import axios from 'axios';

const API_URL = 'https://frontend-educational-backend.herokuapp.com/api/auth/';

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + 'signin', {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username, email, password, role) {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password,
            role
        });
    }

    getToken() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user && user.accessToken ? user.accessToken : null;
    }

    isLoggedIn() {
        return localStorage.getItem('user') !== null;
    }

    async getFavorites() {
        const response = await axios.get('/api/favorites', {
            headers: { 'Authorization': `Bearer ${this.getToken()}` }
        });
        return response.data;
    }

    async updateFavorites(favorites) {
        const response = await axios.post('/api/favorites', favorites, {
            headers: { 'Authorization': `Bearer ${this.getToken()}` }
        });
        return response.data;
    }
}

export default new AuthService();