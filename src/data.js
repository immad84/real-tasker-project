import overview from './assets/sidebar/overview.svg';
import tickets from './assets/sidebar/tickets.svg';
import vector from './assets/sidebar/Vector.svg';
import contacts from './assets/sidebar/contacts.svg';
import articles from './assets/sidebar/articles.svg';

import img1 from './assets/panel/1.svg';
import img2 from './assets/panel/2.svg';
import img3 from './assets/panel/3.svg';
import img4 from './assets/panel/4.svg';
import img5 from './assets/panel/5.svg';
import img6 from './assets/panel/6.svg';
import img7 from './assets/panel/7.svg';
import img8 from './assets/panel/8.svg';

import active from './assets/panel/Ok.svg';

export const links = [
  {
    id: 1,
    url: 'http://localhost:5173/dashboard',
    text: 'dashboard',
    icon: overview,
  },
  {
    id: 2,
    url: 'http://localhost:5173/dashboard/administrators',
    text: 'administrators',
    icon: tickets,
  },
  {
    id: 3,
    url: 'http://localhost:5173/dashboard/buildings',
    text: 'buildings',
    icon: vector,
  },
  {
    id: 4,
    url: 'http://localhost:5173/dashboard/supervisors',
    text: 'supervisors',
    icon: contacts,
  },
  {
    id: 5,
    url: 'http://localhost:5173/dashboard/contact',
    text: 'contact',
    icon: articles,
  },
  {
    id: 6,
    url: 'http://localhost:5173/dashboard/tenants',
    text: 'tenants',
    icon: vector,
  },
  {
    id: 7,
    url: 'http://localhost:5173/dashboard/directory',
    text: 'directory',
    icon: contacts,
  },
  {
    id: 8,
    url: 'http://localhost:5173/dashboard/service-category',
    text: 'service category',
    icon: articles,
  },
  {
    id: 9,
    url: 'http://localhost:5173/dashboard/reports',
    text: 'reports',
    icon: articles,
  },
];

export const users = [
  {
    id: 1,
    avatar: img1,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 2,
    avatar: img2,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 3,
    avatar: img3,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 4,
    avatar: img4,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 5,
    avatar: img5,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 6,
    avatar: img6,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 7,
    avatar: img7,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
  {
    id: 8,
    avatar: img8,
    email: 'wakoman@gmail.com',
    phone: '042-6664772',
    activeUser: active,
  },
];
