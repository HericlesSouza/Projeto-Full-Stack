import { Routes, Route } from "react-router-dom";
import { SignUp } from "../pages/signUp";
import { Login } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { ContactsProvider } from "../contexts/contactsContext/contactsContext";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedRoutes />}>
                <Route
                    path="/dashboard"
                    element={
                        <ContactsProvider>
                            <Dashboard />
                        </ContactsProvider>
                    }
                />
            </Route>
        </Routes>
    );
};
