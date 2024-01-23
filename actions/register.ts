"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatgedFields = RegisterSchema.safeParse(values);

  if (!validatgedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { succes: "Email Sent!" };
};
