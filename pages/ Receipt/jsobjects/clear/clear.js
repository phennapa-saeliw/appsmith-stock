export default {
	myVar1: [],
	myVar2: {},
	removeOrders: () => {
		storeValue("orders",undefined)
		getOrders.run()
		totalOrder.run()
	},
	myFun2: async () => {
		//use async-await or promises
	}
}