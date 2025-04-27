import {
  ChangeEvent,
  FC,
  MouseEvent,
  DragEvent,
  useState,
  useRef,
} from "react";

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый"
      />
      <input
        ref={inputRef}
        onChange={changeHandler}
        type="text"
        placeholder="Неуправляемый"
      />
      <button onClick={clickHandler}>text</button>

      <div
        draggable
        onDrag={dragHandler}
        style={{ width: "200px", height: "200px", background: "red" }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "green" : "red",
          marginTop: "20px",
        }}
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
      ></div>
    </div>
  );
};
