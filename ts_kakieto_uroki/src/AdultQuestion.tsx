import { ChangeEvent, FC, MouseEvent } from "react";

type AdultOrNotProps = {
  setIsAdult: (isAdult: boolean) => void;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = () => {
    setIsAdult(true);
  };

  const noHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setIsAdult(false);
    console.log(event.screenX);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      Вам Есть 18?
      <button
        style={{ marginRight: "10px", marginLeft: "10px" }}
        onClick={yesHandler}
      >
        Да
      </button>
      <button onClick={noHandler}>Нет</button>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
};

export default AdultOrNot;
