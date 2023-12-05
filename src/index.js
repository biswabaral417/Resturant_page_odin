import component from './modules/component';
import navbar from "./components/navbar";
import router from './modules/router';
import home from './components/home';
import './assets/css/style.css'
import {navigation,compsfns} from './modules/navigation';


component(navbar)
if (window.location.pathname == '/') {
    component(home)
}
else {
    //console.log(compsfns[window.location.pathname.substring(1)])
    router({ hrf: window.location.pathname, comp: compsfns[window.location.pathname.substring(1)] })
}

navigation()





