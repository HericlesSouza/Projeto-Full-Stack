import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactsContext } from "../../../contexts/contactsContext/contactsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContactSchema } from "./modalsSchema";
import { iCreateContact } from "../../../contexts/contactsContext/types";
import { Modal } from "../../../components/modal";
import {
    DivContentModal,
    DivHeaderModal,
    IconCloseModal,
    StyledForm,
} from "./style";
import { Input } from "../../../components/input";
import { StyledInputMask } from "../../signUp/style";
import { Button } from "../../../components/button";

export const ModalCreateContact = () => {
    const { setModalCreate, createContact } = useContext(ContactsContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iCreateContact>({
        mode: "onChange",
        resolver: yupResolver(createContactSchema),
    });

    const submit: SubmitHandler<iCreateContact> = async (data) => {
        await createContact(data);
    };

    return (
        <Modal>
            <StyledForm onSubmit={handleSubmit(submit)} noValidate>
                <DivHeaderModal>
                    <h1>Cadastrar Contato</h1>
                    <button onClick={() => setModalCreate(false)}>
                        <IconCloseModal />
                    </button>
                </DivHeaderModal>
                <DivContentModal>
                    <div>
                        <label htmlFor="full_name">Nome completo</label>
                        <Input
                            id="full_name"
                            type="text"
                            placeholder="Nome da tecnologia..."
                            register={register("full_name")}
                        />
                        {errors.full_name && (
                            <p className="error">{errors.full_name.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="Nome da tecnologia..."
                            register={register("email")}
                        />
                        {errors.email && (
                            <p className="error">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="phone">Contato</label>
                        <StyledInputMask
                            id="phone"
                            placeholder="(XX) XXXXX-XXXX"
                            mask=" (99) 99999-9999"
                            maskChar="_"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="error">{errors.phone.message}</p>
                        )}
                    </div>
                    <Button type="submit" color="btnPrimary" size="medium">
                        Cadastrar Contato
                    </Button>
                </DivContentModal>
            </StyledForm>
        </Modal>
    );
};

export const ModalEditContact = () => {
    const { setModalEdit, contactSelected, editContact, deleteContact } =
        useContext(ContactsContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iCreateContact>({
        mode: "onChange",
        resolver: yupResolver(createContactSchema),
        defaultValues: {
            full_name: contactSelected.full_name,
            email: contactSelected.email,
            phone: contactSelected.phone,
        },
    });

    const submit: SubmitHandler<iCreateContact> = async (data) => {
        console.log(data);
        for (const chave in data) {
            if (
                Object.prototype.hasOwnProperty.call(data, chave) &&
                Object.prototype.hasOwnProperty.call(contactSelected, chave)
            ) {
                if (data[chave] === contactSelected[chave]) {
                    delete data[chave];
                }
            }
        }
        await editContact(data);
    };

    return (
        <Modal>
            <StyledForm onSubmit={handleSubmit(submit)} noValidate>
                <DivHeaderModal>
                    <h1>Detalhes do Contato</h1>
                    <button onClick={() => setModalEdit(false)}>
                        <IconCloseModal />
                    </button>
                </DivHeaderModal>
                <DivContentModal>
                    <div>
                        <label htmlFor="full_name">Nome completo</label>
                        <Input
                            id="full_name"
                            type="text"
                            placeholder="Nome da tecnologia..."
                            register={register("full_name")}
                        />
                        {errors.full_name && (
                            <p className="error">{errors.full_name.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="Nome da tecnologia..."
                            register={register("email")}
                        />
                        {errors.email && (
                            <p className="error">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="phone">Contato</label>
                        <StyledInputMask
                            id="phone"
                            placeholder="(XX) XXXXX-XXXX"
                            mask=" (99) 99999-9999"
                            maskChar="_"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="error">{errors.phone.message}</p>
                        )}
                    </div>
                    <div className="divButtons">
                        <Button type="submit" color="btnPrimary" size="medium">
                            Atualizar Contato
                        </Button>
                        <Button
                            type="button"
                            color="btnGreyLight"
                            size="medium"
                            width="max-content"
                            click={deleteContact}
                        >
                            Excluir
                        </Button>
                    </div>
                </DivContentModal>
            </StyledForm>
        </Modal>
    );
};
