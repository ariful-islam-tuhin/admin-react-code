import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Container, Form, Row, } from "react-bootstrap";
import { FaFacebookSquare, FaGoogle, FaTwitter, FaYahoo } from 'react-icons/fa';
import './Login.css'
import useAuth from "../../Hooks/useAuth";
import { TextField, LinearProgress, Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Login = () => {
    // user er email update by use state 
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    // for redirect
    const location = useLocation();
    const history = useHistory();

    // when type on input field 
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log( value);
        // console.log( loginData);
    };
    //when submit with email.password form 
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    // google button login 
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
      };

    return (
        <div>
            <div className="login-style">
                <Container className="py-4"
                    >
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={12}>
                                <>
                                    <Form onSubmit={handleLoginSubmit}
                                        className=" form-class mx-auto pt-4 pb-4 w-75"

                                    >
                                        <h2 className="text-center fw-bold">Sign In</h2>
                                        <TextField id="standard-basic"
                                            style={{ paddingLeft: '60px' }}
                                            sx={{ width: 1, m: 1 }}
                                            label="Your Email"
                                            name='email'
                                            type='email'
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        <br />
                                        <TextField id="standard-basic"
                                            style={{ paddingLeft: '60px' }}
                                            sx={{ width: 1, m: 1 }}
                                            label="your password"
                                            type="password"
                                            name='password'
                                            onBlur={handleOnBlur}
                                            variant="standard" />


                                        {/* <span>{logInError}</span> */}
                                        <div className="d-grid gap-2 my-4 login-input">
                                            <Button
                                                variant="danger"
                                                type="submit"
                                                className="submit-forms"
                                            >
                                                Sign In
                                            </Button>
                                        </div>
                                        <p className="text-center">
                                            New User?
                                            <Link
                                                to="/register"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                &nbsp;Please Sign Up
                                            </Link>
                                        </p>

                                    </Form>
                                    <br />
                                    <div className="google-btn">
                                        Or...SignIn with google <br />
                                        <button
                                            onClick={handleGoogleSignIn}
                                            className=" m-3 p-1 rounded  pe-4 bg-dark"
                                            style={{ width: '200px' }}
                                        >
                                            <span> <FaGoogle style={{ color: '#D6102C', fontSize: '27px', borderRight: '2px solid green' }} /> </span>
                                            <span style={{ color: '#1767E2', fontSize: '21px' }}>
                                                &nbsp;&nbsp;&nbsp;&nbsp; Sign In</span>
                                         
                                        </button>
                                    </div>
                                    {isLoading && <LinearProgress color="success" />}
                                    {user?.email && <Alert severity="success">Successful login</Alert>}
                                    {authError && <Alert severity="warning">{authError}</Alert>}

                                    

                                </>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Login;