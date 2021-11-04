import { useQuery } from "@apollo/client";
import Swiper from "react-id-swiper";
import { InlineText } from "react-tinacms-inline";
import "swiper/css/swiper.css";
import { GET_COURSES } from "../query/course";

const CourseOne = () => {
  const { data } = useQuery(GET_COURSES);

  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              <InlineText name="frontmatter.avilable" className="zindex10" />
            </h2>
          </div>
        </div>
        <div className="course-one__top-title__curve"></div>
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            {data && data.crs_course && (
              <Swiper {...params}>
                {data &&
                  data.crs_course.map((course: any) => (
                    <div className="item" key={course.id}>
                      <div className="course-one__single color-1">
                        <div className="course-one__image">
                          <img src={course?.media?.homeCover} alt="" />
                          <i className="far fa-heart"></i>
                        </div>
                        <div className="course-one__content">
                          <a href="#" className="course-one__category">
                            {course.crs_category.title_ar}
                          </a>
                          <div className="course-one__admin">
                            <img src="/assets/images/team-1-1.jpg" alt="" />

                            <a href="/teacher-details">
                              {course.crs_instructor.name.full}
                            </a>
                          </div>
                          <h2 className="course-one__title">
                            <a href="/course-details">{course.title_ar}</a>
                          </h2>
                          <div className="course-one__stars">
                            <span className="course-one__stars-wrap">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </span>
                            <span className="course-one__count">4.8</span>
                            <span className="course-one__stars-count">250</span>
                          </div>
                          <div className="course-one__meta">
                            <a href="/course-details">
                              <i className="far fa-clock"></i> {course.hours}{" "}
                              ساعة
                            </a>
                            <a href="/course-details">
                              <i className="far fa-folder-open"></i>{" "}
                              {course.lectures} محاضرة
                            </a>
                            <a href="/course-details">{course.price} S.R</a>
                          </div>
                          <a href="#" className="course-one__link">
                            عرض الدورة التدريبية
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
