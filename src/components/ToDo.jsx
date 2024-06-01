import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"; 

export default function ToDo() {

  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);


  const updateInput = (value) => {
    setUserInput(value);
    // console.log(value);
  };

  const addItem = () => {
    if (userInput.trim() !== '') {
      const newItem = {
        id: Math.random(),
        value: userInput
      };
      console.log(newItem);
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const editItem = (index, editItem) => {
    // const editedItemValue = list.find((item) => item.id === editItem.id).value;
    setUserInput(editItem.value);
    setCurrentItemId(editItem.id);
    setUpdateItem(true);
  };  

  const addEditedItem = () => {
    setList(list.map(item=>{
      if(userInput.trim() !== ''){
        return item.id === currentItemId ? {...item,value:userInput} : item
      }else{
        return item;
      }
    }));
    setUserInput("");
    setUpdateItem(false);
    setCurrentItemId(null);

  };

  return (
    <div className='container '>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >ToDo List <span className='fs-5'>Functinal</span></h1>
      <div className="row">
        <div className='input-group'>
          <input
            type="text"
            className="form-control"
            placeholder="add item . . ."
            value={userInput}
            onChange={(event) => updateInput(event.target.value)}
          />
          {updateItem?
          <button
          className='btn btn-primary mx-1'
          onClick={(index) => addEditedItem(index)}
         >Update</button>
         :
        <button
          className='btn btn-primary mx-1'
          onClick={() => addItem()}
        >Add</button>}
        </div>
      </div>
      <div className="row">
        {/* <div className='col-2'></div> */}
        <div className='col my-2 '>
          <ul className="list-group ">
            {list.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.value}
                <div>
                  <button
                    className='btn btn-warning m-2'
                    onClick={()=>editItem(index,item)}
                  >Edit
                  </button>
                  <button
                    className='btn btn-danger btn-xl'
                    onClick={() => deleteItem(item.id)}
                  >Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
