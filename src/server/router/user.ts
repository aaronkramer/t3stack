import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from '@trpc/server'

export const userRouter = createRouter()
  .query("getByEmail", {
    input: z.object({
      data: z.object({
        email: z.string().email()
      }).optional()
    }),
    async resolve({ input, ctx }) {
      if (!input.data?.email) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email is required'
        })
      }
      const { data } = input
      const userData = await ctx.prisma.user.findFirst({
        where: {
          email: data?.email
        }
      })
      if (!userData) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No user with email '${data.email}'`,
        });
      }
      return userData
    }
  })