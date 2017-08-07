import axios from 'axios'

console.log(process.env.NODE_ENV);

var login = () => {}
var getBannerList;
var getGoodsList;
if (process.env.NODE_ENV === 'development') {
    login = (userInfo) => {
	   return axios.post('/login', userInfo);
    }
    getBannerList = () => {
    	return axios.get('../static/bannerList.json')
    }
    getGoodsList = () => {
    	return axios.get('../static/indexList.json')
    }
} else {
	
}

export {
	login,
	getBannerList,
	getGoodsList
}
