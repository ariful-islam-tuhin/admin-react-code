import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useAuth from "../../Hooks/useAuth";
import { Col, Container, Form, Row, } from "react-bootstrap";

import { TextField, LinearProgress, Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';


const Register = () => {
    // user er email update by use state 
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError } = useAuth();

    const history = useHistory();

    // when type on input field 
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log( value);
        console.log( newLoginData);
    };
    //when submit form 
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert = 'your password did not match'
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        // e.preventDefault();
    };
    return (
        <div>
            <Container className="py-4"
                >
                <div className="box-shadows">
                    <Row>
                        <Col xs={12} md={12}>
                            <>
                                {!isLoading && <Form onSubmit={handleLoginSubmit}
                                    className=" form-class mx-auto pt-4 pb-4 w-75"
                                    style={{ backgroundColor: '#FFFFFF' }}
                                >
                                    <h2 className="text-center fw-bold">Register</h2>
                                    <TextField id="standard-basic"
                                        style={{ backgroundColor: '#FFFFFF', paddingLeft: '60px' }}
                                        sx={{ width: 1, m: 1 }}
                                        label="Your Name"
                                        name='name'
                                        type='text'
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <TextField id="standard-basic"
                                        style={{ backgroundColor: '#FFFFFF', paddingLeft: '60px' }}
                                        sx={{ width: 1, m: 1 }}
                                        label="Your Email"
                                        name='email'
                                        type='email'
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                
                                    <TextField id="standard-basic"
                                        style={{ backgroundColor: '#FFFFFF', paddingLeft: '60px' }}
                                        sx={{ width: 1, m: 1 }}
                                        label="your password"
                                        type="password"
                                        name='password'
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <TextField id="standard-basic"
                                        style={{ backgroundColor: '#FFFFFF', paddingLeft: '60px' }}
                                        sx={{ width: 1, m: 1 }}
                                        label="confirm password"
                                        type="password"
                                        name='password2'
                                        onBlur={handleOnBlur}
                                        variant="standard" />


                                    {/* <span>{logInError}</span> */}
                                    <div className="d-grid gap-2 my-4 login-input">
                                        <Button
                                            variant="danger"
                                            type="submit"
                                            className="submit-forms"
                                        >
                                           Register
                                        </Button>
                                    </div>
                                    <p className="text-center">
                                        Already Registered ?
                                        <Link
                                            to="/login"
                                            style={{
                                                textDecoration: "none",
                                            }}
                                        >
                                            &nbsp;Please LogIn
                                        </Link>
                                    </p>
                                </Form>}
                                {isLoading && <LinearProgress color="success" />}

                                {user?.email && <Alert severity="success">Successful Register</Alert>}

                                {authError && <Alert severity="warning">{authError}</Alert>}

                            </>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Register;