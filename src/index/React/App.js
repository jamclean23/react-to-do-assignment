// Main app


// ====== IMPORTS ======

// React
import React from 'react';
import { InputField, ListOutput }  from './components/Component.js';


// ====== FUNCTIONS ======

// Main app function 
function App () {
    return (
        <div>
            <h1>Task List</h1>
            <InputField />
            <ListOutput />
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}