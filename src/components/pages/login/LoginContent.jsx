import { LogoFriboi } from "@/assets/icons/LogoFriboi";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginContent.module.css";
import { EyeButton } from "../../widgets/atoms/toggleButton/EyeButton";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "@/redux/modules/user";
import api from "../../../services/api/api";

function LoginContent() {
  const navigate = useNavigate();
  const [isPassword, setTypePassword] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/advice")
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
  });

  function submit(e) {
    e.preventDefault();
    dispatch(changeUser(user));
    navigate("/inicio");
  }

  function toggle() {
    setTypePassword(!isPassword);
  }

  return (
    <div className={styles.login_container}>
      <form
        onSubmit={submit}
        className="flex h-[400px] w-[350px] flex-col justify-between
        rounded-lg bg-neutra-100 py-10 px-11 shadow"
      >
        <div className="mx-auto block">
          <LogoFriboi />
        </div>
        <input
          type="text"
          placeholder="Usuário"
          className=" w-100 rounded-lg border border-neutra-400 py-2.5 px-4 shadow outline-none placeholder:text-neutra"
          onChange={e => setUser(e.target.value)}
        />
        <div className="relative flex">
          <input
            type={isPassword ? "password" : "text"}
            placeholder="Senha"
            className="relative w-full rounded-lg border border-neutra-400 py-2.5 px-4 shadow outline-none placeholder:text-neutra"
            onChange={e => setPassword(e.target.value)}
          />
          <EyeButton action={() => toggle()} />
        </div>
        <Link className="text-sm font-bold">Esqueci minha senha</Link>
        <div className="block">
          <button
            className="-700 rounded-md bg-red py-2 px-5 transition hover:bg-red-700 focus:bg-red-600"
            type="submit"
          >
            <span className="text-md font-semibold text-white">Entrar</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export { LoginContent };
