import React, { useState, useEffect } from "react";


const Fetch = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("Mila")
  const [created, setCreated] = useState(true)

  let submitHandler = (e) => {
    e.preventDefault()
	if (input != '') { 
		items.push(input)
		I1.value=''
		setInput('')
    
    let put = []
    items.forEach(e => {
      let obj = {'label': e, 'done': false}
      put.push(obj)
    })
    fetchPut(put)
  }};
  
  
const fetchGet = () => {
  var requestOptions = {
  method: 'GET',
};

fetch("https://assets.breatheco.de/apis/fake/todos/user/"+user, requestOptions)
  .then(response => response.json())
  .then(result => { result.map( (item) => {setItems((e) => [...e, item.label]);} )} )  
  .catch(error => console.log('error', error));
}

const fetchPut = (todoPut) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
   
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(todoPut),
    redirect: 'follow'
  };
  
  fetch("https://assets.breatheco.de/apis/fake/todos/user/"+user, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


function fetchDel(){
  setUser('')
  var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("https://assets.breatheco.de/apis/fake/todos/user/"+user, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

setCreated(false)}


const fetchPost = () => {var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://assets.breatheco.de/apis/fake/todos/user/"+user, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

setCreated(true)}

  
  useEffect(() => {
    fetchGet();
  }, [])

  let fTask = ''
  if (items[0] == '#') {setItems([])}
fTask = items.map((e, i) => <li key={i} className="list-group-item d-flex justify-content-between">{e}</li>)


  return (
    <div className="text-center">
      <h1>todos</h1>
      <p>Usuario: {created==true ? user : 'Ninguno'}</p>
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
			<p>{items.length > 0 ? `${items.length} Items left` : 'No items left'}</p>
      <span onClick={ () => {setItems([]), fetchPut([{'label': '#', 'done': false}])}}>X</span>
		</div>
      </div>
      <div className='container row m-auto p-2 justify-content-between futer'>
          <input
            formtype="text"
            placeholder='Nombre de usuario'
            className='col-6'
            id='I2'
            onChange={(e) => setUser(e.target.value)}
          ></input>

        {created == false ? 
        <button type="button" className="btn btn-success col-4" onClick={() => {fetchPost(), I2.value=''}}>Crear usuario</button> :
        <button type="button" className="btn btn-danger col-4" onClick={() => {fetchDel(), setItems([])}}>Borrar usuario</button>}
        </div>
    </div>
  );
};

export default Fetch;
