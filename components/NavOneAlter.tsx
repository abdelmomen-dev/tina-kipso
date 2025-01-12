import Link from "next/link";
import { Component } from "react";

type MyState = {
  sticky: boolean;
};
class NavOneAlter extends Component<{}, MyState> {
  /*
  state: MyState = {
    stikey: false,
  };
    */
  constructor() {
    super({});
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

    //Search Toggle
    this.serachButton();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler?.addEventListener("click", function () {
      (mainNav as any).style.display =
        (mainNav as any)?.style.display != "block" ? "block" : "none";
    });
  };

  serachButton = () => {
    let searchToggle = document.querySelector(".search-toggle");
    let searchPopup = document.querySelector(".search-popup");
    let searchClose = document.querySelector(".cancel");
    let searchOverlay = document.querySelector(".search-overlay");

    searchToggle?.addEventListener("click", function () {
      searchPopup?.classList.add("active");
    });

    searchClose?.addEventListener("click", function () {
      searchPopup?.classList.remove("active");
    });

    searchOverlay?.addEventListener("click", function () {
      searchPopup?.classList.remove("active");
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/assets/images/logo.png"
                    className="main-logo"
                    width="128"
                    alt="Awesome Image"
                  />
                </a>
              </Link>
              <div className="header__social">
                <a href="https://twitter.com/yaqeen_edu">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.snapchat.com/add/Yaqeen_edu">
                  <i className="fab fa-snapchat"></i>
                </a>
                <a href="https://www.instagram.com/yaqeen_edu/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="menu-toggler">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <Link href="/">
                    <a>الرئيسية</a>
                  </Link>
                  <ul className="no-sub-menu">
                    <li>
                      <Link href="/">
                        <a>Home 01</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2">
                        <a>Home 02</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-3">
                        <a>Home 03</a>
                      </Link>
                    </li>
                    <li>
                      <a href="#">Header Versions</a>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">
                            <a>Header 01</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-2">
                            <a>Header 02</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-3">
                            <a>Header 03</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">الصفحات</a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/about">
                        <a>من نحن</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery">
                        <a>معرض الصور</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing">
                        <a>خطط الاسعار</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>الاسئلة المتكررة</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/courses">الدورات التدريبية</a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/courses">
                        <a>Courses</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/course-details">
                        <a>Courses Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/teachers">
                    <a>المدربين</a>
                  </Link>
                  <ul className="no-sub-menu">
                    <li>
                      <Link href="/teachers">
                        <a>Teachers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/teacher-details">
                        <a>Teachers Details</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/become-teacher">
                        <a>Become Teacher</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/news">
                    <a>اخبارنا</a>
                  </Link>
                  <ul className="no-sub-menu">
                    <li>
                      <Link href="/news">
                        <a>News Page</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-details">
                        <a>News Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contactus">
                    <a>اتصل بنا</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#"
              >
                <i className="kipso-icon-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavOneAlter;
