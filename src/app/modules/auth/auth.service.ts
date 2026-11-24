import { prisma } from "../../../lib/index.ts";
import type { IUserLogin, IUserReg } from "./auth.interface.ts";

const userRegister = async (data: IUserReg) => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  if (!user.id) {
    throw new Error("Data required not match");
  }
  return user;
};

const userLogin = async (data: IUserLogin) => {
  const user = prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  //   if(user.password == data.password){

  //   }
  return user;
};

export const authServices = {
  userRegister,
  userLogin,
};
