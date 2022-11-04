import { FC, ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setValueFilter } from "../../redux/actions";

const Filter: FC<{}> = () => {
  const dispatch = useDispatch();
  const value: string = useSelector((state: any) => state.filter);
  const onInputFilter = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setValueFilter(event.currentTarget.value));
  };

  return (
    <div>
      <h3>Contacts</h3>
      <input onChange={onInputFilter} value={value} type="text" name="filter" />
    </div>
  );
};

export { Filter };
