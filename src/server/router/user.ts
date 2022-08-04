import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from '@trpc/server'


export const userRouter = createRouter()
  .query("getByEmail", {
    input: z.object({
      email: z.string().email()
    }),
    async resolve({ input, ctx }) {
      const { email } = input
      const user = await ctx.prisma.user.findFirst({
        where: {
          email: email
        }
      })
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No user with email '${email}'`,
        });
      }
    }
  })