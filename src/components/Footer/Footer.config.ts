import DiscordIcon from "./assets/DiscordIcon";
import TelegramIcon from "./assets/TelegramIcon";
import YouTubeIcon from "./assets/YoutubeIcon";

import youPayIcon from "./assets/youPayIcon.svg";
import mirIcon from "./assets/mirIcon.svg";
import mastercardIcon from "./assets/mastercardIcon.svg";
import applePayIcon from "./assets/applePayIcon.svg";
import samsungPayIcon from "./assets/samsungPayIcon.svg";
import googlePayIcon from "./assets/googlePayIcon.svg";
import visaIcon from "./assets/visaIcon.svg";

type IconType = React.ComponentType<{ className?: string }>;

interface Links {
  id: number;
  title: string | IconType;
  link: string;
}

export interface FooterLinks {
  id: number;
  title: string;
  links: Links[];
}

export const footerLinks: FooterLinks[] = [
  {
    id: 1,
    title: "Решения",
    links: [
      {
        id: 1,
        title: "Разработка",
        link: "/",
      },
      {
        id: 2,
        title: "Дизайн",
        link: "/",
      },
      {
        id: 3,
        title: "3D моделинг",
        link: "/",
      },
      {
        id: 4,
        title: "Реклама",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Магазин",
    links: [
      {
        id: 1,
        title: "3D модделинг",
        link: "/",
      },
      {
        id: 2,
        title: "Готовые системы",
        link: "/",
      },
      {
        id: 3,
        title: "Дизайн",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Другое",
    links: [
      {
        id: 1,
        title: "Блог",
        link: "/",
      },
      {
        id: 2,
        title: "Академия",
        link: "/",
      },
      {
        id: 3,
        title: "Карьера",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Соц сети",
    links: [
      {
        id: 1,
        title: DiscordIcon,
        link: "/",
      },
      {
        id: 2,
        title: TelegramIcon,
        link: "/",
      },
      {
        id: 3,
        title: YouTubeIcon,
        link: "/",
      },
    ],
  },
];

export const paymentSystemIconsArr = [
  youPayIcon,
  mirIcon,
  mastercardIcon,
  applePayIcon,
  samsungPayIcon,
  googlePayIcon,
  visaIcon,
]

export const documentLinksArr = [
    {
        id:1,
        title:'Политика конфиденциальности',
        link:'/',
    },
    {
        id:2,
        title:'Отказ от ответственности ',
        link:'/',
    },
]
