import React from 'react';

function Date() {
    const now = new Date();
    now.toDateString().slice(0, 10);

    return now;
}

export default Date;