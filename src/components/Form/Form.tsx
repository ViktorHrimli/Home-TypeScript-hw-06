import { FC } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/actions";
import { nanoid } from "nanoid";

type FormValue = {
  name: string;
  phone: string;
};

type Item = {
  name: string;
  phone: string;
  id: string;
};

const FormContacts: FC<{}> = () => {
  const dispatch = useDispatch();
  const initiasState = { name: "", phone: "" };
  const onSubmit = ({ name, phone }: FormValue, { resetForm }: any) => {
    const item: Item = {
      name,
      phone,
      id: nanoid(),
    };
    dispatch(addContacts(item));
    resetForm();
  };
  return (
    <div style={{ padding: "20px" }}>
      <Formik onSubmit={onSubmit} initialValues={initiasState}>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gridGap: "15px",
          }}
        >
          <Field type="text" name="name" placeholder="Your name" />
          <Field type="text" name="phone" placeholder="Phone" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export { FormContacts };
