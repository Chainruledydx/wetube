import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  upload,
  videoDetail,
  videos,
} from "../controller/videoController.";
import { uploadVideo } from "../middlewears";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get("/", videos);

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo)

//delet
videoRouter.get(routes.deleteVideo(), deleteVideo);

//detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
