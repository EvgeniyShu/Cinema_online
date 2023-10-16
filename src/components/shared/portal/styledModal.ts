import { styled } from "styled-components";

export const SectionModal = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 200px);
  z-index: 11;
  background: transparent;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 30px;

  background: transparent;
  color: orange;
  border: none;
`;
