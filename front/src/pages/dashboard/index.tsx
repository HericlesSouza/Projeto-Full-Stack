import { Alert, StyledDiv, Trash } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button } from "../../components/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ContactsContext } from "../../contexts/contactsContext/contactsContext";
import { ModalCreateContact, ModalEditContact } from "./Modals";
import { iContact } from "../../contexts/contactsContext/types";
import { UserContext } from "../../contexts/userContext/userContext";

export const Dashboard = () => {
    const {
        contacts,
        modalCreate,
        setModalCreate,
        modalEdit,
        openModalEditContact,
    } = useContext(ContactsContext);

    console.log(contacts);
    const { user } = useContext(UserContext);

    return (
        <StyledDiv>
            <header>
                <div className="container">
                    <h1>Contacts Plus</h1>
                    <Link to={"/"}>Desconectar</Link>
                </div>
            </header>
            <section>
                <div className="container">
                    <h1>Olá, {user.full_name}</h1>
                    <p>teste</p>
                </div>
            </section>
            <section className="container">
                <div>
                    <h2>Contatos</h2>
                    <Button
                        click={() => setModalCreate(true)}
                        type="button"
                        color="btnGreyDark"
                        width="32"
                    >
                        <AiOutlinePlusCircle size={"30px"} />
                    </Button>
                    {modalCreate && <ModalCreateContact />}
                </div>
                {contacts && contacts.length === 0 ? (
                    <div className="no-technologies">
                        <Alert />
                        <h1>Não conseguimos encontrar nenhum contato.</h1>
                    </div>
                ) : (
                    <div className="div-list-technologies">
                        {modalEdit && <ModalEditContact />}
                        <ul>
                            {contacts &&
                                contacts.map((element: iContact) => {
                                    return (
                                        <li
                                            key={element.id}
                                            id={element.id}
                                            onClick={openModalEditContact}
                                        >
                                            <h2>{element.full_name}</h2>
                                            <div>
                                                <span>{element.phone}</span>
                                                <button>
                                                    <Trash />
                                                </button>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                )}
            </section>
        </StyledDiv>
    );
};
