export interface iContactsProviderProps {
    children: React.ReactNode;
}

export interface iContactsProviderValue {
    contacts: [];
    setContacts: React.Dispatch<React.SetStateAction<[]>>;
    modalCreate: boolean;
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
    createContact: (data: iCreateContact) => Promise<void>;
}

export interface iCreateContact {
    full_name: string,
    email: string,
    phone: string
}