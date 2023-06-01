import { Alert, StyledDiv, Trash } from "./style";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { Button } from "../../components/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ContactsContext } from "../../contexts/contactsContext/contactsContext";
import { ModalCreateContact } from "./Modals";

interface iContact {
    id: string;
    full_name: string;
    email: string;
    phone: string;
}

export const Dashboard = () => {
    const { contacts, setContacts, modalCreate, setModalCreate } = useContext(ContactsContext);

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
                    <h1>Olá, Jeje</h1>
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
                {contacts.length === 0 ? (
                    <div className="no-technologies">
                        <Alert />
                        <h1>
                            Não conseguimos encontrar nenhuma tecnologia
                            cadastrada.
                        </h1>
                    </div>
                ) : (
                    <div className="div-list-technologies">
                        {/* {modalEdit && <ModalEditTechnologies />} */}
                        <ul>
                            {contacts &&
                                contacts.map((element: iContact) => {
                                    return (
                                        <li
                                            key={element.id}
                                            id={element.id}
                                            className="animate__animated animate__fadeInLeft"
                                            // onClick={openModalEditTechnologies}
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
