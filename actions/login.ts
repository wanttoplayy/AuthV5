"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatgedFields = LoginSchema.safeParse(values);

  if (!validatgedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { succes: "Email Sent!" };
};
