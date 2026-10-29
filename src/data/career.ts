import { ui, type Locale, type Localized } from '../i18n';

// Month is 1-12. A bare year is used where only the year is known (education).
export type YearMonth = [year: number, month: number];
export type When = YearMonth | number;

// Technology names stay as plain strings; generic terms are localized.
export type Chip = string | Localized;

export interface SubRole {
  title: Localized;
  start: YearMonth;
  end: YearMonth;
  summary: Localized;
  points?: Localized[];
}

export interface Milestone {
  kind: 'work' | 'education';
  company: string;
  companyNote?: string;
  subtitle: Localized;
  start: When;
  // Omitted while the role is ongoing.
  end?: When;
  description?: Localized;
  points?: Localized[];
  subRoles?: SubRole[];
  chips?: Chip[];
}

export interface ParallelRole {
  company: string;
  title: Localized;
  start: YearMonth;
  description: Localized;
  points: Localized[];
}

export const careerStart: YearMonth = [2021, 9];

// Newest first, as rendered on the timeline.
export const milestones: Milestone[] = [
  {
    kind: 'work',
    company: 'GlobalLogic',
    companyNote: 'Hitachi Group',
    subtitle: { es: 'Senior Software Engineer', en: 'Senior Software Engineer' },
    start: [2026, 6],
    description: {
      es: 'Mantengo y extiendo librerías internas de componentes UI y diseño schemas en TypeScript que mantienen los datos consistentes y type-safe entre sistemas compartidos, contribuyendo a la escalabilidad de la plataforma.',
      en: 'I maintain and extend internal UI component libraries and design TypeScript schemas that keep data consistent and type-safe across shared systems, contributing to the platform’s scalability.',
    },
    chips: ['Ember.js', { es: 'Componentes UI', en: 'UI components' }, { es: 'Sistema de diseño', en: 'Design system' }],
  },
  {
    kind: 'work',
    company: 'Accenture',
    subtitle: { es: 'Web Developer · Área de Finanzas', en: 'Web Developer · Finance' },
    start: [2025, 1],
    end: [2026, 6],
    description: {
      es: 'Desarrollé y mejoré herramientas para múltiples equipos del área de finanzas.',
      en: 'I built and improved tools for several teams in the finance area.',
    },
    points: [
      {
        es: 'Lideré el trabajo de cloud e infraestructura: investigué e implementé soluciones sobre Google Cloud.',
        en: 'Led the cloud and infrastructure work: researched and implemented solutions on Google Cloud.',
      },
      {
        es: 'Esas soluciones aumentaron la productividad de los equipos e impactaron en nuevos productos.',
        en: 'Those solutions raised team productivity and fed into new products.',
      },
    ],
    chips: ['React', 'Terraform', 'GCP'],
  },
  {
    kind: 'work',
    company: 'Troupper',
    subtitle: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
    start: [2024, 3],
    end: [2024, 12],
    description: {
      es: 'Desarrollo de nuevas funcionalidades end-to-end para aplicaciones y servicios de producto.',
      en: 'End-to-end development of new features for product applications and services.',
    },
    points: [
      {
        es: 'Colaboración en buenas prácticas y documentación del proyecto.',
        en: 'Contributed to project conventions and documentation.',
      },
    ],
    chips: ['React', 'Node.js', 'MySQL'],
  },
  {
    kind: 'work',
    company: 'AENIMA',
    subtitle: { es: 'Agencia digital · Rosario, Santa Fe', en: 'Digital agency · Rosario, Santa Fe' },
    start: [2021, 9],
    end: [2024, 3],
    subRoles: [
      {
        title: { es: 'Technical Lead', en: 'Technical Lead' },
        start: [2023, 4],
        end: [2024, 3],
        summary: {
          es: 'Coordinación del equipo de desarrollo y de sus procesos de entrega.',
          en: 'Coordinated the development team and its delivery process.',
        },
        points: [
          {
            es: 'Impulsé estándares de código limpio y legible y un mejor uso de GitHub para el trabajo en equipo.',
            en: 'Pushed for clean, readable code standards and better use of GitHub for teamwork.',
          },
          {
            es: 'Definí un marco de desarrollo moderno y flexible, y una práctica de documentación para proyectos de clientes e internos.',
            en: 'Set up a modern, flexible development framework and a documentation practice for client and internal projects.',
          },
          {
            es: 'Acompañé el onboarding de nuevos integrantes y asesoré alcances y presupuestos comerciales.',
            en: 'Supported onboarding of new members and advised on scope and commercial estimates.',
          },
        ],
      },
      {
        title: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
        start: [2021, 9],
        end: [2024, 3],
        summary: {
          es: 'Campañas de marketing y sitios web para múltiples clientes.',
          en: 'Marketing campaigns and websites for multiple clients.',
        },
        points: [
          {
            es: 'Implementé Docker y un sistema de gestión de proxies para VPS, luego adoptados en el resto de los proyectos de la agencia.',
            en: 'Implemented Docker and a proxy management system for VPS, later adopted across the agency’s projects.',
          },
          {
            es: 'Modernicé código sobre versiones deprecadas y migré y mantuve sitios WordPress y sus plugins.',
            en: 'Modernized code running on deprecated versions, and migrated and maintained WordPress sites and plugins.',
          },
          {
            es: 'Revisé, documenté y optimicé los sistemas internos: web institucional, sistema administrativo y de trabajos.',
            en: 'Reviewed, documented and optimized internal systems: the company site, admin system and job tracking.',
          },
        ],
      },
    ],
    chips: ['PHP', 'WordPress', { es: 'Gestión de servidores', en: 'Server management' }, 'React'],
  },
  {
    kind: 'education',
    company: 'Universidad del Aconcagua',
    subtitle: { es: 'Lic. en Informática y Desarrollo de Software', en: 'BSc in Computer Science and Software Development' },
    start: 2018,
    end: 2020,
  },
  {
    kind: 'education',
    company: 'Universidad Nacional de Cuyo',
    subtitle: { es: 'Licenciatura en Diseño Gráfico', en: 'BA in Graphic Design' },
    start: 2016,
    end: 2017,
  },
];

// Ran alongside the main jobs, so it branches off the timeline instead of sitting on it.
export const parallelRole: ParallelRole = {
  company: 'Coderhouse',
  title: { es: 'Tutor de Programación Backend', en: 'Backend Programming Tutor' },
  start: [2022, 12],
  description: {
    es: 'Acompaño a estudiantes de backend durante el cursado. Docencia como forma de seguir aprendiendo.',
    en: 'I support backend students throughout their course. Teaching as a way to keep learning.',
  },
  points: [
    { es: 'Resolución de dudas y consultas durante las clases en vivo.', en: 'Answering questions during live classes.' },
    { es: 'Revisión y corrección de proyectos previos a la entrega final.', en: 'Reviewing and correcting projects ahead of the final delivery.' },
    { es: 'Asistencia al profesor en clase y cobertura en sus ausencias.', en: 'Assisting the instructor in class and covering their absences.' },
  ],
};

export const impact: { title: Localized; text: Localized }[] = [
  {
    title: { es: 'Adaptación rápida', en: 'Quick adaptation' },
    text: {
      es: 'Impulsé el crecimiento de nuevos integrantes, logrando una rápida adaptación y entregas más fluidas.',
      en: 'Helped new team members ramp up quickly, leading to smoother deliveries.',
    },
  },
  {
    title: { es: 'Entregas más ágiles', en: 'Leaner delivery' },
    text: {
      es: 'Agilicé procesos de entrega y mantenimiento, reduciendo los plazos de despliegue de nuevas funcionalidades.',
      en: 'Streamlined delivery and maintenance processes, shortening the time to ship new features.',
    },
  },
  {
    title: { es: 'Menos deuda técnica', en: 'Less technical debt' },
    text: {
      es: 'Incorporé tests unitarios en APIs, disminuyendo la deuda técnica a largo plazo.',
      en: 'Added unit tests to APIs, reducing technical debt over the long term.',
    },
  },
  {
    title: { es: 'Funcionalidad primero', en: 'Functionality first' },
    text: {
      es: 'Al desarrollar priorizo que la solución funcione y resuelva el problema por sobre otros aspectos; el refinamiento viene después.',
      en: 'When building, I prioritize a solution that works and solves the problem over other concerns; refinement comes after.',
    },
  },
  {
    title: { es: 'Soluciones cloud', en: 'Cloud solutions' },
    text: {
      es: 'Investigué y desarrollé soluciones en servicios cloud, aumentando la productividad e impactando en nuevos productos.',
      en: 'Researched and built cloud solutions that raised productivity and fed into new products.',
    },
  },
];

export const links = {
  email: 'albarracinj.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jorge-albarracin/',
  github: 'https://github.com/albarracin-jorge',
};

const startYear = (w: When) => (typeof w === 'number' ? w : w[0]);

export const formatWhen = (w: When, l: Locale) => (typeof w === 'number' ? `${w}` : `${ui[l].monthNames[w[1] - 1]} ${w[0]}`);

export const formatRange = (start: When, l: Locale, end?: When) =>
  `${formatWhen(start, l)} — ${end ? formatWhen(end, l) : ui[l].present}`;

// Inclusive month count, matching how LinkedIn reports durations.
const monthsBetween = (a: YearMonth, b: YearMonth) => (b[0] - a[0]) * 12 + (b[1] - a[1]) + 1;

export function formatDuration(months: number, l: Locale) {
  const t = ui[l];
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} ${y === 1 ? t.year : t.years}`, m && `${m} ${m === 1 ? t.month : t.months}`].filter(Boolean).join(' ');
}

export function formatPeriod(start: When, l: Locale, end?: When) {
  const range = formatRange(start, l, end);
  if (!end || typeof start === 'number' || typeof end === 'number') return range;
  return `${range} · ${formatDuration(monthsBetween(start, end), l)}`;
}

export const yearOf = startYear;

const isBefore = (a: When, b: YearMonth) => (typeof a === 'number' ? a < b[0] : a[0] * 12 + a[1] < b[0] * 12 + b[1]);

// The parallel branch sits right above the first milestone that started before it.
export const branchIndex = milestones.findIndex((m) => isBefore(m.start, parallelRole.start));

// Work that overlapped the parallel role, oldest first.
export const alongside = milestones
  .filter((m) => m.kind === 'work' && (!m.end || !isBefore(m.end, parallelRole.start)))
  .map((m) => m.company)
  .reverse();

export const companyCount = new Set([
  ...milestones.filter((m) => m.kind === 'work').map((m) => m.company),
  parallelRole.company,
]).size;
