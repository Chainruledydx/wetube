import express from "express";
import {
  getJoin,
  getLogin,
  login,
  logout,
  postJoin,
  postLogin,
} from "../controller/userController";
import { home, search } from "../controller/videoController.";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home); // get 요청이 오면, home 함수 실행하고 routes.home으로 보내.

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
