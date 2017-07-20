import axios from 'axios'

console.log(process.env.NODE_ENV);

var login = () => {}
var getGoodsList = () => {}

if (process.env.NODE_ENV === 'development') {
    login = (userInfo) => {
//  	console.log(userInfo);
	   return axios.post('/login', userInfo);
    }

    getGoodsList = () => {
	   return axios('/src/mockData/goods.json')
    }
} else {
	login = (userInfo) => {
	   return axios.post('/login', userInfo);
    }

    getGoodsList = () => {
	   return axios('/src/mockData/goods.json')
    }
}

export {
	login,
	getGoodsList
}
