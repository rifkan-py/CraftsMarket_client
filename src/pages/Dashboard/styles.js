import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const Sidebar = styled.aside`
  flex: 1;
  min-height: 100vh;
  background: #105680;
  top: 0;
  position: sticky;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 0;
`;
export const MainContent = styled.main`
  flex: 4;
  padding: 2rem;
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

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  a{
    color: #bae5ff;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 14px;
    &:hover{
      background: #093f60;
    }
  };
  }
`;

export const DashboardLabel = styled.h2`
  margin-bottom: 2rem;
  padding: 0 20px;
  color: #bae5ff;
`;
export const Logout = styled.div`
  padding: 0 20px;
`;
