import http from "@/lib/http";
import {
  RegisterBodyType,
  RegisterResType,
  SignInBodyType,
  SigninResType,
  validateEmailBodyType,
  validateEmailResType,
} from "@/schemaValidations/auth.schema";

const authApiRequest = {
  login: (body: SignInBodyType) =>
    http.post<SigninResType>("api/v1/auth/login", body),
  validateEmail: (params: validateEmailBodyType) =>
    http.get<validateEmailResType>(
      `api/v1/auth/validate-email?code=${params.code}&email=${params.email}`
    ),
  register(body: RegisterBodyType) {
    return http.post<RegisterResType>("api/v1/auth/register", body);
  },
};

export default authApiRequest;