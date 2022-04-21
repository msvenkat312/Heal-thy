import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Pricing = () => {
    return(
        <div className="pricing">
            <Card className="pricing-cards" sx={{width: "100%"}}>
                <CardContent>
                    <h1 className="price-heading">Basic/Free Plan</h1>
                    <h2 className="price">$0/month</h2>
                    <p className="price-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.

                    </p>
                    <Button variant="contained">Choose Plan</Button>
                </CardContent>
            </Card>
            <Card className="pricing-cards"  sx={{width: "100%"}}>
                <CardContent>
                    <h1 className="price-heading">Pro Plan</h1>
                    <h2 className="price">$15/month</h2>
                    <p className="price-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.

                    </p>
                    <Button variant="contained">Choose Plan</Button>
                </CardContent>
            </Card>
            <Card className="pricing-cards"  sx={{width: "100%"}}>
                <CardContent>
                    <h1 className="price-heading">Enterprise Plan</h1>
                    <h2 className="price">$25/month</h2>
                    <p className="price-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.

                    </p>
                    <Button variant="contained">Choose Plan</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Pricing;