export default {
  setImage(state, image) {
    state.image = image;
  },
  setBack(state) {
    state.isBack = true;
    if (process.browser) localStorage.setItem("isBack", true);
  },
  notBack(state) {
    state.isBack = false;
    if (process.browser) localStorage.setItem("isBack", false);
  },
  // setActiveIconFooter(state, icon) {
  //   state.activeIcon = icon;
  //   if (process.browser) localStorage.setItem("activeIcon", icon);
  // },
};
