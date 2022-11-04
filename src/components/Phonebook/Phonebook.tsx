import { FormContacts } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { List } from "../List/List";

const PhoneBook = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormContacts />
      <Filter />
      <List />
    </div>
  );
};

export { PhoneBook };
