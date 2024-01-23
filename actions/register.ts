"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatgedFields = RegisterSchema.safeParse(values);

  if (!validatgedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatgedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Ensure Email has not taken

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO : Send verificaiton token email

  return { succes: "User created!" };
};
