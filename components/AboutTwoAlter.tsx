import { useState } from "react";
import CountUp from "react-countup";
import { InlineTextarea } from "react-tinacms-inline";
import VisibilitySensor from "react-visibility-sensor";
export default function AboutTwoAlter() {
  const [startCounter, setStartCounter] = useState(false);
  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setStartCounter(true);
    }
  };

  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="block-title text-right">
                <h2 className="block-title__title">
                  <InlineTextarea name="welcomeSct.header" />
                </h2>
              </div>
              <p className="about-two__text">
                هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
                لوريم إيبسوم.
              </p>
              <div className="about-two__single-wrap">
                <div className="about-two__single">
                  <div className="about-two__single-icon">
                    <i className="kipso-icon-professor"></i>
                  </div>
                  <div className="about-two__single-content">
                    <p className="about-two__single-text">
                      ابدأ التعلم الان
                      <br />
                      مع فريق الخبراء
                    </p>
                  </div>
                </div>
                <div className="about-two__single">
                  <div className="about-two__single-icon">
                    <i className="kipso-icon-knowledge"></i>
                  </div>
                  <div className="about-two__single-content">
                    <p className="about-two__single-text">
                      عزز معرفتك بكل جديد
                      <br />
                      تعرف علي اخر الدورات
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="thm-btn">
                اعرف المزيد
              </a>
            </div>
          </div>
          <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
            <div className="about-two__image">
              <span className="about-two__image-dots"></span>
              <img src="/assets/images/circle.png" alt="" />
              <div className="about-two__count">
                <div className="about-two__count-text">
                  ساعات التدريب
                  <span className="counter">
                    <VisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{ top: 10 }}
                      delayedCall
                    >
                      <CountUp end={startCounter ? 4890 : 0} />
                    </VisibilitySensor>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
