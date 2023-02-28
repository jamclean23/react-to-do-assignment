// Component Example

// ====== IMPORTS ======
import React, { useState, useEffect } from 'react';

// ====== DEFINITION ======

function InputField () {

    const [listItems, setListItems] = useState([]);
    const [message, setMessage] = useState('default');
    const [uniqueId, setUniqueId] = useState(0);
    const [jsxList, setJsxList] = useState(null);

    useEffect(onListItemsChange, [listItems]);

    function onListItemsChange () {
        console.log(listItems);
        generateListJsx();
    }

    function generateListJsx() {
        setJsxList(listItems.map((item, index) => {
            return (
                <li key={item.key}>{item.content}
                    <button onClick={logItems}>x</button>
                </li>
            );
        }));
    }

    function inputChange (event) {
        setMessage(event.target.value);
    }

    function logItems () {
        console.log(listItems);
    }

    function clickEvent () {
        setListItems(listItems.concat({key: 'uniqueId' + uniqueId, content: message }));
        setMessage('');
        setUniqueId(uniqueId + 1);
    }

    return (
        <div>
            <label htmlFor="userInput">Task: </label>
            <input onChange={inputChange} type="text" id="userInput" value={message}/>
            <br></br>
            <button onClick={clickEvent}>Submit</button>
            <h2>To Do</h2>
            {jsxList}
        </div>
    );
}


// ====== EXPORTS ======

export {
    InputField
}