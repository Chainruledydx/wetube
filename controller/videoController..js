import routes from "../routes";
import Video from "../models/Video"

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({_id : -1}); //DB의 모든 VIDEO를 가져옴
    // try / catch 덕분에 여기서 에러가 발생해도 캐치쪽으로 넘어갑니다.
    res.render("home", { pageTitle: "Home", videos });
  } catch(e) {
    console.log(e)
    res.render("home", { pageTitle: "Home", videos });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({title : {$regex: searchingBy, $options : "i"}})
  } catch(e) {
    console.log(e)
  }
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const { title, description } = req.body;
  const { path } =  req.file;
  const newVideo = await Video.create({
    fileUrl: path,
    title : title,
    description : description
  })
  console.log(newVideo)
  res.redirect(routes.videoDetail(newVideo.id));
  // Todo : upload and save video
  // 생성하고 나서 새롭게 생성된 비디오에 ID 부여하고 해당 ID의 detail페이지로 리다이렉트
};

export const videoDetail = async (req, res) =>{
  const {params : {id}} = req
  try {
    const video = await Video.findById(id)
    res.render("videoDetail", { pageTitle: video.title, video : video });
  } catch (e) {
    console.log(e)
    res.redirect(routes.home)
  }
};

export const getEditVideo = async (req, res) =>{
  const {params : {id}} = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle: `Edit ${video.title}`, video})
  } catch (e) {
    res.redirect(routes.home)
  }
  res.render("editVideo", { pageTitle: "editVideo" });
}

export const postEditVideo = async (req, res) => {
  const {params : {id}, body: {title, description}} = req;
  try {
    await Video.findOneAndUpdate({id, title, description})
    res.redirect(routes.videoDetail(id))
  } catch (e) {
    res.redirect(routes.home)
  }
}
  
export const deleteVideo = async (req, res) =>{
  const {params : {id}} = req;
  try {
    await Video.findOneAndRemove({_id : id})
  } catch (e) {

  }
  res.redirect(routes.home)
}
