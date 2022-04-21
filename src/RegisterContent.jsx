import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';

const RegisterContent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    return(
        <div className="login-card">
            <div className="login-input">
                <PermIdentityIcon />
                <TextField label="First & Last Name"
                onChange={e => setName(e.target.value)}
                sx={{width: "100%"}}
                />
            </div>
            <div className="login-input">
                <EmailIcon />
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
            <div className="login-input">
                <VpnKeyIcon />
                <TextField label="Confirm Password" type="password"
                onChange={e => setPassword2(e.target.value)}
                sx={{width: "100%"}}
            />
            </div>
            <Button variant="outlined">Register</Button>
        </div>
    );
};

export default RegisterContent;