import React from 'react';

const dogDetails = (dogs) => {
return (
    <div>
        {dogs.map(dog => {
            <div>
            <h1>{dog.name}</h1>
            <h1>{dog.age}</h1>
            </div>
        })}
    </div>
)
}

export default dogDetails;