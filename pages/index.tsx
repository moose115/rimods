import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Layout from '../comps/Layout';
import ModResults from '../comps/ModResults';
import ModSearch from '../comps/ModSearch';
import ModType from '../types/modType';
import { ModsProvider, Query } from '../contexts/modsContext';

const Main = styled.main`
  margin: 1em auto 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 1em;
  grid-template-areas:
    'results search'
    'results links';
`;

const fetchMods = async ({
  title, tags, page, limit,
}: Query): Promise<{mods: ModType[]; count: number}> => {
  const response = await fetch(
    `/api/mods?title=${title}&tags=${tags.join(',')}&page=${page || 0}&limit=${limit || 20}`,
  );
  const data = await response.json();
  return data;
};

export default function Home() {
  // mods
  const [mods, setMods] = React.useState<ModType[]>([]);
  const [modsCount, setModsCount] = React.useState(0);
  // isFetching
  const [isFetching, setIsFetching] = React.useState(false);
  const [query, setQuery] = React.useState({
    title: '',
    tags: [],
    sort: '',
    order: '',
    limit: 20,
    page: 0,
  });

  // fetch mods on the first mount
  const fetchModsAndSetMods = async () => {
    setIsFetching(true);
    const data = await fetchMods(query);
    setMods(data.mods);
    setModsCount(data.count);
    setIsFetching(false);
  };
  React.useEffect(() => {
    fetchModsAndSetMods();
  }, []);

  // fetch mods on query.page change
  React.useEffect(() => {
    fetchModsAndSetMods();
  }, [query.page]);

  return (
    <ModsProvider value={{
      mods,
      setMods,
      query,
      setQuery,
      modsCount,
      isLoading: isFetching,
      setIsLoading: setIsFetching,
    }}
    >
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <ModSearch
            fetchModsAndSetMods={fetchModsAndSetMods}
          />
          <ModResults />
        </Main>
      </Layout>
    </ModsProvider>
  );
}
