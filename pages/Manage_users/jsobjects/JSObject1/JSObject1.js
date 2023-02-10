export default {
	myVar1: [],
	myVar2: {},
	newPass: () => {
		if((newPassword.text) === (confirmPassword.text)){
			console.log(updatePassword.run()) ,showAlert(' เปลี่ยนพาสเวิร์ดสำเร็จ.' , 'success') , closeModal('modalEditPass') 
		}else{
			(console.log (showAlert(' กรุณากรอกพาสเวิร์ดให้ตรงกัน.', 'error')))
		} 

	},

}