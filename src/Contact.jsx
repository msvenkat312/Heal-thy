import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
		const [fname, setFname] = useState("");
		const [lname, setLname] = useState("");
		const [email, setEmail] = useState("");
		const [message, setMessage] = useState("");
		return(
				<div className="contact">
					<h1 className="contact-heading">Have any Queries? Contact Us!</h1>
					<div className="query-form">
						{/* <MailOutlineIcon sx={lg={ width: 400, height: 400 }, xs={width: 100, height: 100} }/> */}
						<MailOutlineIcon sx={
							{ width: {lg: 400, md: 400, sm: 100, xs: 100}, height: {lg: 400, md: 400, sm: 100, xs: 100} }
						}/>
						<div className="query-content">
							<TextField label="First name"
								onChange={e => setEmail(e.target.value)}
								sx={{width: '100%'}}
								className="query-input"
							/>
							<TextField label="Last Name"
								onChange={e => setEmail(e.target.value)}
								sx={{width: '100%'}}
								className="query-input"
							/>
							<TextField label="E-mail"
								onChange={e => setEmail(e.target.value)}
								sx={{width: '100%'}}
								className="query-input"
							/>
							<TextField label="Questions"
								id="outlined-multiline-static"
								multiline
								rows={4}
								onChange={e => setEmail(e.target.value)}
								sx={{width: '100%'}}
								className="query-input"
							/>
							<Button variant="contained" color="primary">Send &nbsp; <SendIcon/> </Button>
						</div>
					</div>
				</div>
		);
};

export default Contact;