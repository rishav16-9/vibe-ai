import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are en expert developer. You write readable, maintainable, scalable code",
      model: openai({ model: "gpt-4o" }),
    });
    // TODO: Add open ai api key for getting the dersired output
    console.log(event.data.value);
    const { output } = await codeAgent.run(
      `write the following snippet ${event.data.value}`
    );

    return { output };
  }
);
