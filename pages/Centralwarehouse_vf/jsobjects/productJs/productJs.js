export default {
	myVar1: [],
	myVar2: {},
	myFun1: (productId) => {
		//write code here
		storeValue('pId', productId)
		productDetailById_DB.run()
		showModal('modal_Edit')
	},
	myFun2:  (productId) => {
		storeValue('pId', productId)
		deleteProduct.run()
		showModal('modal_Delete')
	}
}