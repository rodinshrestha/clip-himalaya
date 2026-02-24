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
    }
  }
`;
