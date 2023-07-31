import { useState } from "react";

const todos = ['Buy groceries', 'Clean the house', 'Walk the dog'];

interface Props {
    item: String
}
export default function ToDoList() {

    //add classname on Click
    const list = todos.map((item, index) => {
        return (
            <Item key={index} item={item} />
        )
    })
    return (
        <>
            <h1>To Do List</h1>
            {list}
        </>
    )
}

const Item = ({ item }: Props) => {
    const [isActive, setIsActive] = useState(true)
    const toggle = () => {
        setIsActive(!isActive)
        console.log(isActive)
    }
    return (
        <ul className="list-group d-flex flex-row align-items-center m-4">
            <div className={`${isActive ? "active" : ""} list-group-item`}>{item}</div>
            <button className='btn btn-primary m-4' onClick={() => toggle()}>select</button>
        </ul >
    )
}