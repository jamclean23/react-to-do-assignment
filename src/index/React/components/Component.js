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

    function startEdit (clickedId) {
        setListItems(listItems.map((item) => {
            if (item.key === clickedId) {
                let newObj = {};
                for (const prop in item) {
                    if (prop === 'edit') {
                        newObj.edit = true;
                    } else {
                        newObj[prop] = item[prop];
                    }
                }
                return newObj;
            } else {
                return item;
            }
        }));
    } 

    function finishEdit (clickedId) {
        setListItems(listItems.map((item) => {
            if (item.key === clickedId) {
                let newObj = {};
                for (const prop in item) {
                    if (prop === 'edit') {
                        newObj.edit = false;
                    } else {
                        newObj[prop] = item[prop];
                    }
                }
                return newObj;
            } else {
                return item;
            }
        }));
    }

    function generateListJsx() {
        setJsxList(listItems.map((item, index) => {

            let editButton = <button onClick={startEdit.bind(this, item.key)}>Edit</button>;
            let contentField = item.content;

            if (item.edit === true){
                editButton = <button onClick={finishEdit.bind(this, item.key)}>Done</button>;
                contentField = <input type="text" onChange={handleEditChange.bind(this, item.key)} value={item.content}/>;
            } 


            

            return (
                <li key={item.key}>{index + 1}. {contentField}
                    <button onClick={deleteClick.bind(this, item.key)}>x</button>
                    {editButton}
                </li>
            );
        }));
    }

    function handleEditChange (clickedId, event) {
        setListItems(listItems.map((item) => {
            if (item.key === clickedId) {
                let newObj = {};
                for (const prop in item) {
                    if (prop === 'content') {
                        newObj.content = event.target.value;
                    } else {
                        newObj[prop] = item[prop];
                    }
                }
                return newObj;
            } else {
                return item;
            }
        }));
    }

    function inputChange (event) {
        setMessage(event.target.value);
    }

    function clickEvent () {
        setListItems(listItems.concat({
            key: 'uniqueId' + uniqueId, 
            content: message, 
            edit: false,
        }));
        setMessage('');
        setUniqueId(uniqueId + 1);
    }

    function deleteClick (clickedId, event) {
        setListItems(listItems.filter((item, index) => {
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