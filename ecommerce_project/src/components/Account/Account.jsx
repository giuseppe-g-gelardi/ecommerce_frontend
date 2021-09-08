import React from 'react';
import './Account.css';

function Account() {
    return (
        <div id="Accountalign">
            <br/>
            <h1>Account Info!</h1>
            <table class="center">
                <tr>
                    <td>First Name:</td>
                    <td>Frank</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>Smith</td>
                </tr>
                <tr>
                    <td>Login Name:</td>
                    <td>CashMoney$mith</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>CashMoney$mith@gmail.com</td>
                </tr>
                <tr>
                    <td>Address Line:</td>
                    <td>888 16th St</td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td>Babylon</td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td>VA</td>
                </tr>
                <tr>
                    <td>Zip Code:</td>
                    <td>22363</td>
                </tr>
            </table>
            <button onClick type="button">Logout!</button>
        </div>

    )
}

export default Account
