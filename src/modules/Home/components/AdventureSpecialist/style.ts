'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 40px 0;
  padding-bottom: 0;

  .section-title-wrapper {
    margin-top: 10px;
  }

  .adventure-specialist-content {
    display: flex;
    margin-bottom: 40px;

    .adventure-expert-list {
      flex: 0 0 60%;
      display: flex;
      gap: 10px;
    }

    .adventure-contact-us {
      flex: 0 0 40%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .call-us-text {
        font-size: 24px;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 400;
      }

      .contact-us {
        margin-top: 20px;
        font-size: 24px;
        font-family: ${({ theme }) => theme.fonts.poppins};

        &:hover {
          text-decoration: underline;
        }
      }
      .call-btn {
        margin-top: 20px;
      }
    }
  }
`;
