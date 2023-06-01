import { useState, useContext, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    iContactsProviderProps,
    iContactsProviderValue,
    iCreateContact,
} from "./types";
import { api } from "../../services/api";
import { UserContext } from "../userContext/userContext";

export const ContactsContext = createContext({} as iContactsProviderValue);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
    const { token } = useContext(UserContext);
    const [contacts, setContacts] = useState([] as []);
    const [modalCreate, setModalCreate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                const { data } = await api.get("contacts");
                setContacts(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const createContact = async (data: iCreateContact) => {
        const id = toast.loading("Por favor espere...");
        try {
            await api.post("contacts", data);

            toast.update(id, {
                render: "Tecnologia cadastrada com sucesso!",
                type: "success",
                isLoading: false,
                theme: "dark",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setModalCreate(false);
        } catch (error) {
            toast.update(id, {
                render: "Está tecnologia já foi cadastrada!",
                type: "error",
                isLoading: false,
                theme: "dark",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <ContactsContext.Provider
            value={{
                contacts,
                setContacts,
                modalCreate,
                setModalCreate,
                createContact,
            }}
        >
            {children}
        </ContactsContext.Provider>
    );
};
