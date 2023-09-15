import React, { useState } from 'react'
import InputArea from "../Component/inputarea"
import ToDoItems from "../Component/to_do_items";

const Home = () => {

    const [items, setItems] = useState([]);

    const addItems = (inputText) => {
        setItems((prevItems) => {
            return [...prevItems, inputText]
        })
    };

    const deleteItems = (id) =>{
        setItems((prevItems)=>{
            return prevItems.filter((value,index) =>{
                return index!==id;
            });
        });
    };

    return (
        <div className="container">
            <div className="heading">
                <h1>To Do List</h1>
            </div>
            <InputArea addItems={addItems} />
            <div>
                <ul>
                    {
                        items.map((value,index)=>{
                            return (
                                <ToDoItems key={index} text={value} deleteItems={deleteItems} id={index} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home;