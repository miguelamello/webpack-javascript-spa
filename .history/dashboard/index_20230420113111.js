"use strict";

import 'cirrus-ui';
import './index.css';
import App from './app.js';
//import Session from './controllers/session';

(async () => {
  
  //const user = await Session.getEntry('user');
  const user = false;
  const fragment = `
    <div id="app-root" class="h-screen u-flex u-flex-column u-items-stretch u-z-0">
      <div id="app-header" class="bg-gray-400 h-8 u-z-0">&nbsp;</div>
      <div id="app-body" class="bg-gray-200 u-flex-grow-1 u-z-0">&nbsp;</div>
    </div>
  `;
  App.appendFragment( fragment );

  if ( user ) {
    /*App.render('app-header','toolbar');
    App.render('app-body','dashboard');
    setTimeout(() => {
      const Toolbar = App.getObserver('toolbar');
      Toolbar.showMenu();
    }, 250);*/
  } else {
    App.render('app-header','toolbar');
    //App.render('app-body','login'); 
  }

})();

