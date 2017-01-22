window.onload = function () {
  activateAnimations();
}//onload

function activateAnimations() {

  $("#mainText").velocity(
    {
      opacity: 1
    },
    {
      duration: 3000,
      visibility: "visible"
    });

}//activateAnimations
