import axios from 'axios'

console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV === 'development') {
	var login = 
} else {
	var login = (userInfo) => {
	   return axios.post('/logon', userInfo);
    }

    var getGoodsList = () => {
	   return axios('/src/mockData/goods.json')
    }
}


export {
	login,
	getGoodsList
}
