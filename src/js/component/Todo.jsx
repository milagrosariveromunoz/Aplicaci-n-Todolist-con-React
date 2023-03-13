import React, { useState } from "react";


const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [style, setStyle] = useState('');

  console.log(style)
  let submitHandler = (e) => {
    e.preventDefault()
	if (input != '') { 
		items.push(input)
		I1.value=''
		setInput('')}
  };
  function del(i) {
	setItems(items.filter((e, id)=>{return i != id}))
  }

  let fTask = items.map((e, i) => <li key={i} className="list-group-item d-flex justify-content-between"
  onMouseEnter={e => {
	  setStyle(i);
  }}
  onMouseLeave={e => {
	  setStyle()
  }}>

	{e}<span key={i} onClick={() => del(i)} style={(i) == style ? {display: 'block'} : {display: 'none'}}>X</span></li>)

  return (
    <div className="text-center">
      <h1>todos</h1>
      <div className="card">
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            formtype="text"
            placeholder={items.length > 0 ? `What needs to be done?` : 'No tasks. Add a task'}
			id="I1"
          ></input>
        </form>
        <ul className="list-group list-group-flush" id="task">
          {fTask}
        </ul>
        <div className="card-footer">
			{items.length > 0 ? `${items.length} Items left` : 'No items left'}
		</div>
      </div>
    </div>
  );
};

export default Todo;
