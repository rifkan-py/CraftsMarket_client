import styled from "styled-components";

export const CartListWrapper = styled.div``;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;
  margin-top: 50px;

  table {
    border-collapse: collapse;
    width: 100%;
    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #105680;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
    }
  }
`;
