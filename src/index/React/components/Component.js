// Component Example

// ====== IMPORTS ======
import React, { useState, useEffect } from 'react';

// ====== DEFINITION ======

function InputField () {

    const [listItems, setListItems] = useState([]);
    const [message, setMessage] = useState('default');

    useEffect(onListItemsChange, [listItems]);

    function onListItemsChange () {
        if (listItems.length) {

            // Log changes
            console.log('Added: ' + listItems[listItems.length - 1]);
            console.log(listItems); 
        }
    }

    function inputChange (event) {
        setMessage(event.target.value);
    }

    function clickEvent () {
        console.log('clicked');
        setListItems(listItems.concat(
            <li key={'uniqueId' + listItems.length}>{message}
                <button onClick={()=> { console.log('clicked' + listItems.length) }}>X</button>
            </li>));
        setMessage('');
    }

    return (
        <div>
            <label htmlFor="userInput">Task: </label>
            <input onChange={inputChange} type="text" id="userInput" value={message}/>
            <br></br>
            <button onClick={clickEvent}>Submit</button>
            <ListOutput listItems={listItems}/>
        </div>
    );
}

function ListOutput (props) {

    return (
        <div>
            <h2>To-Do</h2>
            <ul>
                {props.listItems}
            </ul>
        </div>
    );
}


// ====== EXPORTS ======

export {
    InputField,
    ListOutput
}