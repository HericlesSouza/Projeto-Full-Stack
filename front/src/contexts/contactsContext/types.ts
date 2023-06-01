export interface iContactsProviderProps {
    children: React.ReactNode;
}

export interface iContactsProviderValue {
    contacts: iContact[];
    setContacts: React.Dispatch<React.SetStateAction<iContact[]>>
    modalCreate: boolean;
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
    createContact: (data: iCreateContact) => Promise<void>;
    modalEdit: boolean;
    setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
    contactSelected: iContact;
    setContactSelected: React.Dispatch<React.SetStateAction<iContact>>;
    openModalEditContact: (event: any) => void;
    editContact: (data: iCreateContact) => Promise<void>;
    deleteContact: () => Promise<void>;
    modalEditUser: boolean
    setModalEditUser: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iCreateContact {
    full_name: string,
    email: string,
    phone: string,
    [key: string]: any
}

export interface iContact extends iCreateContact {
    id: string,
    created_at: string,
}