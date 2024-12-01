import { useContext, useState } from "react";
import { NomeContext } from "../context/NomeContext";

export const ChangeNome = () => {

  const [name, setName] = useState("");

  const { nome, setNome } = useContext(NomeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setNome(name);

    console.log("nome anterior",nome);

    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Novo Nome para o context:
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Adicionar novo nome" />
      </form>
    </div>
  );
};
