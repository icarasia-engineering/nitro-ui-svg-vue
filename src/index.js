import component from "./components/NitroIcon.vue";
import * as svgicon from 'vue-svgicon'

function install(Vue) {
    Vue.use(svgicon, {
        classPrefix: 'NitroIcon-',
    });
    if (install.installed) return;
    install.installed = true;
    Vue.component("NitroIcon", component);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}

component.install = install;

export default component;