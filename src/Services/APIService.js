const axios = require('axios');

const API_KEY = 'bab7f707b72ea0b1154b7d786a9f05e4';

const invoke = (options) => {
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: options.method,
            headers: {
                'user-key': API_KEY
            }
        }).then((response) => {
            resolve({
                data: response.data,
                statusCode: response.status,
            });
        }).catch((err) => {
            reject({
                statusCode: err.response.status,
                errorMessage: err.response.data.message
            });
        });
    });
};

module.exports = {
    invoke
}
