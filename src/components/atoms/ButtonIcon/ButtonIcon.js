import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 15px;
  background-image: url(${({ icon }) => icon});
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50%;
`;

export default ButtonIcon;
