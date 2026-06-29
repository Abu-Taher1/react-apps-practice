import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container ">
            <div className="card white-border">
            <div><img src="https://images.unsplash.com/photo-1706067501109-8cc4d2d32226?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" /></div>

            <div className="card-content">
                <h1>{props.user}</h1>
                <p>This is a simple card component.</p>
                <button>Click Me</button>
            </div>
        </div>
        </div>
    );
};

export default Card;