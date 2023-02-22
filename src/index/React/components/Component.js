// Component Example

// ====== IMPORTS ======
import React from 'react';

// ====== DEFINITION ======

function InputField () {

    return (
        <div>
            <label for="userInput">Task: </label>
            <input type="text" id="userInput"/>
            <br></br>
            <button>Submit</button>
        </div>
    );
}

function ListOutput () {

    let listItems = [];

    for (let i = 0; i < 5; i++) {
        listItems.push(<li>blah {i}</li>);
    }

    return (
        <div>
            <h2>To-Do</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}


// ====== EXPORTS ======

export {
    InputField,
    ListOutput
}