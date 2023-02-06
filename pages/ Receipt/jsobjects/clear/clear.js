export default {
	myVar1: [],
	myVar2: {},
	removeOrders: async () => {
		await storeValue('orders',null)
		await navigateTo('Products', {}, 'SAME_WINDOW')
		getOrders.run()
		totalOrder.run()
	},
	myFun2: async () => {
		//use async-await or promises
	}
}