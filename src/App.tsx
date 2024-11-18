import { useState } from "react";

export default function App() {

  const [items , setItems] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault();
    console.log("submited")
    setItems(prev => [...prev,inputValue]);
    setInputValue("");
  }

  return (
    <div className="bg-slate-800 p-10 flex flex-col items-center  text-white w-full h-screen">
      <h1>Todo List</h1>

       <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-5">
        <input type="text" className="text-black" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
         <button className="bg-black rounded-md py-2" type="submit">Submit</button>
      </form>

      <div>
        {items.map((data, index)=> {
          return(
            <p key={`${data} = ${index}`} className="">{data}</p>
          )
        })}
      </div>
    </div>
  );
}
