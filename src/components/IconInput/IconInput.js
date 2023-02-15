import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": 16 + "px" }}>
        <Icon id={icon} size={16} />
      </IconWrapper>
      <TextInput {...delegated} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  height: ${24 / 16}rem;
  border: 0;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
  font-weight: 400;

  }
`;

export default IconInput;
