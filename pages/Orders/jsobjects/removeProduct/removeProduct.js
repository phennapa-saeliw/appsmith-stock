export default {
	myVar1: [],
	myVar2: {},
	removeOrderProduct: (productId) => {
		//console.log('productId = ' +productId)
		storeValue('product_id', productId)
		if(appsmith.store.product_id !== undefined){
			deleteOrdersProduct.run(
				() => {
					getOrders.run()
					totalOrder.run()
					
				}
			)
		}
		},

	myFun2: async () => {
		//use async-await or promises
	},
		removeOrders: () => {
		storeValue('orders', null);
		//getOrders.run()
		//totalOrder.run()
			
	}
}