import React from 'react';
import { View, AsyncStorage } from 'react-native';

export default class AuthController extends React.Component {
    constructor(props) {
        super(props);
    }

    static async checkLogin(username, password) {
        return new Promise((resolve, reject) => {
            const API_ENDPOINT = "https://jobsicle.mv/appEndpoint";
            let url = API_ENDPOINT + `/user/generate_auth_cookie/?username=${username}&password=${password}`;
            return fetch(url, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    static async createUser(data) {
        return new Promise((resolve, reject) => {
            const API_ENDPOINT = "https://jobsicle.mv/appEndpoint";
            var rand = Math.random().toString(36).substring(7);

            return fetch(API_ENDPOINT + '/get_nonce/?controller=user&method=register&rand=' + rand, {
                method: 'GET'
            })
                .then((response) => {
                    return response.json(response);
                })
                .then((nonceJSON) => {
                    regUrl = API_ENDPOINT + `/user/register/?username=${data.username}&email=${data.email}&nonce=${nonceJSON.nonce}&display_name=${data.username}&user_pass=${data.password}&role=${data.role}&rand=${rand}`;
                    return fetch(regUrl, {
                        method: 'GET'
                    })
                })
                .then((response) => {
                    resolve(response.json(response));
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    static async saveToStorage(userData) {
        if (userData) {
            await AsyncStorage.setItem('user', JSON.stringify({
                isLoggedIn: true,
                cookie: userData.cookie,
                id: userData.user_id,
            }));
            console.log("Added userdata to storage (user logged in)");
            return true;
        }
        return false;
    }

    static async getUserData() {
        try {
            let value = await AsyncStorage.getItem('user');
            return value;
        }
        catch (e) {
            console.warn('[getUserData()] caught error: ', e);
        }
        return false;
    }

    static async clearUserData() {
        await AsyncStorage.removeItem('user');
        return true;
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}