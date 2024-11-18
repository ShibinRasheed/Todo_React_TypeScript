import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { Item } from "./types/utils";
import ItemList from "./components/ItemList";

export default function App() {



  const [items, setItems] = useState<Item[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submited");
    setItems((prev) => [...prev, {title : inputValue, id : Date.now().toString() }]);
    setInputValue("");
  };

  return (
    <div className="bg-slate-800 p-10 flex flex-col items-center  text-white w-full h-screen">
      <h1 className="font-mono font-bold text-4xl">Todo List</h1>

      <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-5">
        <Input inputValue={inputValue} setInputValue={setInputValue}/>
        <Button className="bg-black rounded-md py-2 ">Submit</Button>
      </form>

      <ItemList items={items} setItems={setItems}/>

    </div>
  );
}
