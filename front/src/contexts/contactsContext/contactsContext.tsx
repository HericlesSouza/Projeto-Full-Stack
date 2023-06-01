import {
    useState,
    useContext,
    useEffect,
    createContext,
    MouseEvent,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    iContact,
    iContactsProviderProps,
    iContactsProviderValue,
    iCreateContact,
} from "./types";
import { api } from "../../services/api";
import { UserContext } from "../userContext/userContext";
export const ContactsContext = createContext({} as iContactsProviderValue);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
    const { token } = useContext(UserContext);
    const [contacts, setContacts] = useState<iContact[]>([]);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [contactSelected, setContactSelected] = useState<iContact>(
        {} as iContact
    );

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
    }, [modalCreate, modalEdit]);

    const createContact = async (data: iCreateContact) => {
        const id = toast.loading("Por favor espere...");
        try {
            await api.post("contacts", data);

            toast.update(id, {
                render: "Contato cadastrado com sucesso!",
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
                render: "Este nome de contato já foi cadastrado!",
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

    const openModalEditContact = (event: MouseEvent<HTMLButtonElement>) => {
        const contact = contacts.find((element) => {
            return String(element.id) === event.currentTarget.id;
        });
        console.log(event.currentTarget.id, contact);

        setContactSelected(contact!);
        setModalEdit(true);
    };

    const editContact = async (data: iCreateContact) => {
        const id = toast.loading("Por favor espere...");
        try {
            await api.patch(`contacts/${contactSelected.id}`, data);
            toast.update(id, {
                render: "Tecnologia atualizada com sucesso!",
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
            setModalEdit(false);
        } catch (error) {
            console.log(error);
            toast.update(id, {
                render: "Ops, algo deu errado!",
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
        }
    };

    const deleteContact = async () => {
        const id = toast.loading("Por favor espere...");
        try {
            await api.delete(`contacts/${contactSelected.id}`);

            toast.update(id, {
                render: "Tecnologia deletada com sucesso!",
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

            setModalEdit(false);
        } catch (error) {
            toast.update(id, {
                render: "Ops, algo deu errado!",
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
                modalEdit,
                setModalEdit,
                contactSelected,
                setContactSelected,
                openModalEditContact,
                editContact,
                deleteContact,
            }}
        >
            {children}
        </ContactsContext.Provider>
    );
};
