import Vue from 'vue';
import Router from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import * as nameHashPckg from 'eth-ens-namehash';

import VueIntercom from '@mathieustan/vue-intercom';
import VueSocialSharing from 'vue-social-sharing';
import * as amplitude from '@amplitude/analytics-browser';

import app from './mainApp';
import '@/assets/fonts/MaterialDesignIcons/css/materialdesignicons.min.css';
import '@/assets/fonts/Roboto/css/Roboto.css';

import './sentry';
import './components';

/**Dapps Store */
import { dappStoreBeforeCreate } from '../dapps/dappsStore';

const originalPush = Router.prototype.push;
const originalReplace = Router.prototype.replace;
Router.prototype.push = function push(path) {
  return originalPush.call(this, path).catch(err => err);
};
Router.prototype.replace = function push(path) {
  return originalReplace.call(this, path).catch(err => err);
};
Router.prototype.originalPush = originalPush;
Router.prototype.originalReplace = originalReplace;

import router from '@/core/router';

import {
  global as useGlobalStore,
  custom as useCustomStore,
  notifications as useNotificationsStore,
  addressBook as useAddressBookStore,
  articles as useArticlesStore,
  popups as usePopupsStore
} from '@/core/store/index.js';

import LottieAnimation from '@/core/directives/lottie';
import lokalise from '@/core/filters/lokalise';

// etc
import '@/core/plugins/registerServiceWorker';
import vuetify from '@/core/plugins/vuetify';
import apolloProvider from './apolloProvider';
import i18n from './i18n';
import * as locStore from 'store';
import VueLazyLoad from 'vue-lazyload';
import { PiniaVuePlugin, createPinia } from 'pinia';

const pinia = createPinia();

// Directives
Vue.directive('lottie', LottieAnimation);

// Filters
Vue.filter('lokalise', lokalise);

/* eslint-disable */
if (INTERCOM_ID) {
  Vue.use(VueIntercom, { appId: INTERCOM_ID });
}
/* eslint-enable */
Vue.use(VueSocialSharing);

//Router
Vue.use(Router);
Vue.use(PiniaVuePlugin);
Vue.config.productionTip = false;

// setup amplitude
// fake generative 32 hex character
const popupStore = locStore.get('popups-store') || { consentToTrack: false };

amplitude.init(nameHashPckg.hash(VERSION), {
  instanceName:
    process.env.NODE_ENV === 'production' ? 'mew-web-prod' : 'mew-web-dev',
  optOut: popupStore.consentToTrack,
  serverUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://analytics-web.mewwallet.dev/record'
      : 'https://analytics-web-development.mewwallet.dev/record',
  appVersion: VERSION,
  trackingOptions: {
    ipAddress: false
  },
  identityStorage: 'none',
  logLevel: amplitude.Types.LogLevel.None,
  defaultTracking: {
    formInteractions: false,
    pageViews: false
  }
});
Vue.prototype.$amplitude = amplitude;

// Lazy Loader
Vue.use(VueLazyLoad);

new Vue({
  el: '#app',
  i18n,
  router,
  pinia,
  apolloProvider,
  vuetify,
  beforeCreate() {
    const userId = this.$route.query.intercomid
      ? this.$route.query.intercomid
      : uuidv4();
    this.$intercom.boot({ user_id: userId });

    if (locStore.get('mew-testing') === undefined) {
      locStore.set('mew-testing', false);
    }
    const customStore = useCustomStore();
    const globalStore = useGlobalStore();
    const notificationsStore = useNotificationsStore();
    const addressBookStore = useAddressBookStore();
    const articleStore = useArticlesStore();
    const popupsStore = usePopupsStore();

    customStore.initStore();
    globalStore.initStore();
    notificationsStore.initStore();
    addressBookStore.initStore();
    articleStore.initStore();
    popupsStore.initStore();
    dappStoreBeforeCreate();

    this.$amplitude.setOptOut(!popupsStore.consentToTrack);
  },
  render: h => h(app)
});
