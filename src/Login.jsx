import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";
const LoginComponent = () => {
    const [loginMode, setLoginMode] = useState(true)
    const [mode, setMode] = useState(1)
    return (
			<div className="login-box-container">
        <div className="LoginBox">
            <div>
                <button className={mode === 1 ? "btn login-button clicked" : "btn login-button"} onClick={e => {setLoginMode(true); setMode(1)}}>Login</button>
                <button className={mode === 2 ? "btn register-button clicked" : "btn register-button"} onClick={e => {setLoginMode(false); setMode(2)}}>Register</button>
            </div>
            {loginMode ? <LoginContent/> : <RegisterContent/>}
            {/* <Card>
                <CardContent>
                <div>
                    <Button className="login-button" variant="text" onClick={e => setLoginMode(true)}>Login</Button>
                    <Button className="register-button" variant="text" onClick={e => setLoginMode(false)}>Register</Button>
                </div>
                {loginMode ? <LoginContent/> : <RegisterContent/>}
                </CardContent>
            </Card> */}
            {/* <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                Please check your username and password!
                </Alert>
            </Snackbar> */}
        </div>
			</div>
    );
};

export default LoginComponent;