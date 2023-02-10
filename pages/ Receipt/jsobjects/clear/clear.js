export default {
	myVar1: [],
	myVar2: {},
	removeOrders: async () => {
		await update_status_order.run()
		await storeValue('orders',null)
		await navigateTo('Products', {}, 'SAME_WINDOW')
		getOrders.run()
		totalOrder.run()
	},
	myFun2: async () => {
		//use async-await or promises
	}
}