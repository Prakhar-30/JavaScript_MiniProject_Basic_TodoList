function App() {

let cmd="-9999999999";
while(!cmd==="quit")
  {
    cmd=prompt("Eter the commad");
    if(cmd==="new")
      {
        console.log("enter the Todo task");
      }
      else if(cmd==="list")
        {
        console.log("here is the todo list:");
      }
      else if(cmd==="delete")
        {
        console.log("enter the index to delete todo task");
      }
      }
  
  return (
    <>
      <h1>ToDo_List</h1>
      <p>
        <ul>
          <li>"new"-Add a Todo</li>
          <li>"list"-List all Todos</li>
          <li>"delete"-Remove a specific Todo</li>
          <li>"quit"-close the app</li>
        </ul>
      </p>
    </>
  );

}
export default App;
