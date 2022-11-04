import { FC } from "react";
import { ListItems } from "../ListItems/ListItems";
import { useSelector } from "react-redux";

const List: FC<{}> = () => {
  const contacts = useSelector((state: any) => state.contacts);
  const filter = useSelector((state: any) => state.filter);
  const result =
    contacts.filter((item: any) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    ) ?? null;
  return (
    <div>
      <ul>
        {result &&
          result.map((item: any) => <ListItems key={item.id} {...item} />)}
      </ul>
    </div>
  );
};

export { List };
