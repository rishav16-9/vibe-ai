import { getUsageStatus } from "@/lib/usgae";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const usageRouter = createTRPCRouter({
  status: protectedProcedure.query(async () => {
    try {
      const result = getUsageStatus();
      return result;
    } catch {
      return null;
    }
  }),
});
