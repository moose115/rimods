import { ChevronRight } from '@styled-icons/material-outlined';
import React from 'react';
import styled from 'styled-components';
import { useMods } from '../contexts/modsContext';
import tags from '../db/tags';
import _Box from './Box';
import Button from './Button';

const Box = styled(_Box)`
  grid-area: search;
`;

const SearchContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;

  .filters__button {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  padding: 0.5em;
  background: var(--background-input);
  border: 1px solid var(--border-input);
  border-radius: 5px;
  outline: none;
  color: inherit;

  &:focus {
    border: 1px solid var(--border-input-bright);
  }
`;

const Chevron = styled(ChevronRight)<{ isOpen: boolean }>`
  width: 1em;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
`;

const TagsContainer = styled.div<{ isOpen: boolean }>`
  margin-top: ${(props) => (props.isOpen ? '1em' : '0')};
  padding: ${(props) => (props.isOpen ? '.5em' : '0')};
  max-width: 800px;
  width: 100%;
  height: ${(props) => (props.isOpen ? '20em' : '0')};
  display: flex;
  flex-flow: column nowrap;
  gap: 1em;
  background: var(--background-inner);
  border: ${(props) => (props.isOpen ? '1px solid var(--border-input)' : '0')};
  overflow-y: scroll;

  img {
    width: 20px;
  }

  input[type='checkbox'] {
    display: none;
  }
`;

const TagLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  fetchModsAndSetMods: () => Promise<void>;
};

// debounce fetchModsAndSetMods
const debounce = (fn: () => void, delay: number) => {
  let timeout: number | null = null;
  console.log('debounce');
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      fn.apply(null, ...args);
      console.log('debounced');
    }, delay);
  };
};

const ModSearch = ({ fetchModsAndSetMods }: Props) => {
  // selected tags
  const [selectedTags, setSelectedTags] = React.useState([]);
  // tags open
  const [tagsOpen, setTagsOpen] = React.useState(false);
  // query
  // const [query, setQuery] = React.useState('');

  const { setQuery } = useMods();

  return (
    <Box>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={(e) => {
            const title = e.target.value;
            setQuery((prev) => ({ ...prev, title }));
            // debounce(fetchModsAndSetMods, 500)(e);
          }}
        />
        <Button link={false} onClick={() => fetchModsAndSetMods()}>
          Search
        </Button>
        <Button
          as="button"
          className="filters__button"
          link={false}
          onClick={() => setTagsOpen(!tagsOpen)}
        >
          Filters
          {' '}
          <Chevron isOpen={tagsOpen} />
        </Button>
      </SearchContainer>
      <TagsContainer isOpen={tagsOpen}>
        {tags.sort().map((tag) => (
          <TagLabel key={tag.name} title={tag.description}>
            {tag.name}
            <img
              src={
                selectedTags.includes(tag)
                  ? '/assets/CheckOn.png'
                  : '/assets/CheckOff.png'
              }
              alt={tag.name}
            />
            <input
              type="checkbox"
              name={tag.name}
              value={tag.name}
              onChange={(e) => {
                const { checked } = e.target;
                if (checked) {
                  setSelectedTags([...selectedTags, tag]);
                } else {
                  setSelectedTags(selectedTags.filter((t) => t !== tag));
                }
                debounce(fetchModsAndSetMods, 2000);
                console.log(selectedTags);
              }}
            />
          </TagLabel>
        ))}
      </TagsContainer>
    </Box>
  );
};

export default ModSearch;
