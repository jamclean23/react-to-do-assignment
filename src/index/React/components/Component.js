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
                <li key={item.key}>{index + 1}. {item.content}
                    <button onClick={deleteClick.bind(this, item.key)}>x</button>
                </li>
            );
        }));
    }

    function inputChange (event) {
        setMessage(event.target.value);
    }

    function clickEvent () {
        setListItems(listItems.concat({key: 'uniqueId' + uniqueId, content: message }));
        setMessage('');
        setUniqueId(uniqueId + 1);
    }

    function deleteClick (clickedId, event) {
        setListItems(listItems.filter((item, index) => {
            console.log('key: ' + item.key);
            console.log('uniqueId: ' + clickedId);
            return item.key != clickedId;
        }));
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