import React, { useState } from "react";

export default function VideoTwoAlter() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <section className="video-two">
      <div className="container">
        <img
          src="/assets/images/scratch-1-1.png"
          className="video-two__scratch"
          alt=""
        />
        <div className="row">
          <div className="col-lg-7">
            <div className="video-two__content">
              <h2 className="video-two__title">
                مع دورات اليقين التدريبية <br />
                مهمتنا هي زيادة المعرفة واتاحتها للجميع
              </h2>
              <a href="#" className="thm-btn">
                اعرف المزيد
              </a>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start">
            <div className="my-auto">
              {/**
                     * 
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aitb---aDYM' onClose={() => this.setState({isOpen: false})} />
                     */}
              <div onClick={openModal} className="video-two__popup">
                <i className="fa fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
