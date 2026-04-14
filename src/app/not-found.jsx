import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1>ppage is not available</h1>
            <Link href="./">
            <button>back home</button>
            </Link>
        </div>
    );
};

export default NotFound;