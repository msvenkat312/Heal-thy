import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";

const LoginComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="avatar">
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar alt="Remy Sharp" src="" sx={{ width: 32, height: 32 }}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </div>
    );
}

export default LoginComponent;




