import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const LoginContent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    return(
        <div className="login-card">
            <div className="login-input">
                <PermIdentityIcon />
                <TextField label="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    sx={{width: "100%"}}
                />
            </div>
            <div className="login-input">
                <VpnKeyIcon /> 
                <TextField label="Password" type="password"
                    onChange={e => setPassword(e.target.value)}
                    sx={{width: "100%"}}
                />
            </div>
            <Button variant="outlined">Login</Button>
        </div>
    );
};

export default LoginContent;
