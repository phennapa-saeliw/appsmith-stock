export default {
	myVar1: [],
	myVar2: {},
	myFun1: (productId) => {
	 //console.log('productId = ' +productId)
		storeValue('pId', productId)
		productDetailById_DB.run()
		showModal('modal_Edit')
	},
	myFun2: (productId) => {
		//use async-await or promises
		storeValue('pId', productId)
		deleteProduct.run()
		showModal('modal_Delete')
	}
}