import styled, { css } from "styled-components";

interface InputProps {
  color?: string
}

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 10.5px 16.5px;
  background: var(--grey-2);
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  font-size: var(--title-1);
  line-height: 26px;
  color: var(--grey-0);
  
  ${({ color }) => {
    switch (color) {
      case "disabled":
        return css`
          color: #868e96;
        `;
    }
  }}

  :focus {
    outline: none;
    border: 2px solid var(--grey-0);
  }

  ::placeholder {
    color: var(--grey-1);
  }
`;
