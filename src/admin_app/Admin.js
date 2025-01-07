import React, { useState , useEffect} from "react";
import { useAuth } from "../context/auth";
import {  Link ,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginForm from "./LoginForm";
import ServicesManagement from "./ServicesManagement";
import ServiceProvidersManagement from "./ServiceProvidersManagement";
import UsersManagement from "./UsersManagement";
import "react-toastify/dist/ReactToastify.css";
import "./Admin.css"


const Admin = () => {
  const [auth, setAuth] = useAuth();
 

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };



  const [tab, setTab] = useState("users");

  const renderTabContent = () => {
    switch (tab) {
      case "users":
        return <UsersManagement />;
      case "serviceProviders":
        return <ServiceProvidersManagement />;
      case "services":
        return <ServicesManagement />;
      case "LoginForm":
        return <LoginForm />;
      default:
        return <UsersManagement />;
    }
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Dashboard {auth.user}</h1>
      <div className="admin-tabs">
        <button
          className={tab === "users" ? "active" : ""}
          onClick={() => setTab("users")}
        >
          Manage Users
        </button>
        <button
          className={tab === "serviceProviders" ? "active" : ""}
          onClick={() => setTab("serviceProviders")}
        >
          Manage Service Providers
        </button>
        <button
          className={tab === "services" ? "active" : ""}
          onClick={() => setTab("services")}
        >
          Manage Services
        </button>
        <button
          className={tab === "LoginForm" ? "active" : ""}
          onClick={() => setTab("LoginForm")}
        >
          Worker Login
        </button>

      </div>
      <div className="link-container">
        <Link
          className="btn btn-info"
          to={"/"}
          onClick={handleLogout}
        >
          Logout ({auth.user})
        </Link>
      </div>
      <div className="admin-content">{renderTabContent()}</div>

    </div>
  );
}
















  export default Admin;


