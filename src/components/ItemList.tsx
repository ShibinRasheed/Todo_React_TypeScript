import { Item, ReactSetState } from "../types/utils";
import Button from "./Button";

type ItemList = {
    items: Item[];
    setItems : ReactSetState<Item[]>; 
  }

export default function ItemList({items,setItems} :ItemList) {
    
    const handleDelete = (id:string) => {
        setItems(list => list.filter(data => data.id !== id))
      }
    
  
    return (
    <div className="min-w-[400px] flex flex-col gap-2">
      {items.map((data, index) => {
        return (
          <div
            key={`${data.id} = ${index}`}
            className="flex gap-4 border border-white py-2 px-5 justify-between"
          >
            <p className="">{data.title}</p>
            <Button
              className="bg-red-500 rounded text-white px-2"
              onClick={() => handleDelete(data.id)}
            >
              X
            </Button>
          </div>
        );
      })}
    </div>
  );
}
