import { FC } from "react";
import { GameFromServer } from "./data";

type GameProps = Pick<GameFromServer, "name" | "description" | "version">;

const Game: FC<GameProps> = ({ name, description, version }) => {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Описание: {description}</p>
      <p>Версия: {version}</p>
    </div>
  );
};

export default Game;
