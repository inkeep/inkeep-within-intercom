"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function EndpointListing() {
	const [initializeUrl, setInitializeUrl] = useState("");
	const [submitUrl, setSubmitUrl] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setInitializeUrl(`${window.location.href}api/initialize`);
			setSubmitUrl(`${window.location.href}api/submit`);
		}
	}, []);

	return (
		<>
			<p style={{ padding: "0 25px" }}>
				You'll need to copy these below values into your Intercom App Canvas Kit
				configuration. For more details, refer to the&nbsp;
				<a
					href="https://developers.intercom.com/docs/build-an-integration/getting-started/build-an-app-for-your-messenger/#add-the-webhooks"
					target="_blank"
					rel="noreferrer"
				>
					Intercom documentation
				</a>
				.
			</p>
			<div className={styles.urlContainer}>
				<p>Initialize flow webhook URL:</p>
				<input
					type="text"
					value={initializeUrl}
					readOnly
					className={styles.urlInput}
				/>
				<button
					type="button"
					onClick={() => navigator.clipboard.writeText(initializeUrl)}
					className={styles.copyButton}
				>
					Copy
				</button>
			</div>
			<div className={styles.urlContainer}>
				<p>Submit flow webhook URL:</p>
				<input
					type="text"
					value={submitUrl}
					readOnly
					className={styles.urlInput}
				/>
				<button
					type="button"
					onClick={() => navigator.clipboard.writeText(submitUrl)}
					className={styles.copyButton}
				>
					Copy
				</button>
			</div>
		</>
	);
}
