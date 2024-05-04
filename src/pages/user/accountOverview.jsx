import React from "react";

import './account.css';
import Account from "../../components/user/account.jsx";

function AccountOverview(){
    return (
        <section id="accountContainer">
            <h1>Account</h1>
            <Account/>
        </section>
    )
}

export default AccountOverview;