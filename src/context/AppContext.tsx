import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { GET_USER_BY_ID } from "../../query/user";
import { UserType } from "../types/UserType";
import { ACTION_TYPES, StateType } from "./contextUtils";
import { AppReducer } from "./reducer";

const initialState = {
  user: undefined,
} as StateType;

export const AppContext = createContext<StateType>(initialState);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [fetchUserData, { data: userData }] = useLazyQuery(GET_USER_BY_ID, {
    onCompleted() {
      console.log("onCompleted setUser", { ...userData.core_user_by_pk });
      setUser({ ...userData.core_user_by_pk });
    },
    onError(error: any) {
      console.log(error);
    },
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    const getUserSession = async () => {
      const response = await fetch("/api/getUserSession", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        let currentUser = await response.json();
        let currentUserId = currentUser.id;
        fetchUserData({
          variables: {
            id: currentUserId,
          },
        });
      }
    };
    getUserSession();
  }, []);

  const updateUser = async () => {
    console.log("will updateUser");
    const response = await fetch("/api/getUserSession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      let currentUser = await response.json();
      let currentUserId = currentUser.id;
      fetchUserData({
        variables: {
          id: currentUserId,
        },
      });
    }
  };

  const setUser = (user: UserType | undefined) => {
    dispatch({
      type: ACTION_TYPES.SET_USER,
      payload: user,
    });
  };

  const [loginModal, setLoginModal] = useState(false);

  const contextValues: StateType = {
    ...state,
    loginModal,
    setLoginModal,
    updateUser,
    setUser,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
