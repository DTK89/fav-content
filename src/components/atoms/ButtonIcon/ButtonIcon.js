import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  margin: 5px auto;
  border: none;
  border-radius: 15px;
  background-image: url(${({ icon }) => icon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50%;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
