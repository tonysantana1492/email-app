import EmailList from "../components/EmailList.vue";
import MessageView from "../components/MessageView.vue";
import VueRouter from 'vue-router';
import Vue from "vue";

const routes = [
  {
    path: '/',
    name: 'EmailList',
    component: EmailList
  },
  {
    path: '/message/:id',
    name: 'MessageView',
    component: MessageView,
    props: true
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '', //process.env.BASE_URL,
  routes
});

export default router;
