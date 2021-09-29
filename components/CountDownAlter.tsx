import React, { useEffect } from "react";
import Countdown from "react-countdown";
import { InlineForm, InlineText } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";

const CountDownAlter = ({ tagline }: any) => {
  const [_, form] = useForm({
    initialValues: {
      tagline: tagline,
    },
    label: "countDown",
    id: "countDown",
    onSubmit: (newFormState: any) => {
      console.log(newFormState.tagline);
    },
  });
  usePlugin(form);
  useEffect(() => {
    console.log(form.values);
  }, [form]);
  return (
    <section className="countdown-one">
      <InlineForm form={form}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="countdown-one__content">
                <h2 className="countdown-one__title">قم بالتسجيل الان </h2>
                <p className="countdown-one__tag-line">
                  <InlineText name="tagline" />
                </p>
                <p className="countdown-one__text">
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                  ولايزال لوريم إيبسوم
                </p>
                <div className="countdown-one__list list-unstyled">
                  <Countdown date={Date.now() + 5000000000} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="become-teacher__form">
                <div className="become-teacher__form-top">
                  <h2 className="become-teacher__form-title">
                    احصل علي استشارة مجانية
                  </h2>
                </div>
                <form
                  action="#"
                  method="POST"
                  className="become-teacher__form-content contact-form-validated"
                >
                  <input type="text" placeholder="الاسم" name="name" />
                  <input
                    type="text"
                    placeholder="البريد الالكتروني "
                    name="email"
                  />
                  <input type="text" placeholder="رقم الهاتف " name="phone" />
                  <input type="text" placeholder="ملاحظات" name="message" />
                  <button
                    type="submit"
                    className="thm-btn become-teacher__form-btn"
                  >
                    سجل الان
                  </button>
                </form>
                <div className="result text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </InlineForm>
    </section>
  );
};
export default CountDownAlter;
