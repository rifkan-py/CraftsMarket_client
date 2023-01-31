import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;
  margin-top: 2rem;
  display: flex;

  > div > div {
    margin-top: 4rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #105680;
      color: white;
    }
  }
`;
export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const NameDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TableContainer = styled.div`
  flex: 4;
`;

export const Name = styled.h3``;
