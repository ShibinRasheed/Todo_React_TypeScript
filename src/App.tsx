import { useState } from "react";

export default function App() {

    type Item = {
      id : string;
      title : string;
    }


  const [items, setItems] = useState<Item[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submited");
    setItems((prev) => [...prev, {title : inputValue, id : Date.now().toString() }]);
    setInputValue("");
  };

  const handleDelete = (id:string) => {
    setItems(list => list.filter(data => data.id !== id))
  }

  return (
    <div className="bg-slate-800 p-10 flex flex-col items-center  text-white w-full h-screen">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-5">
        <input
          type="text"
          className="text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="bg-black rounded-md py-2" type="submit">
          Submit
        </button>
      </form>

      <div>
        {items.map((data, index) => {
          return (
            <div key={`${data.id} = ${index}`} className="flex gap-4 border border-white py-2 px-5 justify-between" >
              <p  className="">
                {data.title}
              </p>
              <button className="bg-red-500 rounded text-white px-2 " onClick={()=>handleDelete(data.id)} >x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
