import { lazy } from "react";
import { navigation } from "./constans";

export const routes = [
  {
    path: navigation.contacts,
    name: "ContactsPage",
    exact: true,
    private:true,
    restricted:false,
    component: lazy(() =>
      import("../pages/contacts/ContactsPage" /* webpackChunkName: "ContactsPage"*/)
    ),
  },
  {
    path: navigation.login,
    name: "LoginPage",
    exact: true,
    private:false,
    restricted:true,
    component: lazy(() =>
      import("../pages/login/LoginPage" /* webpackChunkName: "LoginPage"*/)
    ),
  },
  {
    path: navigation.registration,
    name: "RegistrationPage",
    exact: true,
    private:false,
    restricted:true,
    component: lazy(() =>
      import(
        "../pages/registration/RegistrationPage" /* webpackChunkName: "RegistrationPage"*/
      )
    ),
  },
];