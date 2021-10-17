import { useCMS } from "@tinacms/toolkit";
import Link from "next/link";
import { InlineText } from "react-tinacms-inline";
export default function PageHeader({ formID }: { formID: string }) {
  const cms = useCMS();
  console.log(formID);

  const callerForm = cms.forms.find(formID);

  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link href="/">
              <a>الرئيسية</a>
            </Link>
          </li>
          <li className="active">
            <a href="#">{callerForm?.initialValues.title}</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">
          <InlineText name="title" className="inner-banner__title" />
        </h2>
      </div>
    </section>
  );
}
