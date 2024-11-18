import { useState } from "react";

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submited");
    setItems((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const handleDelete = (value:string) => {
    setItems(list => list.filter(data => data !== value))
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
            <div key={`${data} = ${index}`} className="flex gap-4 border border-white py-2 px-5 justify-between" >
              <p  className="">
                {data}
              </p>
              <button className="bg-red-500 rounded text-white px-2 " onClick={()=>handleDelete(data)} >x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
