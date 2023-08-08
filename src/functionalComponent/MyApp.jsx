        import Header from './Header';
        import { useState, useEffect } from "react";
        //import 'bootstrap/dist/css/bootstrap.min.css';
        import { Form, InputGroup, Row, Button } from 'react-bootstrap';
        import { MDBInput } from 'mdb-react-ui-kit';

        function MyApp() {
            const [title, setTitle] = useState("This is initial title");

            const [form, setForm] = useState({
                first_name: '',
                last_name: '',
            });
            useEffect(() => {
                setTimeout(() => {
                    setTitle('Title Updated')
                }, 2000)
            }, []);

            // const clickHandler = () => {
            //     setTitle("Title Updated by Button Click");
            // }

            const clickHandler = (title) => {
                setTitle(title);
            }
            const handleChange = (e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
            }
            return (
                <>
                    {/* <Form.Control type="name" name="first_name" value="" className="form-control" /> */}
                    <MDBInput label='Example label' id='form1' type='text' />
                    <form className="container mt-3 mb-3">
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" name="first_name" value="{form.first_name}" onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" name="last_name" value="{form.last_name}" onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                    </form>
                    {/* <Header title="Header Title from Parent" /> */}
                    <Header title={title} titleHandler={clickHandler} />
                    <h1>MyApp Dashboard</h1>
                    <button onClick={clickHandler}>Change Title</button>
                </>
            )
        }

        export default MyApp;