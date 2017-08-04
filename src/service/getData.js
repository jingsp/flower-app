import axios from 'axios'

console.log(process.env.NODE_ENV);

var login = () => {}
var getBannerList;
if (process.env.NODE_ENV === 'development') {
    login = (userInfo) => {
	   return axios.post('/login', userInfo);
    }
    getBannerList = () => {
    	return axios.get('../static/bannerList.json')
    }
} else {
	
}

export {
	login,
	getBannerList
}
