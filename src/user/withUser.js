import React from 'react';

const user = {
    firstName: 'Miras',
    lastName: 'Magzom',
}

export default function withUser(ComponentToWrap) {
    return function Wrapped(props) {
        return <ComponentToWrap user={user} {...props} />;
    }
}

