export default InputControls ={
    email: function emailControl(email){
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    },
    password: function passwordControl(password){
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/
        return re.test(password);
    }
}