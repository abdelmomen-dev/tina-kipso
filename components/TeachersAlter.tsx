import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_TEACHERS } from "../query/teacher";
export default function TeachersAlter() {
  const { data } = useQuery(GET_TEACHERS);
  console.log(data);

  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="row">
          {data?.crs_instructor?.map((instructor: any) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
              key={instructor.id}
            >
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/assets/images/team-1-1.jpg" alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <Link href="/teacher-details">
                      <a>{instructor.name?.full}</a>
                    </Link>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    {instructor.ext_data?.description}
                  </p>
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
