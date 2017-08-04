//这里定义一些工具函数

//保存到localStorage
export const setStore = (key, value) => {
	if(!key) return;
	if(typeof value !== String) {
		value = JSON.stringify(value);
	}
	window.localStorage.setItem(key, value);
}

//获取localStorage中的值
export const getStore = (key) => {
	if(!key) return 
	return window.localStorage.getItem(key);
}
