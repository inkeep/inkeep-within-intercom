"use client";

import Intercom from "@intercom/messenger-js-sdk";

export default function IntercomComponent() {
	if (!process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
		throw new Error("NEXT_PUBLIC_INTERCOM_APP_ID is not set");
	}
	Intercom({
		app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID || "",
	});
	return null;
}
