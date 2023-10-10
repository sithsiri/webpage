import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Projects() {
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
                    Here are a few of the projects I have worked on! If you want to see more, <a href="https://github.com/sithsiri">check out my GitHub profile.</a> Or, <Link href="/">go back home.</Link>
                </p>

                <div className={styles.grid}>
                    <a href="https://sithindu.com/games/numbers/" className={styles.card}>
                        <h3>Numbers &rarr;</h3>
                        <p>A fun little game where you have to do math faster than your friends. Play now!</p>
                    </a>

                    <a href="https://sithsiri.github.io/romajify/" className={styles.card}>
                        <h3>Romajify &rarr;</h3>
                        <p>
                            A page I made a long time ago to convert hiragana and katakana to romaji without having to use a full translation service. Written entirely in HTML5
                        </p>
                    </a>

                    <a href="https://sithsiri.github.io/romajify/" className={styles.card}>
                        <h3>Learn Morse Code &rarr;</h3>
                        <p>
                            A page I made a long time ago to help teach Morse code. Written entirely in HTML5
                        </p>
                    </a>

                    <a
                        href="https://devpost.com/software/flakes#updates"
                        className={styles.card}
                    >
                        <h3>Flakes&rarr;</h3>
                        <p>
                            Flakes comprises the beginnings of a user-centric, AI-powered asset management system. My team and I are proud of what we were able to accomplish at our first-ever hackathon, HackSMU V
                        </p>
                    </a>

                    <a href="https://github.com/sithsiri/webpage" className={styles.card}>
                        <h3>sithsiri/webpage &rarr;</h3>
                        <p>This website was written in Next.js so that I could polish up my React and JSX</p>
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
