/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// let oldXHROpen = XMLHttpRequest.prototype.send;
// if(XMLHttpRequest.prototype.send){
//   XMLHttpRequest.prototype.send = function(body) {
//     if(this.__zone_symbol__xhrURL.indexOf('socket.io') === -1)
//   this.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
//    return oldXHROpen.apply(this, arguments);
//   }
// }

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
