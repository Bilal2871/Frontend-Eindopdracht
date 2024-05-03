import React, { useState, useEffect } from 'react';
export default function Account() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="profile-picture"></div>
            <h2>Welkom <strong>{user.username}</strong></h2>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}