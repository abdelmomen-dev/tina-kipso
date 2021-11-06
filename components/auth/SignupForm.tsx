import { Field, Form } from "react-final-form";

export default function SignupForm({ onClose }: any) {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const validate = (values: any) => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="m-1 row ">
            <div className="col">
              <label className="form-label">الاسم الاول</label>
              <Field name="firstname">
                {(props) => (
                  <input
                    className="form-control"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    placeholder="ادخل الاسم الاول"
                  />
                )}
              </Field>
            </div>

            <div className="col">
              <label className="form-label"> اسم العائلة</label>
              <Field name="lastname">
                {(props) => (
                  <input
                    className="form-control"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    placeholder="ادخل اسم العائلة"
                  />
                )}
              </Field>
            </div>
          </div>

          <div className="m-1 row ">
            <div className="col">
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

            <div className="col">
              <label className="form-label">رقم الهاتف </label>
              <Field name="phone">
                {(props) => (
                  <input
                    className="form-control"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    placeholder="ادخل رقم الهاتف"
                  />
                )}
              </Field>
            </div>
          </div>

          <div className="m-1 row ">
            <div className="col">
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

            <div className="col">
              <label className="form-label">تكرار كلمة المرور</label>
              <Field name="rePassword">
                {(props) => (
                  <input
                    className="form-control"
                    type="password"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    placeholder="ادخل كلمة المرور مجدداً"
                  />
                )}
              </Field>
            </div>
          </div>
          <div className="m-2 row"></div>
          <div className="m-2 text-center">
            <button type="submit" className="thm-btn my-2">
              تسجيل حساب جديد
            </button>
          </div>
        </form>
      )}
    />
  );
}
