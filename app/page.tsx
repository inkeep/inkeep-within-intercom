import Image from "next/image";
import IntercomComponent from "./intercom";
import styles from "./page.module.css";
import EndpointListing from "./endpoints";

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
				<p>Embedded with your Intercom messenger.</p>
				<p>Try it out to the right.</p>

				<EndpointListing />
			</div>
			<div> {/* Empty second column */}</div>
		</main>
	);
}
