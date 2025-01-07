/**
 * @required INKEEP_API_KEY - The API key for Inkeep
 * @required INKEEP_INTEGRATION_ID - The integration ID for Inkeep
 * @required INKEEP_ORGANIZATION_ID - The organization ID for Inkeep
 * @required INKEEP_ORGANIZATION_DISPLAY_NAME - The organization's display name (defaults to "Your Organization Name")
 * @required INKEEP_PRIMARY_BRAND_COLOR - The brand's primary color (defaults to "#26D6FF")
 */

// Default values for optional environment variables
const organizationDisplayName = process.env.INKEEP_ORGANIZATION_DISPLAY_NAME || "Your Organization Name";
const primaryBrandColor = process.env.INKEEP_PRIMARY_BRAND_COLOR || "#26D6FF";

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
            organizationDisplayName: "{{INKEEP_ORGANIZATION_DISPLAY_NAME}}",
            primaryBrandColor: "{{INKEEP_PRIMARY_BRAND_COLOR}}",
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
`
	.replace("{{INKEEP_API_KEY}}", process.env.INKEEP_API_KEY as string)
	.replace(
		"{{INKEEP_INTEGRATION_ID}}",
		process.env.INKEEP_INTEGRATION_ID as string,
	)
	.replace(
		"{{INKEEP_ORGANIZATION_ID}}",
		process.env.INKEEP_ORGANIZATION_ID as string,
	)
	.replace(
		"{{INKEEP_ORGANIZATION_DISPLAY_NAME}}",
		process.env.INKEEP_ORGANIZATION_DISPLAY_NAME || "Your Organization Name"
	)
	.replace(
		"{{INKEEP_PRIMARY_BRAND_COLOR}}",
		process.env.INKEEP_PRIMARY_BRAND_COLOR || "#26D6FF"
	);

export async function POST() {
	return new Response(response, {
		status: 200,
		headers: { "content-type": "text/html; charset=utf-8" },
	});
}
