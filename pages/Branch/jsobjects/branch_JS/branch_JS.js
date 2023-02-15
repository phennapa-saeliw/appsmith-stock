export default {
	myVar1: [],
	myVar2: {},
	myFun1: (branchId) => {
		storeValue('bId',branchId);
		branch.run();
		closeModal('modal_Addbranch')
		
	},
	myFun2: async (branchId) => {
		storeValue('bId',branchId);
		del_Branch.run()
		closeModal('modal_Delbranch')
	}
}