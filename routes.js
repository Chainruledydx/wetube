// 늘 URL 주소를 기억하면서 사용하기엔 버거우니까,
// 변수로써 만들고 이걸 export해서 변수로 URL에 접근하기로 합시다.

// GLOBAL STUFF
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//USERS STUFF
const USERS = "/users";
const USER_DETAIL = "/:id"; // :id는 가변형 데이터로써 무엇이든 들어갈 수 있다는 의미입니다. ex) /users/1
const EDIT_PROFILE = "/editProfile";
const CHANGE_PASSWORD = "/changePassword";

const REF_EDIT_PROFILE = "/users/editProfile";
const REF_CHANGE_PASSWORD = "/users/changePassword";

//Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; // 또한.. :id와 같이 :이 붙은 것을 보면 express가 똒똒해서 '아 이건 가변값이구나'합니다.
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
  refEditProfile: REF_EDIT_PROFILE,
  refChangePassword: REF_CHANGE_PASSWORD,
};

export default routes;
