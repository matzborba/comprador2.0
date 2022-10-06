import { Notification } from "../../atoms/notification/Notification";
import { useState } from "react";
import perfil from "@/assets/images/perfil.png";

function UserInfo() {
  const [user, setUser] = useState("João Paulo");
  return (
    <div className="flex items-center gap-4">
      <Notification />
      <p>
        Olá, <span>{user}</span>
      </p>
      <img src={perfil} alt="" />
    </div>
  );
}

export { UserInfo };
