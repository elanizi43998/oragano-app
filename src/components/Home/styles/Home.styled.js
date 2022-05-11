import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 20px 0px;
  justify-content: space-between;
  flex-direction: ${({ layout }) => layout || 'row'};
  transition: all 0.2s ease-in-out;
  img {
    width: 300px;
  }
  .content {
    display: grid;
    grid-template-rows: 1fr 2fr;
  }

  .content > h1 {
    font-family: var(--Organo);
    color: var(--orange);
  }
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
