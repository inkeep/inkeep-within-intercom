export function POST(request: Request) {
	return Response.json({
		canvas: {
			content: {
				components: [
					{
						type: "text",
						id: "thanks",
						text: "submit flow is not used",
						align: "center",
						style: "header",
					},
				],
			},
		},
	});
}
