import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  height: max-content;
  padding-bottom: 25px;
  background: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);
`;

export const DivHeaderModal = styled.div`
  background: var(--grey-2);
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: var(--font-weight-3);
    font-size: var(--title-2);
    line-height: 24px;
    color: var(--grey-0);
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
  }

`;

export const IconCloseModal = styled(AiOutlineCloseCircle)`
  color: var(--grey-1);
  width: 30px;
  height: 30px;

  :hover {
    color: var(--grey-0);
    cursor: pointer;
  }
`;

export const DivContentModal = styled.div`
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    font-size: var(--headline-1);
    color: var(--grey-0);
    display:inline-block;
    margin-bottom: 10px;
  }

  & > div .error {
    color: var(--color-primary);
    margin-left: 0px;
    margin-top: 5px;
    font-weight: var(--font-weight-2);
    font-size: var(--headline-1);
  }

  .divButtons {
    display: flex;
    gap: 22px;
  }
`;
