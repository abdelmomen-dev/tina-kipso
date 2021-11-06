import { useLazyQuery } from "@apollo/client";
import { useContext } from "react";
import { Field, Form } from "react-final-form";
import { GET_USER_BY_ID } from "../../query/user";
import { AppContext } from "../../src/context/AppContext";

export default function LoginForm({ onClose }: any) {
  const { setUser } = useContext(AppContext);
  const [fetchUserData, { data: userData }] = useLazyQuery(GET_USER_BY_ID, {
    onCompleted() {
      console.log(userData.core_user_by_pk);
      setUser({ ...userData.core_user_by_pk });
      // close modal
      onClose(false);
      //return router.push(`/${locale}/profile`);
    },
    onError(error) {
      console.log(error);
    },
  });
  const onSubmit = async (data: any) => {
    const { email, password } = data;
    console.log(email, password);
    await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        if (response.ok) {
          const userResp = await fetch("/api/getUserSession", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          console.log("userResp", userResp);
          userResp;
          if (userResp.status === 200) {
            let currentUser = await userResp.json();
            let currentUserId = currentUser.id;
            console.log(currentUserId);

            fetchUserData({
              variables: {
                id: currentUserId,
              },
            });
          }
        } else {
          const errorResp = await response.json();
          const errorText = errorResp.message;
          //setErrorMessage(errorText);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const validate = (values: any) => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="m-2">
            <label className="form-label">البريد الالكتروني</label>
            <Field name="email">
              {(props) => (
                <input
                  className="form-control"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  placeholder="ادخل البريد الالكتروني"
                />
              )}
            </Field>
          </div>
          <div className="m-2">
            <label className="form-label"> كلمة المرور</label>
            <Field name="password">
              {(props) => (
                <input
                  className="form-control"
                  type="password"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  placeholder="ادخل كلمة المرور"
                />
              )}
            </Field>
          </div>
          <div className="m-2 text-center">
            <button type="submit" className="thm-btn my-2">
              دخـول
            </button>
          </div>
        </form>
      )}
    />
  );
}
