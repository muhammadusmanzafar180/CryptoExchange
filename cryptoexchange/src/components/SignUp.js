export default function SignUp(props) {
    const [userName,setUserName] = useState(null);
    const [userPassword,setUserPassword] = useState(null);
    
    const onSignIn = (e) => {
        e.preventDefault();
        if (userName === null) {
            return;
        }else if (userPassword === null) {
            return;
        }else{
            const filteredArray = testArray.filter(item => item===userName);
            localStorage.setItem("user",userName);
            filteredArray.length > 0 ?  props.onSuccessSignIn(true) : props.onSuccessSignIn(false);
        }
    }

    const handleUserNameChange = (e) =>{
        setUserName(e.target.value);
    }
    const handleUserPasswordChange = (e) =>{
        setUserPassword(e.target.value);
    }
    return(
        <>
            <form onSubmit={onSignIn}>
                <input type="text" placeholder="Enter User Name ..."  onChange={handleUserNameChange}/>
                <input type="email" placeholder="Enter User Email ..."  onChange={handleUserNameChange}/>
                <input type="text" placeholder="Enter User Password ..." onChange={handleUserPasswordChange}/>
                <input type="text" placeholder="Enter User Home Address ..."  onChange={handleUserNameChange}/>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}