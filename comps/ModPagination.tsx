import React from 'react';
import styled from 'styled-components';
import { useMods } from '../contexts/modsContext';
import Button from './Button';

const StyledDiv = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5em;
`;

const ModPagination = () => {
  // useMods();
  const { query, setQuery, modsCount } = useMods();
  const { page, limit } = query;
  const maxPage = Math.ceil(modsCount / limit);
  const adjecentPages = 2;

  const handlePageChange = (p: number) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      page: p,
    }));
  };

  return (
    <StyledDiv>
      <Button
        as="button"
        type="button"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 0}
      >
        Previous
      </Button>
      {Array.from(Array(maxPage).keys()).map((p) => {
        if (
          p === 0
          || p === maxPage - 1
          || (p >= page - adjecentPages && p <= page + adjecentPages)
        ) {
          return (
            <>
              {p === maxPage - 1 && page < maxPage - 1 - adjecentPages && '...'}
              <Button
                as="button"
                type="button"
                onClick={() => handlePageChange(p)}
                disabled={p === page}
              >
                {p + 1}
              </Button>
              {p === 0 && page > adjecentPages + 1 && '...'}
            </>
          );
        }
        return null;
      })}
      <Button
        as="button"
        type="button"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === maxPage - 1}
      >
        Next
      </Button>
    </StyledDiv>
  );
};

export default ModPagination;
