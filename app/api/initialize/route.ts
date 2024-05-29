export function GET() {
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
              url: "https://f97e3e58-e408-4247-bf30-e81e5d5f6626-00-ixd6dvzx9wg.riker.replit.dev:3000/open-sheet",
            },
          },
        ],
      },
    },
  });
}

