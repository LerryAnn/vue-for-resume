import header from "@/assets/images/header.jpg";
import project0 from "@/assets/images/project0.jpg";
import project1 from "@/assets/images/project1.jpg";
import project2 from "@/assets/images/project2.jpg";
import project3 from "@/assets/images/project3.jpg";
import project4 from "@/assets/images/project4.jpg";
import project5 from "@/assets/images/project5.jpg";
import project6 from "@/assets/images/project6.jpg";
import project7 from "@/assets/images/project7.jpg";
import hplogo from "@/assets/images/hplogo.jpg";
import yqxcxlogo from "@/assets/images/yqxcxlogo.jpg";
import zxtxlogo from "@/assets/images/zxtxlogo.png";
import web from "@/assets/images/web.png";
import css from "@/assets/images/css.png";
import js from "@/assets/images/js.png";
import h5 from "@/assets/images/h5.png";
export default {
  userList:[],
  /**
   * nav list
   */
  showNav:false,
  activeNav:0,
  navList:[
    { index: 0, myLink:true,text: "关于我", link: "/home" },
    { index: 1, myLink:true,text: "找东家", link: "/search" },
    { index: 2, myLink:true,text: "项目集", link: "/project" },
    { index: 3, myLink:false,text: "轮回境", link: "https://www.showdoc.cc/liyang" },
    { index: 4, myLink:true,text: "联系我", link: "/project" },
  ],
  /**
   * home page
   */
  header:header,
  name:'李洋',
  phone:'13580100375',
  mail:'519902329@qq.com',
  summary:'越努力，越幸运',
  tagsList:[
    '前端工程师',
    'Vue',
    'HTML',
    'JavaScript',
    'React',
    'CSS'
  ],
  /**
   * search page
   */
  
  /**
   * project page
   */
  title:'项目案例',
  content:'项目产品涉及领域包括教育、体育行业及部分政府机构相关单位，主要使用HTML、CSS、jQuery、Vue及相关组件库对其前端页面框架进行搭建，产品包括后台管理系统、企业及政府官方网站、微信网页、微信小程序、手机App及桌面应用等。',
  itemList: [
    { index: 0, imageUrl: zxtxlogo ,url:'http://yst.51jobtx.com',title:'职行天下--粤师通',text:'该项目包含职行天下教育--粤师通官网、微信小程序、后台管理系统三大块,核心功能包括个人购课、直播上课、题库做题、错题笔记等。'},
    { index: 1, imageUrl: hplogo ,url:'http://www.hpwyxh.com',title:'广州市黄埔区物业管理行业协会',text:'黄埔物业管理协会官网，重构原网站样式框架，板块更鲜明，界面更简洁。'},
    { index: 2, imageUrl: yqxcxlogo,url:'javascript:void(0)',title:'云雀教务',text:'云雀教务小程序，核心功能包括购课看课、打卡签到、做题等。' }
  ],
  carouselList: [
    { index: 0, imageUrl: project0 },
    { index: 1, imageUrl: project1 },
    { index: 2, imageUrl: project2 },
    { index: 3, imageUrl: project3 },
    { index: 4, imageUrl: project4 },
    { index: 5, imageUrl: project5 },
    { index: 6, imageUrl: project6 },
    { index: 7, imageUrl: project7 }
  ],
  buttonOptionList: [
    { content: "详情", index: 0 },
    { content: "详情", index: 1 },
    { content: "详情", index: 2 }
  ],
  /**
   * detail page
   */
  projectId:'',
  projectDetailList:[
    {index:0,title:'职行天下--粤师通',content:'zxtxxxxxxxxxxxx'},
    {index:1,title:'职行天下--粤师通',content:'zxtxxxxxxxxxxxx'},
    {index:2,title:'云雀教务',content:'zxtxxxxxxxxxxxx'},
  ]
}