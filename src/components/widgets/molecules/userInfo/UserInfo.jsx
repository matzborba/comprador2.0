import { Notification } from "../../atoms/notification/Notification";
import perfil from "@/assets/images/perfil.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/modules/user";

function UserInfo() {
  const { user } = useSelector(selectUser);
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
