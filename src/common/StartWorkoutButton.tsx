import styled from 'styled-components'

export const WorkoutButton = styled.button`
  width: 55%;
  background-color: ${(props) => props.theme.background.startButton};
  height: 56px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Source Sans Pro, sans-serif;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  z-index: 2;

  @media (max-width: 375px) {
    width: 90%;
    position: fixed;
    bottom: 20px;
    right: auto;
    left: auto;
    -webkit-box-shadow: 0 0 43px 5px rgba(34, 60, 80, 0.9);
    -moz-box-shadow: 0 0 43px 5px rgba(34, 60, 80, 0.9);
    box-shadow: 0 0 43px 5px rgba(34, 60, 80, 0.9);
  }
`
