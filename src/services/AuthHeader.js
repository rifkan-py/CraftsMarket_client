export default function AuthHeader() {
  const token = Cookie.get("token");
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
