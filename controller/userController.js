import routes from "../routes";

export const getJoin = (req, res) => res.render("Join", { pageTitle: "Join" });

export const postJoin = (req, res) => {
  const { name, email, password, password2 } = req.body;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    // To Do : Register user
    // To Do 2 : Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("Login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  // DB추가하면 사용자 아디-비번이 같은지 검사
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process 로그아웃
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "userDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
