'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  .aanupuran-bread-crumbs {
    background-color: transparent;
  }
  .annapurna-trekking-information-wrapper {
    display: flex;
    margin-top: 120px;
    padding-bottom: 40px;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      flex-direction: column;
      gap: 60px;
    }

    .annapurna-trekking-list {
      flex: 0 0 60%;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    .trekking-facts-wrapper {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      gap: 100px;
      position: sticky;
      left: 0;
      top: 120px;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        flex-direction: row;
        gap: 40px;

        .annaupurna-trekking-fact-wrapper {
          flex: 1;
        }
        .annapurna-book-with-us-wrapper {
          flex: 1;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        flex-direction: column;
        gap: 40px;
        width: 100%;

        .annaupurna-trekking-fact-wrapper {
          padding: 5px;
          flex: 1;
        }
        .annapurna-book-with-us-wrapper {
          padding: 5px;
          flex: 1;
        }
      }
    }
  }
`;
