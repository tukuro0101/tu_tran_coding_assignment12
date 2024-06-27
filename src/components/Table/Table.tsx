import React from 'react';
import styled from 'styled-components';

interface TableProps {
  headers: string[];
  data: string[][];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  border: 1px solid palevioletred;
  padding: 8px;
  background-color: palevioletred;
  color: white;
`;

const StyledTd = styled.td`
  border: 1px solid palevioletred;
  padding: 8px;
`;

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map(header => (
            <StyledTh key={header}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledTd key={cellIndex}>{cell}</StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
