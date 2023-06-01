import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color:var(--color-primary);
    user-select: none;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 42px 22.5px;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  background: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);

  @media (min-width: 1024px) {
    margin-top: 38px;
  }

  h2 {
    margin-bottom: 23px;
    text-align: center;
    font-weight: var(--font-weight-3);
    font-size: var(--title-3);
    line-height: 28px;
    color: var(--grey-0);
  }

  label {
    margin: 22px 0 18px 0;
    font-size: var(--title-1);
    color: var(--grey-0);
  }

  button {
    margin-top: 20px;
  }

  span {
    margin-top: 27px;
    text-align: center;
    font-weight: var(--font-weight-2);
    font-size: var(--headline);
    line-height: 14px;
    color: var(--grey-1);
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    width: 100%;
    text-align: center;
    border-radius: var(--border-radius);
    color: var(--white);
    background: var(--grey-2);
    border: 1px solid var(--grey-2);
    font-weight: var(--font-weight-1);
    font-size: var(--title-1);
    line-height: 26px;
    padding: 11px 22px;

    :hover {
      background: var(--grey-1);
      border: 1px solid var(--grey-1);
    }
    
  }

  .error {
    color: var(--color-primary);
    margin-left: 10px;
    margin-top: 5px;
    font-weight: var(--font-weight-2);
    font-size: var(--headline-1);
  }
`;
