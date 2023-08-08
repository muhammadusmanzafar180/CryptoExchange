    import React, { useState } from "react";
    import { Form, Button } from "react-bootstrap";
    import Alert from "react-bootstrap/Alert";
    import Header from "./Header";
    import { useNavigate } from "react-router-dom"

    function Login(props) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [count, setCount] = useState(0);
        const [showAlert, setShowAlert] = useState(false);
        const [showErrorAlert, setShowErrorAlert] = useState('');
        const [isBlocked, setIsBlocked] = useState(false);
        const navigate = useNavigate();
        const showErrorMessageAlert = (message) => {
            setShowErrorAlert(message);
            setTimeout(() => {
                setShowErrorAlert('');
            }, 3000);
        };
        const showSuccessAlert = () => {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        };
        const submitHandler = (e) => {
            e.preventDefault();
            let tempCount = 0;
            if (count < 3) {
                let newArray = props.users.filter((obj) => {
                    return obj.email === email &&
                        obj.password === password;
                });
                console.log(newArray);
                if (newArray.length === 0) {
                    tempCount = count + 1;
                    setCount(tempCount)
                    console.log(tempCount);
                }
                else {
                    props.checkLogin({ isLoggedIn: true });
                    setCount(0);
                    showSuccessAlert(true);
                    setTimeout(()=> {
                        navigate('/crud');
                    },3000)
                }
            }
            //set this according to count
            if (tempCount == 3) {
                props.checkLogin({ isLoggedIn: false });
                setIsBlocked(true);
                showErrorMessageAlert('3 Incorrect Attempts. Your account has been blocked!!!');
                return;
            }
        }

        const clearInputs = () => {
            setEmail("");
            setPassword("");
        }
        return (
            <div className="container row">
                <Header isLoggedIn={props.isLoggedIn} />
                <div className="col-lg-6 mx-auto">
                    <p>Login Page</p>
                    {showAlert && (
                        <Alert
                            variant="success"
                            onClose={() => setShowAlert(false)}
                            dismissible
                        >
                            Login Successful
                        </Alert>
                    )}
                    {showErrorAlert && (
                        <Alert
                            variant="danger"
                            onClose={() => setShowAlert(false)}
                            dismissible
                        >
                            {showErrorAlert}
                        </Alert>
                    )}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-2" disabled={isBlocked}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }

    export default Login;
