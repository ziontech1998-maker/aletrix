import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Secteurs } from './pages/Secteurs';
import { CasClients } from './pages/CasClients';
import { Innovation } from './pages/Innovation';
import { Ressources } from './pages/Ressources';
import { APropos } from './pages/APropos';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'solutions', Component: Solutions },
      { path: 'secteurs', Component: Secteurs },
      { path: 'cas-clients', Component: CasClients },
      { path: 'innovation', Component: Innovation },
      { path: 'ressources', Component: Ressources },
      { path: 'a-propos', Component: APropos },
      { path: 'contact', Component: Contact },
    ],
  },
]);
