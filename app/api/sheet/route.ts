/**
 * @required INKEEP_API_KEY - The API key for Inkeep
 * @required INKEEP_ORGANIZATION_DISPLAY_NAME - The organization's display name (defaults to "Your Organization Name")
 * @required INKEEP_PRIMARY_BRAND_COLOR - The brand's primary color (defaults to "#26D6FF")
 */

// Default values for optional environment variables
const organizationDisplayName =
	process.env.INKEEP_ORGANIZATION_DISPLAY_NAME || "Your Organization Name";
const primaryBrandColor = process.env.INKEEP_PRIMARY_BRAND_COLOR || "#26D6FF";

const response = `<!doctype html>
<html lang="en" style="height: 100%">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Open Sheet</title>
    <script id="inkeep-script" src="https://cdn.jsdelivr.net/npm/@inkeep/cxkit-js@0.5/dist/embed.js" type="module"
      defer></script>
    <script type="module" defer>
      console.log("running inkeep embed script");
      const inkeepWidget = Inkeep.EmbeddedChat("#ikp-embedded-chat-target", {
        baseSettings: {
          apiKey: "{{INKEEP_API_KEY}}", // required
          organizationDisplayName: "{{INKEEP_ORGANIZATION_DISPLAY_NAME}}",
          primaryBrandColor: "{{INKEEP_PRIMARY_BRAND_COLOR}}",
          theme: {
            styles: [
              {
                key: "inkeep-styles",
                type: "style",
                value: ".ikp-ai-chat-wrapper { box-shadow: none; height: 100%; max-height: 100%; }",
              }
            ]
          }
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
		"{{INKEEP_ORGANIZATION_DISPLAY_NAME}}",
		process.env.INKEEP_ORGANIZATION_DISPLAY_NAME || "Your Organization Name",
	)
	.replace(
		"{{INKEEP_PRIMARY_BRAND_COLOR}}",
		process.env.INKEEP_PRIMARY_BRAND_COLOR || "#26D6FF",
	);

export async function POST() {
	return new Response(response, {
		status: 200,
		headers: { "content-type": "text/html; charset=utf-8" },
	});
}
