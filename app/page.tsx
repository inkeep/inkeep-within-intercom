import Image from "next/image";
import styles from "./page.module.css";
import IntercomComponent from "./intercom";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntercomComponent />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/inkeep-logo.png"
          alt="Inkeep Logo"
          width={150}
          height={36}
          priority
        />
        {/* <h2>embedded within your Intercom messenger.</h2> */}
        <p>Embedded with your Intercom messenger.</p><p>Try it out below.</p>
      </div>
      <div> {/* Empty second column */}
      </div>
    </main>
  );
}
