let axios = require('axios')

///
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true
req = axios({
    method: 'post',
    url: 'http://urz.open.ru:8889/api/auth',
    data: {
        login: 'Login',
        password: '123'
    },

})
.then(function (response) {
    console.dir(response);
})
.catch(function (error) {
    console.log(error);
})

