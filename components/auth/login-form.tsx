import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Dont have an acount?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};
