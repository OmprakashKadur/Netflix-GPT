

export const checkValidation = (email, password) => {
const isEmailvalid= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)

if(!isEmailvalid) return "Email ID is not Valid"
if(!isPasswordValid) return "Password is Not Valid"
return null;
}

