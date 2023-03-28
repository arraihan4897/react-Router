import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FrndDetails = () => {
    const frnd = useLoaderData();
    return (
        <div>
            <h3>name: { frnd.name }</h3>
            <h6>Call him/her {frnd.phone}</h6>
            
            
        </div>
    );
};

export default FrndDetails;