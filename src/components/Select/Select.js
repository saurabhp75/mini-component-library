import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

/* Invisible floating native select tag in front 
   of presentational component */

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id={"chevron-down"} stroke-width={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  ${"" /* isolation: isolate; */}
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  ${"" /* z-index: 2; */}
  ${'' /* appearance: none; */}
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${
    "" /* Set focus on presentaional element when native select is focused ???*/
  }
  ${NativeSelect}:focused + & {
    ${"" /* Fallback, in case the second one isn't available */}
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  ${"" /* Equidistant from top and bottom */}
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  ${"" /* z-index: 1; */}
  pointer-events: none;
`;

export default Select;
