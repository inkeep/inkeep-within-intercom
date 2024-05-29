const response = `<!doctype html>
<html lang="en" style="height: 100%">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Open Sheet</title>
    <script
      id="inkeep-script"
      src="https://unpkg.com/@inkeep/widgets-embed@0.2.277/dist/embed.js"
      type="module"
      defer
    ></script>
    <script type="module" defer>
      console.log("running inkeep embed script");
      const inkeepWidget = Inkeep().embed({
        componentType: "EmbeddedChat", // required
        targetElement: document.getElementById("ikp-embedded-chat-target"), // required
        properties: {
          baseSettings: {
            apiKey: "{{INKEEP_API_KEY}}", // required
            integrationId: "{{INKEEP_INTEGRATION_ID}}", // required
            organizationId: "{{INKEEP_ORGANIZATION_ID}}", // required
            organizationDisplayName: "Inkeep",
            primaryBrandColor: "#26D6FF",
            theme: {
              components: {
                AIChatPageWrapper: {
                  defaultProps: {
                    size: "expand",
                    variant: "no-shadow",
                  },
                },
              },
            },
          },
        },
      });
    </script>
  </head>
  <body style="margin: 0px; height: 100%">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100%);
      "
    >
      <div style="height: 100%">
        <div id="ikp-embedded-chat-target" style="height: 100%"></div>
      </div>
    </div>
  </body>
</html>
`.replace("{{INKEEP_API_KEY}}", process.env.INKEEP_API_KEY as string)
.replace(
  "{{INKEEP_INTEGRATION_ID}}",
  process.env.INKEEP_INTEGRATION_ID as string,
)
.replace(
  "{{INKEEP_ORGANIZATION_ID}}",
  process.env.INKEEP_ORGANIZATION_ID as string
);


export function POST(request: Request) {

  return new Response(response, { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
}
