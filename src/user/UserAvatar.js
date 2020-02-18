import React from 'react';
import UserContext from './UserContext';

function UserAvatar() {
    return (
        <UserContext.Consumer>
            {user => (
                <div className="UserAvatar">
                    Hello, {user.firstName} {user.lastName}
                </div>
            )}
        </UserContext.Consumer>
    )
}

export default UserAvatar;