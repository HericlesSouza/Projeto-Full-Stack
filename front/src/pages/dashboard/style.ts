import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { Button } from "../../components/button";
import { FiAlertTriangle } from "react-icons/fi"

export const StyledDiv = styled.div`
  header {
    width: 100vw;
    border-bottom: 1px solid var(--grey-3);

    & > div {
      padding: 29px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        color:var(--color-primary);
      }
    }

    a {
      text-align: center;
      border-radius: var(--border-radius);
      color: var(--white);
      text-decoration: none;
      width: max-content;
      background: var(--grey-2);
      border: 1px solid var(--grey-2);

      :hover {
        background: var(--grey-1);
        border: 1px solid var(--grey-1);
      }

      font-weight: var(--font-weight-2);
      font-size: var(--headline);
      line-height: 28px;
      padding: 8px 16px;
    }
  }

  & > section:nth-child(2) {
    margin-top: 35px;
    border-bottom: 1px solid var(--grey-3);

    & > div {
      padding: 0 20px;

      @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 35px;
      }

      h1 {
        font-weight: var(--font-weight-3);
        font-size: var(--title-3);
        line-height: 28px;
        color: var(--grey-0);
        text-align: center;
      }

      p {
        margin: 10px 0 35px 0;
        font-size: var(--headline-1);
        line-height: 22px;
        color: var(--grey-1);

        @media (min-width: 1024px) {
          margin: 0;
        }
      }
    }
  }

  & > section:nth-child(3) {
    padding: 0 20px;
    margin-top: 26px;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-weight: var(--font-weight-2);
        font-size: var(--title-4);
        line-height: 18px;
        color: var(--grey-0);
      }

      & > button > img {
        width: 12px;
        height: 12px;
      }
    }

    .no-technologies {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--grey-0);
      gap: 20px;
    }

    .div-list-technologies {
      margin-top: 31px;
      width: 100%;
      height: max-content;
      max-height: 500px;
      background-color: var(--grey-3);
      border-radius: var(--border-radius);

      ul {
        width: 100%;
        max-height: 500px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 23px;
        overflow-y: auto;

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: var(--color-primary);
          border-radius: 20px;
          border: 3px solid var(--color-primary);
        }
      }

      ul > li {
        padding: 13px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--grey-4);
        min-height: 50px;
        border-radius: var(--border-radius);

        :hover {
          transition: 0.5s;
          cursor: pointer;
          background-color: var(--grey-2);
          div > span {
            transition: 0.5s;
            color: var(--grey-0);
          }
        }
      }

      ul > li > h2 {
        font-weight: var(--font-weight-3);
        font-size: var(--title-1);
        line-height: 22px;
        color: var(--white);

        @media (min-width: 1024px) {
          font-size: var(--title-2);
        }
      }

      li > div {
        display: flex;
        align-items: center;
        gap: 25px;

        span {
          font-size: var(--headline-1);
          line-height: 22px;
          color: var(--grey-1);
        }

        button {
          background-color: transparent;
          border: none;
          display: none;

          @media (min-width: 425px) {
            display: block;
          }
        }
      }
    }
  }
`;

export const Trash = styled(BsTrash)`
  color: var(--grey-1);
  width: 25px;
  height: 25px;

  :hover {
    color: var(--grey-0);
    cursor: pointer;
  }
`;

export const PersonButton = styled(Button)`
  background-color: blue;
`;

export const Alert = styled(FiAlertTriangle)`
  color: var(--color-primary);
  width: 100px;
  height: 100px;
`