export type Lang = 'en' | 'pl';

interface ProjectCopy {
  name: string;
  description: string;
  mediaLabel: string;
}

type ProjectKey = 'animalactin' | 'wosana' | 'dp' | 'fruitfarm' | 'bookflix';

export interface Translations {
  nav: {
    work: string;
    skills: string;
    about: string;
    contact: string;
  };
  navbar: {
    availableForWork: string;
    warsaw: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    srName: string;
    description: string;
    cta: string;
    seeWork: string;
  };
  projects: {
    heading: string;
    agencyNotePrefix: string;
    agencyNoteSuffix: string;
    builtBadge: string;
    visit: string;
    items: Record<ProjectKey, ProjectCopy>;
  };
  skills: {
    heading: string;
    groupTitles: {
      tools: string;
      frameworks: string;
      concepts: string;
    };
    concepts: string[];
  };
  about: {
    heading: string;
    bio1: string;
    bio2: string;
    portraitAlt: string;
    stats: {
      basedInLabel: string;
      basedInValue: string;
      experienceLabel: string;
      experienceValue: string;
      workingLabel: string;
      workingValue: string;
      languagesLabel: string;
      languagesValue: string;
    };
  };
  contact: {
    heading: string;
    intro: string;
    copyright: string;
  };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      work: 'Work',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    navbar: {
      availableForWork: 'Available for work',
      warsaw: 'WARSAW',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      kicker: 'Fullstack Web Developer',
      srName: 'Jakub Stokowski — Fullstack Web Developer',
      description:
        "I'm Jakub, I build websites and online stores for local businesses. No agency or middlemen — just me, your company and satisfying results.",
      cta: 'Start a project ↗',
      seeWork: 'See the work',
    },
    projects: {
      heading: 'Selected work',
      agencyNotePrefix: 'Built as a developer at ',
      agencyNoteSuffix: " — design and creative direction were handled by the agency's team.",
      builtBadge: 'Built at ONE House',
      visit: 'Visit ↗',
      items: {
        animalactin: {
          name: 'Animalactin shop & brand site',
          description:
            'Storefront and companion brand site (animalactin.eu) for a pet supplement manufacturer, sharing one custom ACF block system across both.',
          mediaLabel: 'Storefront preview',
        },
        wosana: {
          name: 'Acha! product site',
          description:
            'Product landing page for a ready-to-drink green tea brand, built on a custom ACF block system for fast content updates.',
          mediaLabel: 'Landing page preview',
        },
        dp: {
          name: 'ONE House digital production',
          description:
            'Service site for a digital production team inside a national marketing agency, presenting their process and case studies.',
          mediaLabel: 'Agency site preview',
        },
        fruitfarm: {
          name: 'Fruitfarm',
          description:
            'Bilingual site for a fruit exporter, presenting certifications and export capacity to wholesale buyers across Europe and Asia.',
          mediaLabel: 'Export site preview',
        },
        bookflix: {
          name: 'BookFlix',
          description:
            'A Netflix-styled personal library app proving out fullstack range beyond WordPress — JWT auth, a tested REST API, fully Dockerized.',
          mediaLabel: 'App preview',
        },
      },
    },
    skills: {
      heading: 'Skills',
      groupTitles: {
        tools: 'Languages & Tools',
        frameworks: 'Frameworks & Libraries',
        concepts: 'Core CS Concepts',
      },
      concepts: [
        'Data Structures & Algorithms',
        'Databases',
        'OOP',
        'Operating Systems',
        'System Design',
        'REST API Design',
        'JWT Authentication',
      ],
    },
    about: {
      heading: 'About me',
      bio1:
        "I'm a web developer who builds landing pages and online stores for local businesses — mostly WordPress and WooCommerce, because for what most small businesses actually need, it just works. I'd rather ask an awkward question early than ship the wrong thing politely.",
      bio2:
        "Outside client work, I build personal projects in Angular and .NET, mostly to stay sharp on the fundamentals. Build it, make it work, make it fast. That's how things are.",
      portraitAlt: 'Portrait of Jakub Stokowski',
      stats: {
        basedInLabel: 'Based in',
        basedInValue: 'Warsaw, PL',
        experienceLabel: 'Experience',
        experienceValue: '+2 years',
        workingLabel: 'Working',
        workingValue: 'Remote / hybrid',
        languagesLabel: 'Languages',
        languagesValue: 'PL · EN',
      },
    },
    contact: {
      heading: 'Contact',
      intro:
        "Got something half-formed? That's fine - I like the early conversations best. Tell me what you're trying to build.",
      copyright: '© 2026 JST.DEV — Warsaw',
    },
  },
  pl: {
    nav: {
      work: 'Projekty',
      skills: 'Umiejętności',
      about: 'O mnie',
      contact: 'Kontakt',
    },
    navbar: {
      availableForWork: 'Dostępny do współpracy',
      warsaw: 'WARSZAWA',
      openMenu: 'Otwórz menu',
      closeMenu: 'Zamknij menu',
    },
    hero: {
      kicker: 'Programista Fullstack',
      srName: 'Jakub Stokowski — Programista Fullstack',
      description:
        'Jestem Jakub, buduję strony internetowe i sklepy online dla lokalnych firm. Żadnej agencji ani pośredników — tylko ja, Twoja firma i satysfakcjonujące efekty.',
      cta: 'Rozpocznij projekt ↗',
      seeWork: 'Zobacz realizacje',
    },
    projects: {
      heading: 'Wybrane projekty',
      agencyNotePrefix: 'Zrealizowane jako developer w ',
      agencyNoteSuffix: ' — za design i kierunek kreatywny odpowiadał zespół agencji.',
      builtBadge: 'Zrealizowane w ONE House',
      visit: 'Odwiedź ↗',
      items: {
        animalactin: {
          name: 'Sklep i strona marki Animalactin',
          description:
            'Sklep i towarzysząca strona marki (animalactin.eu) dla producenta suplementów dla zwierząt — obie witryny współdzielą jeden autorski system bloków ACF.',
          mediaLabel: 'Podgląd sklepu',
        },
        wosana: {
          name: 'Strona produktowa Acha!',
          description:
            'Strona produktowa marki gotowej do picia zielonej herbaty, zbudowana na autorskim systemie bloków ACF do szybkiej edycji treści.',
          mediaLabel: 'Podgląd strony produktowej',
        },
        dp: {
          name: 'ONE House digital production',
          description:
            'Strona usługowa zespołu digital production działającego w ogólnopolskiej agencji marketingowej, prezentująca ich proces i case studies.',
          mediaLabel: 'Podgląd strony agencji',
        },
        fruitfarm: {
          name: 'Fruitfarm',
          description:
            'Dwujęzyczna strona eksportera owoców, prezentująca certyfikaty i możliwości eksportowe dla hurtowych odbiorców z Europy i Azji.',
          mediaLabel: 'Podgląd strony eksportowej',
        },
        bookflix: {
          name: 'BookFlix',
          description:
            'Osobista biblioteczka w stylu Netflixa, pokazująca fullstackowe umiejętności wykraczające poza WordPressa — autoryzacja JWT, przetestowane REST API, w pełni skonteneryzowana.',
          mediaLabel: 'Podgląd aplikacji',
        },
      },
    },
    skills: {
      heading: 'Umiejętności',
      groupTitles: {
        tools: 'Języki i narzędzia',
        frameworks: 'Frameworki i biblioteki',
        concepts: 'Podstawy informatyki',
      },
      concepts: [
        'Struktury danych i algorytmy',
        'Bazy danych',
        'OOP',
        'Systemy operacyjne',
        'Projektowanie systemów',
        'Projektowanie API REST',
        'Uwierzytelnianie JWT',
      ],
    },
    about: {
      heading: 'O mnie',
      bio1:
        'Jestem web developerem budującym strony i sklepy internetowe dla lokalnych firm — głównie na WordPressie i WooCommerce, bo dla większości małych firm to po prostu działa. Wolę zadać niewygodne pytanie na starcie, niż grzecznie dostarczyć coś, co nie ma sensu.',
      bio2:
        'Poza pracą dla klientów tworzę własne projekty w Angularze i .NET, głównie żeby nie tracić wprawy w podstawach. Zbuduj to, spraw żeby działało, spraw żeby działało szybko. Tak to wygląda.',
      portraitAlt: 'Portret Jakuba Stokowskiego',
      stats: {
        basedInLabel: 'Lokalizacja',
        basedInValue: 'Warszawa, PL',
        experienceLabel: 'Doświadczenie',
        experienceValue: '+2 lata',
        workingLabel: 'Tryb pracy',
        workingValue: 'Zdalnie / hybrydowo',
        languagesLabel: 'Języki',
        languagesValue: 'PL · EN',
      },
    },
    contact: {
      heading: 'Kontakt',
      intro:
        'Masz coś na wpół dopracowanego? Spoko — najbardziej lubię wczesne rozmowy. Napisz, co chcesz zbudować.',
      copyright: '© 2026 JST.DEV — Warszawa',
    },
  },
};
