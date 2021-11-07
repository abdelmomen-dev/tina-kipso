import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import AboutTwoAlter from "../components/AboutTwoAlter";
import AuthModal from "../components/auth/AuthModal";
import CountDownAlter from "../components/CountDownAlter";
import CourseCatAlter from "../components/CourseCatAlter";
import CourseOne from "../components/CourseOne";
import FooterAlter from "../components/FooterAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import SliderOneAlter from "../components/SliderOneAlter";
import VideoTwoAlter from "../components/VideoTwoAlter";
import { parseMdFile } from "../helpers/markown";
import { getAllProducts } from "../helpers/product";
import { AppContext } from "../src/context/AppContext";
import { getHomeForm } from "../src/forms/forms";
import { useSignout } from "../src/hooke/useSignOut";

const Home: NextPage = ({ mdFile }: any) => {
  const { user } = useContext(AppContext);
  useEffect(() => {
    console.log("index user changed", user);
  }, [user]);
  /*
  const ScreenPlugin1: ScreenPlugin<any> = {
    name: "اعدادات الصفحة الرئيسية",
    Component: () => <h1>Hello اعدادات</h1>,
    Icon: () => <span>🌁</span>,
    layout: "fullscreen",
    __type: "screen",
  };
  const ScreenPlugin2: ScreenPlugin<any> = {
    ...ScreenPlugin1,
    name: "اعدادات الموقع",
    Icon: () => <>📡</>,
    Component: () => <h1>Hello Baby</h1>,
  };
  */
  //useScreenPlugin(screenPlugin);
  //useScreenPlugin(screenPlugin2);
  const [_, form] = useForm(getHomeForm(mdFile));
  usePlugin(form);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const closeModal = (isOpen: boolean) => {
    setIsOpenModal(isOpen);
  };
  const { signOutHandler } = useSignout();

  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية">
          {isOpenModal && (
            <AuthModal isRegister={isRegister} closeMe={closeModal} />
          )}
          <div className="topbar-one">
            <div className="container">
              <div className="topbar-one__left">
                <a href="#">info@alyaaqeen.com</a>
                <a style={{ direction: "ltr" }} href="#">
                  +208880000
                </a>
              </div>
              <div className="topbar-one__right">
                {user?.id ? (
                  <>
                    <a href="#" onClick={signOutHandler}>
                      تسجيل خروج
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="#"
                      onClick={() => {
                        setIsRegister(false);
                        setIsOpenModal(true);
                      }}
                    >
                      دخول
                    </a>
                    <a
                      href="#"
                      onClick={() => {
                        setIsRegister(true);
                        setIsOpenModal(true);
                      }}
                    >
                      حساب جديد
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          <NavOneAlter />
          <SliderOneAlter />
          <AboutTwoAlter />
          <CourseOne />
          <VideoTwoAlter />
          <CountDownAlter />
          <CourseCatAlter />
          <FooterAlter />
        </Layout>
      </InlineForm>
    </>
  );
};
const getStaticProps = async () => {
  return {
    props: {
      mdFile: parseMdFile("pages/home.md"),
      products: getAllProducts(),
    },
  };
};
export default Home;
export { getStaticProps };
