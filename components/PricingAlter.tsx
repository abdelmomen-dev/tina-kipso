export default function PricingAlter() {
  return (
    <section className="pricing-one pricing-page ">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">اختار خطة الاسعار التي تناسبك</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price text-center"> 80 ج </h2>
                <p className="pricing-one__name text-center">باقة اساسية</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>عدد الدورات: 3</li>
                  <li>دعم فني 24 ساعة</li>
                  <li> </li>
                  <li>اشتراك تجريبي مجاني </li>
                  <li> الوصول للملخصات والكتب </li>
                </ul>
                <a href="#" className="thm-btn pricing-one__btn text-center">
                  اختر الخطة
                </a>
                <p className="pricing-one__tag-line">لا يوجد مصروفات اخري!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">$30.00 </h2>
                <p className="pricing-one__name">medium pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul>
                <a href="#" className="thm-btn pricing-one__btn">
                  Choose Plan
                </a>
                <p className="pricing-one__tag-line">No hidden charges!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">$40.00 </h2>
                <p className="pricing-one__name">premium pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul>
                <a href="#" className="thm-btn pricing-one__btn">
                  Choose Plan
                </a>
                <p className="pricing-one__tag-line">No hidden charges!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
