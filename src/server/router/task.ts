import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from '@trpc/server'

export const taskRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.task.findMany();
    },
  })
  .mutation("create", {})