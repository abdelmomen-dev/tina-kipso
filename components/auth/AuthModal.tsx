import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/custom/Modal.module.scss";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
export default function AuthModal({ isRegister, closeMe }: any) {
  const [newUserState, setNewUserState] = useState(isRegister);

  //   handle the backdrop with useRed
  const node = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
  const handleClick = (e: any) => {
    if (node?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    console.log("Close Modal");
    closeMe(false);
  };
  const onClose = (close: boolean) => {
    closeMe(close);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={node}>
        <div className={styles.modalButtons}>
          <button
            className={clsx(
              styles.logBtn,
              newUserState ? styles.activeBtn : null
            )}
            onClick={() => setNewUserState(false)}
          >
            {"تسجيل دخول"}
          </button>
          <button
            className={clsx(
              styles.logBtn,
              newUserState ? null : styles.activeBtn
            )}
            onClick={() => setNewUserState(true)}
          >
            {"حساب جديد"}
          </button>
        </div>
        <div className="">
          <h3 className="mt-4 py-2 text-center font-bold text-primary">
            {newUserState
              ? "انشاء حساب جديد"
              : "قم بتسجيل الدخول باستخدام البريد الالكتروني وكلمة المرور"}
          </h3>
        </div>
        <div className={styles.modalBody}>
          {newUserState ? (
            <SignupForm onClose={onClose} />
          ) : (
            <LoginForm onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
