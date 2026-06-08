let users = JSON.parse(localStorage.getItem('users')) || [];
export const signUpHandar = (nameVal, numberVal, mailVal, passwordVal)=>{
    users.push({nameVal, numberVal, mailVal, passwordVal});
    localStorage.setItem('users', JSON.stringify(users))
    alert("Signup successful. Please login.");



}
export const loginHandar = (nameVal, passwordVal)=>{
    const user = users.filter(user => user.nameVal === nameVal && user.passwordVal === passwordVal);
    if (user){
        alert("login sugsesful");
    }else{
        alert("failed")
    }
}