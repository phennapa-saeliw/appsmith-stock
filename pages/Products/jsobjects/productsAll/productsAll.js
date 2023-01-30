export default {
	myVar1: [],
	myVar2: {},
	myFun1: (productId) => {
		console.log('productId = ' + productId)
		storeValue('pId', productId)
		productDetailById_DB.run()
		showModal('modal_Edit')
	},
	myFun2: async () => {
	
	},
	showProduct: (productId) => {
		//console.log('productId = ' +productId)
		storeValue('pId', productId)
		if(appsmith.store.pId !== undefined){
			productDetailById_DB.run()
			showModal("modalProducts")
		}
	},
	addProduct: (amount,price) => {
		let orders = {};
		const x = new Date();
		orders["date"] = x.toLocaleDateString();
		orders["time"] = x.toLocaleTimeString();
		orders["amount"] = amount;
		orders["price"] = price;
		orders["product_id"] = appsmith.store.pId
		if(appsmith.store.orders === undefined){
			orders["totalPrice"] = 0
			insertOrders.run((res, orders)=>{
				storeValue("order_id", res[0].order_id)
				orders["totalPrice"] += parseInt(orders["amount"]) * parseFloat(orders["price"])
				insertOrderProduct.run(
					() => {
						showAlert('เพิ่มสำเร็จ')
						closeModal('modalProducts');
					}
				)
			}, ()=>{})
			storeValue("orders", orders)
		}else{
			orders["totalPrice"] = parseInt(orders["amount"]) * parseFloat(orders["price"])
			storeValue("orders", orders)
			getOrderProduct.run();
			let op = getOrderProduct.data
			if(op !== undefined){
				if(op.length > 0){
					updateOrderProduct.run(
						() => {
							showAlert('update สำเร็จ')
							closeModal('modalProducts');
							getOrders.run()
						}
					),UpdateStock.run(() => {
						querySearch.run()
					})
				}else{
					insertOrderProduct.run(
						() => {
							showAlert('เพิ่มสำเร็จ')
							closeModal('modalProducts');
							getOrders.run()
						}
					),UpdateStock.run(() => {
						querySearch.run()
					})
				}
			}
			
		}
	}
}