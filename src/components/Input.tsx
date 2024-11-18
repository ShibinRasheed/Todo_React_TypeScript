import { ReactSetState } from "../types/utils";

type Input = {
    inputValue : string;
    setInputValue : ReactSetState<string>
}

export default function Input({inputValue, setInputValue}:Input) {
  return (
    <input
      type="text"
      className="text-black"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
}
