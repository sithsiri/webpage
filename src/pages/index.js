import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sithindu Sirisooriya</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Sithindu Sirisooriya
        </h1>

        <p className={styles.description}>
          Hi! I'm Sithindu, a junior studying computer science and machine learning at SMU. I like making cool stuff and you can find some of it here!
        </p>

        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>See some of the allegedly "cool" stuff mentioned above</p>
          </Link>

          <div className={styles.card}>
            <h3>Coming soon... &rarr;</h3>
            <p>I'm cooking something</p>
          </div>

          <a
            href="https://github.com/sithsiri"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>See my GitHub. I know that contribution graph is important</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sithindu/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>
              Also see my LinkedIn. You know, I have always wondered why the i is capitalized
            </p>
          </a>
        </div>
      </main>

      <footer>
        beans beans beans
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
