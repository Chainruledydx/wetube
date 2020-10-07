import { vidoes } from "../fakeDB";
import routes from "../routes";
//테스트중입니다

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos: vidoes });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("Search", { pageTitle: "Search", searchingBy, videos: vidoes });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = (req, res) => {
  const { file, title, description } = req.body;
  res.redirect(routes.videoDetail(321314));
  // Todo : upload and save video
  // 생성하고 나서 새롭게 생성된 비디오에 ID 부여하고 해당 ID의 detail페이지로 리다이렉트
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
