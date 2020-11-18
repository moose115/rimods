import Head from 'next/head';
import Layout from '../comps/Layout';
import styles from '../styles/Home.module.css';
import Menu from '../comps/Nav';
import ModResults from '../comps/ModResults';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Menu /> */}

      <main className={styles.main}>
        <img src="/assets/title.png" alt="Rimods" />

        <ModResults />

      </main>
    </Layout>
  );
}
