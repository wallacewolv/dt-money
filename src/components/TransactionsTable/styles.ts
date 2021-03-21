import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 3fr 1fr;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      background: var(--shape-table);
      border-radius: 0.5rem;
      color: var(--text-table);
      font-weight: 600;
      font-size: 1.1rem;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.5rem;
    
      &:first-child {
        color: var(--text-title)
      }

      &.deposit {
        color: var(--green);
      }
      
      &.withdraw {
        color: var(--red);
      }
    }
  }

  div {
    height: 22rem;
    width: 23rem;
    padding: 2rem;

    img { 
      max-width: 18rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 500;
      color: #FFF;
    }
  }
`;