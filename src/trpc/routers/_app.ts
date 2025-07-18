import { messageRouter } from "@/module/messages/server/procedures";
import { createTRPCRouter } from "../init";
import { projectsRouter } from "@/module/projects/server/procedures";
import { usageRouter } from "@/module/usage/server/procedures";
export const appRouter = createTRPCRouter({
  usage: usageRouter,
  messages: messageRouter,
  projects: projectsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
