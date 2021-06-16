export default InputControls ={
    email: function emailControl(email){
        console.log("EMAIL CONTROL WORKING");
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    },
    password: function passwordControl(password){
        console.log("PASSWORD CONTROL");
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/
        return re.test(password);
    }
}