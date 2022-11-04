import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { removeContacts } from "../../redux/actions";

type PropsItems = {
  id: string;
  name: string;
  phone: string;
};

const ListItems: FC<PropsItems> = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleClickRemoveContacts = (evt: MouseEvent<HTMLButtonElement>) => {
    dispatch(removeContacts(id));
  };
  return (
    <div>
      <li>
        <p>{name}</p>
        <p>{phone}</p>
        <button type="button" onClick={handleClickRemoveContacts}>
          delete
        </button>
      </li>
    </div>
  );
};

export { ListItems };
