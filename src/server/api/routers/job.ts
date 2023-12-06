import { contextProps } from "@trpc/react-query/shared";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const jobRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        position: z.string(),
        company: z.string(),
        location: z.string(),
        status: z.string(),
        type: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.job.create({
        data: input,
      });
    }),
    getAll: publicProcedure.query(({ctx})=>{
      return ctx.db.job.findMany({})
    })
});
