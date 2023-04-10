import { useState} from "react"


export function NewTodoForm(props)
{
  props.onSubmit
  const [newItem, setNewItem] = useState("");

function handleSubmit(e)
{
    e.preventDefault();
    if(newItem === "") return;
    props.onSubmit(newItem)

    setNewItem("")

}
    return(
    <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
          <label htmlFor="item" id="item">New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            type="text" id="inputItem" />
        </div>
        <button id="add_btn">Add</button>
      </form>
    )
}