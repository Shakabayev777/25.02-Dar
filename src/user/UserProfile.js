import React from 'react';
import UserContext from './UserContext';

function UserProfile({user}) {
    return (
        <UserContext.Consumer>
            {user => (
                <ul>
                    <li>
                        First name: {user.firstName}
                    </li>
                    <li>
                        Last name: {user.lastName}
                    </li>
                </ul>
            )}
        </UserContext.Consumer>
    )
}

export default UserProfile;