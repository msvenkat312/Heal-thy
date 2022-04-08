import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";

const AvatarComponent = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogin = () => {
        setAnchorEl(null);
        props.modeChange(2);
        props.loginMode();
    }

    return (
        <div className="avatar">
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar src="/broken-image.jpg" sx={{ width: 32, height: 32 }}/>
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
                <MenuItem onClick={handleLogin}>Login / Signup</MenuItem>
            </Menu>

        </div>
    )
}

export default AvatarComponent;




