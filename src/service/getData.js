import axios from 'axios'

console.log(process.env.NODE_ENV);

var login = () => {}
var getGoodsList = () => {}

if (process.env.NODE_ENV === 'development') {
    login = (userInfo) => {
	   return axios.post('/logon', userInfo);
    }

    getGoodsList = () => {
	   return axios('/src/mockData/goods.json')
    }
} else {
	login = (userInfo) => {
	   return axios.post('/logon', userInfo);
    }

    getGoodsList = () => {
	   return axios('/src/mockData/goods.json')
    }
}

export {
	login,
	getGoodsList
}
