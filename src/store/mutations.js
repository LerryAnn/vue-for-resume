export default {
  toggleNav(state){
    state.showNav = !state.showNav
  },
  checkNav(state,index){
    state.activeNav = index
    state.showNav = false
  },
  hidNav(state) {
    state.showNav = false
  },
  getUserList(state,data){
    state.userList = data
  },
  getProjectId(state,id){
    state.projectId = id
  }
}