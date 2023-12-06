import { contextProps } from "@trpc/react-query/shared";
import { Input } from "postcss";
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
  edit: publicProcedure
    .input(
      z.object({
        id: z.string(),
        position: z.string(),
        company: z.string(),
        location: z.string(),
        status: z.string(),
        type: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.job.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.job.findMany({});
  }),
  getJobById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.job.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
    getStat:publicProcedure.query(async ({ctx})=>{
      const jobStatusCounts = await ctx.db.job.groupBy({
        by: ['status'],
        _count: {
          status: true,
        },
      });

      console.log(jobStatusCounts);
      return jobStatusCounts
    })

});
