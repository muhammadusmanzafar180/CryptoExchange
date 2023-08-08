        import React, { useState } from "react";
        import { Form, Button } from "react-bootstrap";
        import Alert from "react-bootstrap/Alert";

        function Signup(props) {
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [name, setName] = useState("");
            const [address, setAddress] = useState("");
            const [showAlert, setShowAlert] = useState(false);
            const [showErrorAlert, setShowErrorAlert] = useState('');

            const [selectedFile, setSelectedFile] = useState();
            const [isFilePicked, setIsFilePicked] = useState(false);

            const changeHandler = (event) => {
                setSelectedFile(event.target.value);
                setIsFilePicked(true);
            };

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
                props.addNewUser({ name: name, password: password, email: email, address: address, selectedFile: selectedFile });
                window.scrollTo(0, 0);
                showSuccessAlert(true);
                clearInputs()
            }
            const clearInputs = () => {
                setName("");
                setEmail("");
                setPassword("");
                setAddress("");
                setSelectedFile("");
                setIsFilePicked(false);
            }
            return (
                <div className="container row">
                    <div className="col-lg-6 mx-auto">
                        <p>Signup Page</p>
                        {showAlert && (
                            <Alert
                                variant="success"
                                onClose={() => setShowAlert(false)}
                                dismissible
                            >
                                New User Added
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
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    placeholder="Enter Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group controlId="uploadFile" className="mb-3">
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control
                                    type="file"
                                    size="sm"
                                    accept="application/pdf"
                                    onChange={(e) => changeHandler(e)}
                                    required={true}
                                />
                            </Form.Group>
                            {/* <Form.Group as={Row}>
                                <Form.File
                                    type="file"
                                    className="custom-file-label"
                                    id="inputGroupFile01"
                                    label={selectedFile}
                                    onChange={(e) => setSelectedFile(e.target.files[0].name)}
                                    custom
                                />
                            </Form.Group> */}
                            <Button type="submit" className="mt-2">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            );
        }

        export default Signup;
