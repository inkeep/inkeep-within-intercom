export function POST() {
	return Response.json({
		canvas: {
			content: {
				components: [
					{
						type: "text",
						id: "title",
						text: "Need Faster Answers?",
						align: "center",
						style: "header",
					},
					{
						type: "text",
						id: "message",
						text: "Got technical questions? Get instant answers with our AI docs assistant!",
						align: "center",
						style: "paragraph",
					},
					{
						type: "button",
						label: "🚀 Ask Now!",
						style: "primary",
						id: "trigger_button",
						action: {
							type: "sheet",
							url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/sheet`,
						},
					},
				],
			},
		},
	});
}
