import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/mf/module-federation.manifest.json')
  .then((response) => response.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
