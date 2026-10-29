// Month is 1-12. A bare year is used where only the year is known (education).
export type YearMonth = [year: number, month: number];
export type When = YearMonth | number;

export interface SubRole {
  title: string;
  start: YearMonth;
  end: YearMonth;
  summary: string;
}

export interface Milestone {
  kind: 'work' | 'education';
  company: string;
  companyNote?: string;
  subtitle: string;
  start: When;
  // Omitted while the role is ongoing.
  end?: When;
  description?: string;
  subRoles?: SubRole[];
  chips?: string[];
}

export interface ParallelRole {
  company: string;
  title: string;
  start: YearMonth;
  description: string;
}

export const careerStart: YearMonth = [2021, 9];

// Newest first, as rendered on the timeline.
export const milestones: Milestone[] = [
  {
    kind: 'work',
    company: 'GlobalLogic',
    companyNote: 'Hitachi Group',
    subtitle: 'Senior Software Engineer',
    start: [2026, 6],
    description:
      'Mantengo y extiendo librerías internas de componentes UI y diseño schemas en TypeScript que mantienen los datos consistentes y type-safe entre sistemas compartidos, contribuyendo a la escalabilidad de la plataforma.',
    chips: ['TypeScript', 'Design systems', 'Schemas'],
  },
  {
    kind: 'work',
    company: 'Accenture',
    subtitle: 'Web Developer · Área de Finanzas',
    start: [2025, 1],
    end: [2026, 6],
    description:
      'Desarrollé y mejoré herramientas para múltiples equipos del área de finanzas. Lideré trabajo de cloud e infraestructura, investigando e implementando soluciones que aumentaron la productividad del equipo e impactaron en nuevos productos.',
    chips: ['Google Cloud', 'Infra', 'Herramientas internas'],
  },
  {
    kind: 'work',
    company: 'Troupper',
    subtitle: 'Fullstack Developer',
    start: [2024, 3],
    end: [2024, 12],
    description:
      'Desarrollo de nuevas funcionalidades end-to-end para aplicaciones y servicios de producto, colaborando en buenas prácticas y documentación del proyecto.',
    chips: ['Full stack', 'Producto'],
  },
  {
    kind: 'work',
    company: 'AENIMA',
    subtitle: 'Agencia digital · Rosario, Santa Fe',
    start: [2021, 9],
    end: [2024, 3],
    subRoles: [
      {
        title: 'Technical Lead',
        start: [2023, 4],
        end: [2024, 3],
        summary: 'impulsé el onboarding de nuevos integrantes y agilicé los procesos de entrega.',
      },
      {
        title: 'Full Stack Developer',
        start: [2021, 9],
        end: [2024, 3],
        summary: 'campañas de marketing y sitios web para múltiples clientes.',
      },
    ],
    chips: ['Laravel', 'WordPress', 'Liderazgo técnico'],
  },
  {
    kind: 'education',
    company: 'Universidad del Aconcagua',
    subtitle: 'Lic. en Informática y Desarrollo de Software',
    start: 2018,
    end: 2020,
    description:
      'El salto al desarrollo. Fundamentos de programación, bases de datos y arquitectura, más cursos complementarios (Docker, Laravel, arquitectura de alta concurrencia).',
  },
  {
    kind: 'education',
    company: 'Universidad Nacional de Cuyo',
    subtitle: 'Licenciatura en Diseño Gráfico',
    start: 2016,
    end: 2017,
    description:
      'Donde empezó todo: composición, tipografía y jerarquía visual. Una base que hoy sigue presente en cada interfaz que construyo.',
  },
];

// Ran alongside the main jobs, so it branches off the timeline instead of sitting on it.
export const parallelRole: ParallelRole = {
  company: 'Coderhouse',
  title: 'Tutor de Programación Backend',
  start: [2022, 12],
  description:
    'Acompaño a estudiantes de backend en su formación: revisión de código, buenas prácticas y resolución de dudas. Docencia como forma de seguir aprendiendo.',
};

export const impact = [
  { icon: '⇢', title: 'Onboarding más rápido', text: 'Impulsé el crecimiento de nuevos integrantes, logrando una rápida adaptación y entregas más fluidas.' },
  { icon: '⚡', title: 'Deploys más cortos', text: 'Agilicé procesos de entrega y mantenimiento, reduciendo plazos de despliegue de nuevas funcionalidades.' },
  { icon: '✓', title: 'Menos deuda técnica', text: 'Incorporé tests unitarios en APIs, disminuyendo la deuda técnica a largo plazo.' },
  { icon: '☁', title: 'Soluciones cloud', text: 'Investigué y desarrollé soluciones en servicios cloud, aumentando la productividad e impactando en nuevos productos.' },
];

export const links = {
  email: 'albarracinj.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jorge-albarracin/',
  github: 'https://github.com/albarracin-jorge',
};

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const startYear = (w: When) => (typeof w === 'number' ? w : w[0]);

export const formatWhen = (w: When) => (typeof w === 'number' ? `${w}` : `${MONTHS[w[1] - 1]} ${w[0]}`);

export const formatRange = (start: When, end?: When) => `${formatWhen(start)} — ${end ? formatWhen(end) : 'actualidad'}`;

// Inclusive month count, matching how LinkedIn reports durations.
const monthsBetween = (a: YearMonth, b: YearMonth) => (b[0] - a[0]) * 12 + (b[1] - a[1]) + 1;

export function formatDuration(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} ${y === 1 ? 'año' : 'años'}`, m && `${m} ${m === 1 ? 'mes' : 'meses'}`].filter(Boolean).join(' ');
}

export function formatPeriod(start: When, end?: When) {
  const range = formatRange(start, end);
  if (!end || typeof start === 'number' || typeof end === 'number') return range;
  return `${range} · ${formatDuration(monthsBetween(start, end))}`;
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
