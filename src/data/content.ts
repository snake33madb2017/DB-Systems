export type Locale = 'es' | 'en';

export type IndustryId =
  | 'hospitality'
  | 'healthcare'
  | 'legal'
  | 'realestate'
  | 'ecommerce'
  | 'fieldservices';

export type PlanId = 'saas' | 'turnkey' | 'enterprise';

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface TrackRecordItem {
  code: string;
  sector: string;
  title: string;
  description: string;
  proof: string;
}

export interface CapabilityDomain {
  code: string;
  title: string;
  summary: string;
  items: string[];
  note: string;
}

export interface HospitalityPillar {
  code: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface IndustryItem {
  id: IndustryId;
  code: string;
  shortName: string;
  title: string;
  markets: string;
  problemLabel: string;
  problem: string;
  solutionLabel: string;
  solution: string;
  automations: string[];
  stackTargets: string[];
  impact: string;
  hospitalityPillars?: HospitalityPillar[];
}

export interface PlanItem {
  id: PlanId;
  code: string;
  name: string;
  subtitle: string;
  billingTag: string;
  summary: string;
  features: string[];
  ownership: string;
  idealFor: string;
  cta: string;
}

export interface ProcessStep {
  code: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    descriptor: string;
    regions: string;
    email: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsappHref: string;
    linkedinUrl: string;
    linkedinLabel: string;
  };
  nav: {
    capabilities: string;
    industries: string;
    plans: string;
    process: string;
    cta: string;
    menuLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    architectureNote: string;
    metrics: MetricItem[];
  };
  capabilities: {
    sectionCode: string;
    sectionLabel: string;
    title: string;
    intro: string;
    agnosticBanner: {
      code: string;
      title: string;
      description: string;
      platforms: string[];
    };
    trackRecordTitle: string;
    trackRecord: TrackRecordItem[];
    matrixTitle: string;
    matrixSubtitle: string;
    domains: CapabilityDomain[];
  };
  industries: {
    sectionCode: string;
    sectionLabel: string;
    title: string;
    intro: string;
    architectureHeading: string;
    targetsHeading: string;
    impactHeading: string;
    pillarsHeading: string;
    ctaText: string;
    items: IndustryItem[];
  };
  plans: {
    sectionCode: string;
    sectionLabel: string;
    title: string;
    intro: string;
    scopeLabel: string;
    ownershipLabel: string;
    idealForLabel: string;
    footnote: string;
    items: PlanItem[];
  };
  process: {
    sectionCode: string;
    sectionLabel: string;
    title: string;
    intro: string;
    deliverablesLabel: string;
    steps: ProcessStep[];
  };
  ctaBand: {
    code: string;
    title: string;
    description: string;
    button: string;
  };
  footer: {
    summary: string;
    navigationTitle: string;
    contactTitle: string;
    pwaTitle: string;
    pwaReadyText: string;
    pwaInstalledText: string;
    pwaInstallBtn: string;
    pwaInstalledBtn: string;
    pwaManualTitle: string;
    pwaManualIos: string;
    pwaManualDesktop: string;
    copyright: string;
    operationsNote: string;
  };
  modal: {
    code: string;
    title: string;
    subtitle: string;
    directChannelsLabel: string;
    formTitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      market: string;
      plan: string;
      industry: string;
      brief: string;
      briefPlaceholder: string;
    };
    markets: {
      spain: string;
      us: string;
      both: string;
    };
    submitMail: string;
    copyBrief: string;
    copiedConfirm: string;
    closeLabel: string;
  };
}

const BRAND_CONTACT = {
  name: 'DB Systems',
  email: 'snake33madb@gmail.com',
  phoneDisplay: '+34 678 146 956',
  phoneHref: 'tel:+34678146956',
  whatsappHref: 'https://wa.me/34678146956',
  linkedinUrl: 'https://www.linkedin.com/in/marco-antonio-daza-bautista-81bb50b9',
  linkedinLabel: 'linkedin.com/in/marco-antonio-daza-bautista',
};

export const CONTENT: Record<Locale, SiteContent> = {
  es: {
    meta: {
      title: 'DB Systems — Ingeniería de Software Multiplataforma y Automatización',
      description:
        'Firma de ingeniería de software multiplataforma, arquitectura cloud y automatización de procesos empresariales para España y EE. UU.',
    },
    brand: {
      ...BRAND_CONTACT,
      descriptor: 'Ingeniería de Software & Automatización',
      regions: 'España · Estados Unidos',
    },
    nav: {
      capabilities: 'Capacidades',
      industries: 'Sectores',
      plans: 'Planes',
      process: 'Proceso',
      cta: 'Agendar Reunión',
      menuLabel: 'Menú de navegación',
    },
    hero: {
      eyebrow: 'SYS.00 // ESPAÑA · EE. UU. · ARQUITECTURA AGNÓSTICA AL STACK',
      headline: 'Ingeniería de Software Multiplataforma y Automatización Empresarial',
      subtitle:
        'Diseñamos, construimos e integramos aplicaciones web, móviles, de escritorio, PWAs y flujos automatizados a medida. Sin ataduras a un único lenguaje ni proveedor: seleccionamos la arquitectura exacta que exige cada operación.',
      primaryCta: 'Agendar Reunión',
      secondaryCta: 'Explorar Capacidades',
      architectureNote: 'INTERLOCUCIÓN DIRECTA CON DIRECCIÓN Y CTOs · PRODUCCIÓN VERIFICADA',
      metrics: [
        {
          value: '15+',
          label: 'Años de trayectoria acumulada',
          detail: 'Ingeniería de software, consultoría técnica B2B e infraestructura crítica.',
        },
        {
          value: '200+',
          label: 'Plataformas desplegadas',
          detail: 'Portales corporativos, comercio electrónico y sistemas transaccionales en producción.',
        },
        {
          value: '150+',
          label: 'Pymes digitalizadas en España',
          detail: 'Transformación operativa, estándares W3C/WCAG y pasarelas Stripe / Redsys.',
        },
        {
          value: 'Multi-OS',
          label: 'Web · iOS · Android · Desktop',
          detail: 'Arquitectura multiplataforma y multi-lenguaje orientada a retorno operativo (ROI).',
        },
      ],
    },
    capabilities: {
      sectionCode: '01',
      sectionLabel: 'RESPALDO TÉCNICO & CAPACIDAD INSTALADA',
      title: 'Criterio de ingeniería probado en entornos críticos y comerciales',
      intro:
        'Nuestra firma consolida más de quince años de dirección técnica, arquitectura cloud y desarrollo en producción para entidades gubernamentales, banca, industria y pymes en expansión. No dependemos de plantillas cerradas: abordamos el ciclo completo del software desde la toma de requisitos hasta la operación continua.',
      agnosticBanner: {
        code: 'DOCTRINA // MULTI-PLATAFORMA & MULTI-LENGUAJE',
        title: 'Agnósticos al stack. Orientados al resultado operativo.',
        description:
          'Aunque nuestra base histórica incluye despliegue masivo en ecosistemas PHP/Laravel, JavaScript/TypeScript, Node.js, React, Strapi, PostgreSQL, AWS y Azure, nuestra firma opera de forma estrictamente multiplataforma y multi-lenguaje. Diseñamos para Web, iOS, Android, PWAs, Escritorio y automatización backend, adoptando o integrando el lenguaje y runtime que mejor encaje con la infraestructura existente de cada cliente.',
        platforms: [
          'Web & PWA',
          'iOS & Android',
          'Desktop (Win / macOS / Linux)',
          'APIs & Microservicios',
          'Automatización & IA',
          'Cloud & On-Premise',
        ],
      },
      trackRecordTitle: 'BASE OPERATIVA COMPROBADA',
      trackRecord: [
        {
          code: 'TR-01',
          sector: 'SECTOR PÚBLICO & ALTA CONCURRENCIA',
          title: 'Arquitectura Cloud de Misión Crítica',
          description:
            'Liderazgo de infraestructura web y portales de trámites nacionales sobre AWS y Azure preparados para picos masivos de tráfico, protocolos estrictos de ciberseguridad y accesibilidad W3C/WCAG, incluyendo la digitalización completa de atención ciudadana en arquitectura Headless.',
          proof: 'Ministerio de Transporte · Ventanilla Única de Movilidad · AWS & Azure',
        },
        {
          code: 'TR-02',
          sector: 'BANCA, ENERGÍA & CONTINUIDAD TI',
          title: 'Disponibilidad Enterprise e ITIL V3',
          description:
            'Experiencia directa en ingeniería de sistemas, centros de cómputo, monitorización, arquitecturas de respaldo de alta criticidad y gestión de disponibilidad bajo acuerdos de nivel de servicio (SLA) en infraestructuras financieras y corporativas.',
          proof: 'Entidades bancarias Tier-1 · Credibanco · Ecopetrol · Telmex · Aeronáutica',
        },
        {
          code: 'TR-03',
          sector: 'MERCADO B2B & COMERCIO TRANSACCIONAL',
          title: 'Plataformas Comerciales y Pasarelas de Pago',
          description:
            'Coordinación técnica y despliegue de más de 200 plataformas web, integraciones transaccionales seguras (Stripe, Redsys, PayPal) y asesoramiento integral a más de 150 pymes en España bajo estándares oficiales y auditorías de accesibilidad.',
          proof: '200+ plataformas · 150+ pymes en España · Interlocución C-Level & CTO',
        },
        {
          code: 'TR-04',
          sector: 'AUTOMATIZACIÓN & IA APLICADA',
          title: 'Agentes Autónomos y Eficiencia Operativa',
          description:
            'Diseño práctico de flujos automatizados, agentes virtuales y bots de atención y cualificación comercial con enfoque medible en reducción de carga manual, tiempos de respuesta y retorno de inversión.',
          proof: 'Certificación en IA Aplicada a PYMES (UCJC) · Flujos CRM / ERP / Omnicanal',
        },
      ],
      matrixTitle: 'MATRIZ DE CAPACIDADES TÉCNICAS',
      matrixSubtitle: 'Ecosistema abierto adaptable a las restricciones técnicas, regulatorias y presupuestarias de cada organización.',
      domains: [
        {
          code: 'CAP.01',
          title: 'Plataformas & Interfaces',
          summary: 'Productos digitales rápidos y consistentes en cualquier dispositivo y sistema operativo.',
          items: [
            'Aplicaciones Web SPA / SSR y Progressive Web Apps (PWA) instalables con soporte offline',
            'Aplicaciones móviles nativas e híbridas para iOS y Android',
            'Software de escritorio multiplataforma (Windows, macOS y Linux) para operativa interna o punto de venta',
            'Sistemas de diseño B2B, paneles de control de alta densidad y cumplimiento W3C/WCAG',
          ],
          note: 'React · Next.js · TypeScript · Swift / Kotlin · Flutter · Electron / Tauri',
        },
        {
          code: 'CAP.02',
          title: 'Backend, APIs & Multi-Lenguaje',
          summary: 'Lógica de negocio desacoplada, integraciones limpias y elección objetiva del lenguaje.',
          items: [
            'Arquitecturas REST, GraphQL, Webhooks y mensajería asíncrona de baja latencia',
            'Desarrollo en el stack óptimo por proyecto: Node.js/TypeScript, PHP/Laravel, Python, Go, Java, C#/.NET o Rust',
            'Integración con pasarelas de pago (Stripe, Redsys, PayPal, SEPA/ACH), TPV/POS y facturación',
            'Ecosistemas Headless CMS, conectividad con ERPs, CRMs y modernización de sistemas heredados',
          ],
          note: 'Políglota por diseño · SQL (PostgreSQL / MySQL / SQL Server) & NoSQL',
        },
        {
          code: 'CAP.03',
          title: 'Automatización, Datos & IA',
          summary: 'Eliminación de cuellos de botella manuales mediante flujos auditables e inteligencia aplicada.',
          items: [
            'Orquestación de procesos entre CRM, ERP, correo, WhatsApp Business, mensajería y hojas de cálculo',
            'Agentes virtuales y asistentes de cualificación, reservas, soporte y triaje conectados a datos propios',
            'Extracción documental, generación automática de contratos, presupuestos e informes ejecutivos',
            'Consolidación de métricas operativas multi-sede en tiempo real',
          ],
          note: 'LLMs · RAG · n8n / Colas de eventos · ETL · Pipelines auditables',
        },
        {
          code: 'CAP.04',
          title: 'Infraestructura & Despliegue',
          summary: 'Operación estable, observable y segura desde la primera puesta en producción.',
          items: [
            'Arquitectura cloud y servidores dedicados en AWS, Microsoft Azure, GCP o infraestructura privada',
            'Contenedorización, despliegues automatizados (CI/CD) y entornos de staging reproducibles',
            'Estrategias de respaldo, alta disponibilidad, monitorización activa y control de accesos',
            'Gobierno técnico bajo criterios de continuidad de negocio, SLA y optimización de costes cloud',
          ],
          note: 'AWS · Azure · Docker · Linux · CI/CD · Seguridad & Continuidad ITIL',
        },
      ],
    },
    industries: {
      sectionCode: '02',
      sectionLabel: 'SOLUCIONES POR SECTOR // ESPAÑA & EE. UU.',
      title: 'Verticales de alta demanda con ingeniería enfocada a operativa real',
      intro:
        'Estructuramos software y automatizaciones a medida para los sectores donde la fricción operativa, los intermediarios y los procesos manuales erosionan directamente el margen.',
      architectureHeading: 'AUTOMATIZACIONES Y MÓDULOS CLAVE',
      targetsHeading: 'PLATAFORMAS E INTEGRACIONES',
      impactHeading: 'IMPACTO OPERATIVO ESPERADO',
      pillarsHeading: 'ARQUITECTURA OPERATIVA EN 4 BLOQUES',
      ctaText: 'Solicitar diagnóstico para este sector',
      items: [
        {
          id: 'hospitality',
          code: 'SEC.01',
          shortName: 'Hostelería y Restauración',
          title: 'Hostelería y Restauración',
          markets: 'ESPAÑA · EE. UU. · GRUPOS Y FRANQUICIAS',
          problemLabel: 'DIAGNÓSTICO OPERATIVO',
          problem:
            'Dependencia de agregadores de delivery con comisiones del 25-35%, ausencias (no-shows) sin penalización ni confirmación, descontrol de mermas y desconexión entre sala, cocina, TPV y compras en locales propios o franquiciados.',
          solutionLabel: 'ENFOQUE DE INGENIERÍA',
          solution:
            'Ecosistema digital propio conectado de extremo a extremo: desde la carta QR y pedidos directos sin intermediarios hasta pantallas de cocina (KDS), control de escandallos y cuadro de mando multi-local.',
          automations: [
            'Confirmaciones y recordatorios automáticos por WhatsApp/SMS con gestión de listas de espera',
            'Pedidos directos web/PWA para recogida o reparto propio con pago integrado (Stripe / Redsys)',
            'Alertas automáticas de stock mínimo y emisión de órdenes de reposición a proveedores',
            'Consolidación diaria de ventas, ticket medio, turnos y mermas entre todos los locales',
          ],
          stackTargets: ['PWA Cliente / Carta', 'KDS Tablet Cocina', 'Integración TPV / POS', 'WhatsApp & Pagos'],
          impact:
            'Recuperación directa del margen cedido a intermediarios, reducción sustancial de no-shows y visibilidad real del coste por plato y por local.',
          hospitalityPillars: [
            {
              code: 'H-01',
              title: 'Sala, pedidos y cocina',
              description:
                'Flujo continuo entre comensal, barra y cocina eliminando errores de comanda y reduciendo comisiones externas.',
              deliverables: [
                'Cartas digitales PWA de carga instantánea con alérgenos y multi-idioma',
                'Pedidos en mesa y barra con división de cuenta y pago directo',
                'Canal propio de reparto (delivery / take-away) sin comisiones de terceros',
                'Pantallas de cocina (KDS) sincronizadas por partida y tiempos de pase',
              ],
            },
            {
              code: 'H-02',
              title: 'Reservas y recurrencia',
              description:
                'Control de ocupación en tiempo real y automatización del ciclo de retención del cliente.',
              deliverables: [
                'Gestión inteligente de mesas, turnos de servicio y listas de espera',
                'Confirmaciones y recordatorios automáticos anti-no-show',
                'Base de datos propia de comensales y programas de fidelización recurrente',
              ],
            },
            {
              code: 'H-03',
              title: 'Operativa, compras y control de costes',
              description:
                'Trazabilidad exacta de materia prima para proteger el margen bruto ante subidas de costes.',
              deliverables: [
                'Control de inventario, lotes y registro estructurado de mermas',
                'Reposición automatizada con proveedores según consumo real',
                'Integración bidireccional con TPV/POS y seguimiento de escandallos',
              ],
            },
            {
              code: 'H-04',
              title: 'Operación multi-local',
              description:
                'Gobierno centralizado para grupos de restauración, cocinas ocultas y redes de franquicias.',
              deliverables: [
                'Consolidación de ventas, márgenes y desviaciones entre establecimientos',
                'Control unificado de turnos, cuadrantes y productividad por local',
                'Catálogos, precios y promociones gobernados desde un panel central',
              ],
            },
          ],
        },
        {
          id: 'healthcare',
          code: 'SEC.02',
          shortName: 'Clínicas y Salud Privada',
          title: 'Clínicas y Salud Privada',
          markets: 'ESPAÑA (RGPD) · EE. UU. (HIPAA-READY)',
          problemLabel: 'DIAGNÓSTICO OPERATIVO',
          problem:
            'Saturación telefónica en recepción, huecos de agenda por inasistencias no avisadas, formularios en papel que duplican la carga administrativa y baja trazabilidad en el seguimiento post-consulta.',
          solutionLabel: 'ENFOQUE DE INGENIERÍA',
          solution:
            'Plataformas de admisión digital, agendamiento inteligente y portales privados para pacientes construidos con cifrado, control de accesos y cumplimiento normativo estricto.',
          automations: [
            'Agendamiento online conectado a disponibilidad real de especialistas y boxes',
            'Recordatorios escalonados y reprogramación automática anti-no-show por SMS/WhatsApp/Email',
            'Triaje previo y admisión digital con consentimientos firmados antes de llegar a consulta',
            'Portales de seguimiento con pautas, resultados, facturación y alertas de revisión periódica',
          ],
          stackTargets: ['Web / PWA Paciente', 'Panel Recepción & Cuadro Médico', 'SMS / WhatsApp API', 'Conectores HIS / ERP'],
          impact:
            'Menor tasa de ausencias en agenda, reducción de llamadas repetitivas en recepción y mayor capacidad asistencial sin ampliar estructura administrativa.',
        },
        {
          id: 'legal',
          code: 'SEC.03',
          shortName: 'Despachos Legales y Consultorías',
          title: 'Despachos Legales y Consultorías',
          markets: 'ESPAÑA · EE. UU. · FIRMAS B2B',
          problemLabel: 'DIAGNÓSTICO OPERATIVO',
          problem:
            'Horas facturables perdidas filtrando consultas sin encaje, redacción manual repetitiva de contratos o escritos estándar y seguimiento fragmentado de expedientes en hilos de correo.',
          solutionLabel: 'ENFOQUE DE INGENIERÍA',
          solution:
            'Sistemas internos y portales de cliente para cualificación automatizada de leads, ensamblaje documental controlado y trazabilidad completa de hitos procesales o de consultoría.',
          automations: [
            'Captación y cualificación estructurada de consultas con asignación automática por área práctica',
            'Generación documental automatizada a partir de plantillas validadas y datos del expediente',
            'Trazabilidad centralizada de expedientes, plazos críticos, vencimientos y documentación',
            'Portal privado para clientes con estado del caso, intercambio seguro de archivos y firma digital',
          ],
          stackTargets: ['Portal Cliente Web', 'Motor Documental', 'Integración CRM / Calendario', 'Firma Electrónica & Auditoría'],
          impact:
            'Aceleración del ciclo de alta de clientes, eliminación de errores de copiado documental y control estricto de plazos y horas rentables.',
        },
        {
          id: 'realestate',
          code: 'SEC.04',
          shortName: 'Inmobiliarias y Propiedades',
          title: 'Inmobiliarias y Gestión de Propiedades',
          markets: 'ESPAÑA · EE. UU. · PROPERTY MANAGEMENT',
          problemLabel: 'DIAGNÓSTICO OPERATIVO',
          problem:
            'Gestión manual de cobros y liquidaciones a propietarios, incidencias de mantenimiento dispersas por WhatsApp y desactualización de cartera entre portales inmobiliarios y CRM.',
          solutionLabel: 'ENFOQUE DE INGENIERÍA',
          solution:
            'Ecosistema unificado para propietarios, inquilinos y gestores con automatización financiera, ticketing de mantenimiento y sincronización multi-portal.',
          automations: [
            'Portales dedicados para propietarios (rentabilidad y extractos) e inquilinos (contratos y recibos)',
            'Automatización de cobros recurrentes (SEPA / ACH / tarjeta) y liquidaciones mensuales',
            'Gestión trazable de incidencias con asignación a técnicos, presupuestos y cierre fotográfico',
            'Sincronización bidireccional de listados y leads con portales externos y CRM interno',
          ],
          stackTargets: ['Portal Propietario / Inquilino', 'PWA Mantenimiento', 'Pasarelas SEPA / ACH / Stripe', 'Feeds Portales & CRM'],
          impact:
            'Escalabilidad de la cartera gestionada por gestor, transparencia inmediata para propietarios y reducción drástica de morosidad y fricción operativa.',
        },
        {
          id: 'ecommerce',
          code: 'SEC.05',
          shortName: 'E-commerce, Retail y Logística',
          title: 'E-commerce, Retail y Logística',
          markets: 'ESPAÑA · UE · EE. UU. · OMNICANAL',
          problemLabel: 'DIAGNÓSTICO OPERATIVO',
          problem:
            'Roturas de stock o sobreventa entre tiendas físicas, tienda online y marketplaces; procesamiento manual de etiquetas y pedidos B2B gestionados por teléfono o PDF.',
          solutionLabel: 'ENFOQUE DE INGENIERÍA',
          solution:
            'Arquitectura de sincronización de inventario en tiempo real, automatización de expediciones y portales de autoservicio B2B con tarifas y condiciones por cuenta.',
          automations: [
            'Sincronización continua de stock, precios y catálogos entre ERP, tiendas, web y marketplaces',
            'Automatización de pedidos, generación de etiquetas y enrutamiento por almacén o transportista',
            'Trazabilidad de envíos con notificaciones proactivas de estado e incidencias de entrega',
            'Portales B2B privados con listas de precios por cliente, pedidos recurrentes y límites de crédito',
          ],
          stackTargets: ['Commerce Headless / Web', 'Portal B2B', 'Conectores ERP / WMS', 'APIs Transportistas & Pagos'],
          impact:
            'Eliminación de descuadres de inventario, despachos más rápidos con menos errores de picking y digitalización completa del canal mayorista.',
        },
        {
          id: 'fieldservices',
          code: 'SEC.06',
          shortName: 'Servicios Técnicos y B2B',
          title: 'Servicios Técnicos y Empresas B2B',
          markets: 'ESPAÑA · EE. UU. · OPERACIONES EN CAMPO',
          problemLabel: 'DIAGNÓSTICO OPERATIVO',
          problem:
            'Partes de trabajo en papel, demoras de días en emitir presupuestos o facturas tras finalizar un servicio y desconexión entre técnicos en ruta y administración.',
          solutionLabel: 'ENFOQUE DE INGENIERÍA',
          solution:
            'Aplicaciones móviles y PWAs con funcionamiento offline para técnicos en campo, conectadas directamente con presupuestación, ERP/CRM y facturación automática.',
          automations: [
            'App móvil / PWA offline para partes de trabajo, fotografías, checklist y firma del cliente en sitio',
            'Emisión ágil de presupuestos in situ con aprobación digital y conversión inmediata a orden',
            'Sincronización automática con ERP, CRM, inventario de furgoneta y planificación de rutas',
            'Facturación automatizada al cerrar el parte y conciliación directa de cobros',
          ],
          stackTargets: ['App Móvil / PWA Offline', 'Despacho & Rutas Web', 'Sincronización ERP / CRM', 'Facturación Electrónica'],
          impact:
            'Compresión del ciclo desde la visita técnica hasta el cobro en caja, mayor productividad por cuadrilla y cero partes extraviados.',
        },
      ],
    },
    plans: {
      sectionCode: '03',
      sectionLabel: 'MODELOS DE CONTRATACIÓN',
      title: 'Tres esquemas comerciales adaptados a cada etapa y presupuesto',
      intro:
        'Estructuramos la relación comercial según el horizonte financiero y operativo de su organización: desde despliegue ágil bajo cuota mensual hasta propiedad total del activo de software o licenciamiento corporativo.',
      scopeLabel: 'ALCANCE INCLUIDO',
      ownershipLabel: 'PROPIEDAD Y OPERACIÓN',
      idealForLabel: 'PERFIL ÓPTIMO',
      footnote:
        'Todos los modelos incluyen especificación técnica previa por escrito, métricas claras de entrega y operación bilingüe para equipos en España y Estados Unidos.',
      items: [
        {
          id: 'saas',
          code: 'PLAN 01',
          name: 'Renta de Software',
          subtitle: 'SaaS / PaaS Mensual',
          billingTag: 'OPEX · CUOTA MENSUAL',
          summary:
            'Acceso operativo inmediato a aplicaciones y automatizaciones gestionadas sin inversión inicial elevada en infraestructura ni equipo interno.',
          features: [
            'Despliegue ágil adaptado a los flujos operativos de la empresa',
            'Alojamiento cloud gestionado, monitorización y copias de seguridad',
            'Mantenimiento correctivo, seguridad y actualizaciones continuas',
            'Soporte técnico operativo con acuerdos de respuesta definidos',
          ],
          ownership: 'Servicio gestionado integralmente por nuestra firma con SLA continuo.',
          idealFor: 'Empresas y locales que priorizan rapidez de puesta en marcha y coste mensual predecible.',
          cta: 'Evaluar Plan Mensual',
        },
        {
          id: 'turnkey',
          code: 'PLAN 02',
          name: 'Venta Llave en Mano',
          subtitle: 'Desarrollo a Medida / Turnkey',
          billingTag: 'CAPEX · PROYECTO CERRADO',
          summary:
            'Ingeniería a medida con alcance cerrado, hitos verificables y entrega completa del producto listo para operar en infraestructura propia o del cliente.',
          features: [
            'Arquitectura, diseño UX/UI y desarrollo multiplataforma a medida',
            'Transferencia de propiedad intelectual del código fuente según acuerdo',
            'Despliegue en producción, configuración PWA e integraciones clave',
            'Documentación técnica, manuales y transferencia de conocimiento al equipo',
          ],
          ownership: 'Activo tecnológico propio con entrega de repositorios y documentación completa.',
          idealFor: 'Compañías que buscan construir patrimonio digital propio sin dependencia de cuotas perpetuas.',
          cta: 'Cotizar Llave en Mano',
        },
        {
          id: 'enterprise',
          code: 'PLAN 03',
          name: 'Licenciamiento Corporativo',
          subtitle: 'White-Label / Enterprise License',
          billingTag: 'MULTI-SEDE · MARCA PROPIA',
          summary:
            'Licenciamiento de sistemas completos, módulos verticales o motores de automatización bajo la marca e identidad visual del cliente o grupo empresarial.',
          features: [
            'Despliegue White-Label bajo dominio y marca corporativa del cliente',
            'Arquitectura preparada para operación multi-sede, cadenas o franquicias',
            'Personalización de conectores ERP/CRM/TPV y flujos corporativos',
            'Equipo de soporte dedicado, evolución prioritaria y SLA empresarial',
          ],
          ownership: 'Licencia corporativa ampliada con entorno dedicado y gobierno centralizado.',
          idealFor: 'Grupos empresariales, franquicias, consultoras o socios que comercializan o despliegan en múltiples sedes.',
          cta: 'Consultar Licencia Enterprise',
        },
      ],
    },
    process: {
      sectionCode: '04',
      sectionLabel: 'METODOLOGÍA DE EJECUCIÓN',
      title: 'Proceso de ingeniería en cuatro fases verificables',
      intro:
        'Eliminamos la incertidumbre habitual en proyectos de software mediante entregas incrementales, documentación precisa y validación temprana con usuarios reales.',
      deliverablesLabel: 'ENTREGABLES',
      steps: [
        {
          code: '01',
          title: 'Diagnóstico y Alcance',
          duration: 'FASE INICIAL',
          description:
            'Auditoría de procesos actuales, cuellos de botella operativos, sistemas existentes (ERP, TPV, CRM) y definición rigurosa de objetivos de negocio y retorno.',
          deliverables: ['Mapa de procesos y flujos', 'Especificación funcional y alcance', 'Planificación y modelo comercial'],
        },
        {
          code: '02',
          title: 'Arquitectura y Diseño',
          duration: 'DISEÑO TÉCNICO & UX',
          description:
            'Selección objetiva de plataformas, lenguajes e integraciones junto con prototipado de interfaces sobrias de alta usabilidad validadas antes de escribir código.',
          deliverables: ['Diagrama de arquitectura e integraciones', 'Sistema de diseño y prototipo UX/UI', 'Modelo de datos y seguridad'],
        },
        {
          code: '03',
          title: 'Desarrollo e Integración',
          duration: 'CONSTRUCCIÓN ITERATIVA',
          description:
            'Implementación en ciclos cortos con demos funcionales periódicas, pruebas automatizadas, conexión de APIs, pasarelas de pago y flujos de automatización.',
          deliverables: ['Código limpio y versionado', 'Integraciones API / Pagos / IA', 'Entorno de validación (Staging)'],
        },
        {
          code: '04',
          title: 'Despliegue, PWA y Soporte',
          duration: 'PRODUCCIÓN & EVOLUCIÓN',
          description:
            'Puesta en marcha con rendimiento optimizado, instalación PWA o publicación en tiendas, monitorización activa, formación al equipo y evolución continua.',
          deliverables: ['Despliegue cloud y PWA lista', 'Monitorización y copias de seguridad', 'Soporte técnico y SLA acordado'],
        },
      ],
    },
    ctaBand: {
      code: 'INIT // REUNIÓN TÉCNICA',
      title: 'Evaluemos la arquitectura y el retorno de su próximo sistema',
      description:
        'Sesión directa de 30 minutos con perfil técnico-estratégico para analizar su operativa, definir el alcance más eficiente y proponer el modelo de contratación adecuado.',
      button: 'Agendar Reunión',
    },
    footer: {
      summary:
        'Firma de ingeniería de software multiplataforma, arquitectura cloud y automatización empresarial. Operación remota y presencial orientada a España y Estados Unidos.',
      navigationTitle: 'NAVEGACIÓN',
      contactTitle: 'CONTACTO DIRECTO',
      pwaTitle: 'APLICACIÓN PWA',
      pwaReadyText: 'Instale esta presentación ejecutiva en móvil, tablet o escritorio para acceso inmediato incluso sin conexión.',
      pwaInstalledText: 'Aplicación ejecutándose en modo instalado con soporte offline activo.',
      pwaInstallBtn: 'Instalar PWA',
      pwaInstalledBtn: 'PWA Instalada',
      pwaManualTitle: 'Cómo instalar en este dispositivo',
      pwaManualIos: 'En Safari (iOS/iPadOS): pulse el icono Compartir y seleccione «Añadir a pantalla de inicio».',
      pwaManualDesktop:
        'En Chrome, Edge o navegador compatible: pulse el icono de instalación en la barra de direcciones o abra el menú del navegador y seleccione «Instalar aplicación».',
      copyright: '© 2026 DB Systems. Ingeniería de Software & Automatización.',
      operationsNote: 'ESPAÑA · ESTADOS UNIDOS · MULTI-PLATAFORMA',
    },
    modal: {
      code: 'BRIEF // CONSULTA EJECUTIVA',
      title: 'Agendar Reunión Técnica',
      subtitle:
        'Indique el contexto de su proyecto para preparar una sesión enfocada en arquitectura, plazos y modelo comercial.',
      directChannelsLabel: 'CANALES DIRECTOS',
      formTitle: 'RESUMEN DE ALCANCE',
      fields: {
        name: 'Nombre y cargo',
        namePlaceholder: 'Ej. Carlos Méndez, Director de Operaciones',
        company: 'Empresa / Grupo',
        companyPlaceholder: 'Nombre de la organización',
        email: 'Correo corporativo',
        emailPlaceholder: 'nombre@empresa.com',
        market: 'Mercado principal',
        plan: 'Modelo de interés',
        industry: 'Sector operativo',
        brief: 'Objetivo principal o proceso a automatizar',
        briefPlaceholder: 'Describa brevemente la plataforma, integración o cuello de botella que busca resolver...',
      },
      markets: {
        spain: 'España / UE',
        us: 'Estados Unidos',
        both: 'España y EE. UU.',
      },
      submitMail: 'Abrir solicitud por correo',
      copyBrief: 'Copiar resumen técnico',
      copiedConfirm: 'Resumen copiado',
      closeLabel: 'Cerrar ventana',
    },
  },
  en: {
    meta: {
      title: 'DB Systems — Enterprise Cross-Platform Software & Automation Engineering',
      description:
        'Cross-platform software engineering, cloud architecture, and custom business process automation firm serving Spain and the United States.',
    },
    brand: {
      ...BRAND_CONTACT,
      descriptor: 'Software & Automation Engineering',
      regions: 'Spain · United States',
    },
    nav: {
      capabilities: 'Capabilities',
      industries: 'Industries',
      plans: 'Models',
      process: 'Process',
      cta: 'Schedule Call',
      menuLabel: 'Navigation menu',
    },
    hero: {
      eyebrow: 'SYS.00 // SPAIN · UNITED STATES · STACK-AGNOSTIC ARCHITECTURE',
      headline: 'Enterprise Cross-Platform Software & Automation Engineering',
      subtitle:
        'We architect, engineer, and integrate custom web, mobile, desktop, PWA, and process automation systems. No single-language lock-in: we select and adapt the exact stack your operation demands.',
      primaryCta: 'Schedule Call',
      secondaryCta: 'Explore Capabilities',
      architectureNote: 'DIRECT C-LEVEL & CTO INTERLOCUTION · PRODUCTION-PROVEN DELIVERY',
      metrics: [
        {
          value: '15+',
          label: 'Years of combined engineering track record',
          detail: 'Software architecture, B2B technical consulting, and mission-critical systems.',
        },
        {
          value: '200+',
          label: 'Production platforms deployed',
          detail: 'Corporate portals, e-commerce systems, and high-throughput transactional applications.',
        },
        {
          value: '150+',
          label: 'SMEs digitally transformed',
          detail: 'Verified compliance delivery, W3C/WCAG standards, and Stripe / Redsys payment rails.',
        },
        {
          value: 'Multi-OS',
          label: 'Web · iOS · Android · Desktop',
          detail: 'Cross-platform, multi-language engineering focused on measurable operational ROI.',
        },
      ],
    },
    capabilities: {
      sectionCode: '01',
      sectionLabel: 'TECHNICAL BACKING & INSTALLED CAPACITY',
      title: 'Engineering discipline forged in mission-critical and commercial environments',
      intro:
        'Our firm builds on more than fifteen years of technical leadership, cloud architecture, and production software delivery across government entities, financial institutions, enterprise operators, and scaling SMEs. We own the full lifecycle—from technical scoping to stable production operations.',
      agnosticBanner: {
        code: 'DOCTRINE // CROSS-PLATFORM & MULTI-LANGUAGE',
        title: 'Stack-agnostic by principle. Engineered for operational fit.',
        description:
          'While our production foundation spans extensive work in PHP/Laravel, JavaScript/TypeScript, Node.js, React, Strapi, PostgreSQL, AWS, and Azure, our firm operates as a strictly cross-platform, multi-language organization. We build for Web, iOS, Android, PWAs, Desktop, and backend automation—adopting or integrating whichever language and runtime best aligns with each client’s operational and technical constraints.',
        platforms: [
          'Web & PWA',
          'iOS & Android',
          'Desktop (Win / macOS / Linux)',
          'APIs & Microservices',
          'Automation & AI',
          'Cloud & On-Premise',
        ],
      },
      trackRecordTitle: 'VERIFIED PRODUCTION FOUNDATION',
      trackRecord: [
        {
          code: 'TR-01',
          sector: 'PUBLIC SECTOR & HIGH CONCURRENCY',
          title: 'Mission-Critical Cloud Architecture',
          description:
            'Infrastructure and web ecosystem leadership on AWS and Azure engineered for massive national traffic spikes, stringent cybersecurity standards, and W3C/WCAG accessibility—including end-to-end digitization of high-volume citizen mobility workflows on Headless architecture.',
          proof: 'Ministry of Transport · Citizen Mobility Portal · AWS & Azure',
        },
        {
          code: 'TR-02',
          sector: 'BANKING, ENERGY & IT CONTINUITY',
          title: 'Enterprise Availability & ITIL V3 Governance',
          description:
            'Hands-on systems engineering, data center operations, enterprise monitoring, critical storage/backup architectures, and ITIL V3 availability management aligned with strict SLAs across Tier-1 banking and industrial institutions.',
          proof: 'Tier-1 Banks · Credibanco Visa · Ecopetrol · Telmex · Civil Aviation',
        },
        {
          code: 'TR-03',
          sector: 'B2B COMMERCE & TRANSACTIONAL SYSTEMS',
          title: 'Commercial Platforms & Payment Infrastructure',
          description:
            'Technical coordination and production launch of 200+ web platforms, secure payment gateway integrations (Stripe, Redsys, PayPal), and structured digital transformation advisory for 150+ SMEs in Spain under audited compliance frameworks.',
          proof: '200+ platforms · 150+ SMEs · C-Level & CTO Technical Advisory',
        },
        {
          code: 'TR-04',
          sector: 'APPLIED AI & WORKFLOW AUTOMATION',
          title: 'Autonomous Agents & Process Efficiency',
          description:
            'Practical design and deployment of virtual agents, automated intake/sales pipelines, and operational workflows engineered to reduce manual overhead, shorten response times, and deliver verifiable ROI.',
          proof: 'Applied AI for SMEs Certification (UCJC) · CRM / ERP / Omnichannel Flows',
        },
      ],
      matrixTitle: 'CAPABILITY MATRIX',
      matrixSubtitle: 'An open engineering stack tailored to each organization’s latency, compliance, and total-cost requirements.',
      domains: [
        {
          code: 'CAP.01',
          title: 'Platforms & Interfaces',
          summary: 'Fast, cohesive digital products across every screen size and operating system.',
          items: [
            'High-performance Web applications (SPA / SSR) and installable Progressive Web Apps (PWA) with offline support',
            'Native and cross-platform mobile applications for iOS and Android',
            'Cross-platform desktop software (Windows, macOS, Linux) for internal operations and POS environments',
            'B2B design systems, data-dense operational consoles, and W3C/WCAG accessibility compliance',
          ],
          note: 'React · Next.js · TypeScript · Swift / Kotlin · Flutter · Electron / Tauri',
        },
        {
          code: 'CAP.02',
          title: 'Backend, APIs & Multi-Language',
          summary: 'Decoupled business logic, clean integrations, and objective language selection.',
          items: [
            'Low-latency REST, GraphQL, Webhooks, and event-driven asynchronous services',
            'Polyglot execution choosing the right runtime per workload: Node.js/TypeScript, PHP/Laravel, Python, Go, Java, C#/.NET, or Rust',
            'Payment rails (Stripe, Redsys, PayPal, SEPA/ACH), POS/TPV integration, and automated billing engines',
            'Headless CMS architectures, ERP/CRM synchronization, and legacy system modernization',
          ],
          note: 'Polyglot by design · SQL (PostgreSQL / MySQL / SQL Server) & NoSQL',
        },
        {
          code: 'CAP.03',
          title: 'Automation, Data & AI',
          summary: 'Eliminating manual bottlenecks through auditable pipelines and applied intelligence.',
          items: [
            'End-to-end orchestration across CRM, ERP, email, WhatsApp Business, messaging, and financial tools',
            'Domain-grounded virtual agents for lead qualification, booking, triage, and customer support',
            'Document extraction, automated contract/quote generation, and executive reporting pipelines',
            'Real-time multi-location operational metrics and anomaly alerting',
          ],
          note: 'LLMs · RAG · Event Queues / n8n · ETL · Auditable Pipelines',
        },
        {
          code: 'CAP.04',
          title: 'Infrastructure & Deployment',
          summary: 'Observable, resilient, and cost-disciplined production environments from day one.',
          items: [
            'Cloud and dedicated infrastructure across AWS, Microsoft Azure, GCP, or private servers',
            'Containerization, automated CI/CD delivery pipelines, and reproducible staging environments',
            'Backup architectures, high availability, active monitoring, and role-based access hardening',
            'Technical governance aligned with business continuity, ITIL SLA targets, and cloud cost control',
          ],
          note: 'AWS · Azure · Docker · Linux · CI/CD · Security & ITIL Continuity',
        },
      ],
    },
    industries: {
      sectionCode: '02',
      sectionLabel: 'INDUSTRY SOLUTIONS // SPAIN & UNITED STATES',
      title: 'High-demand verticals engineered around real operational bottlenecks',
      intro:
        'We build purpose-fit applications and automations for sectors where manual handoffs, aggregator fees, and fragmented tools directly compress operating margins.',
      architectureHeading: 'KEY AUTOMATIONS & MODULES',
      targetsHeading: 'PLATFORMS & INTEGRATIONS',
      impactHeading: 'OPERATIONAL IMPACT',
      pillarsHeading: 'FOUR-PILLAR OPERATIONAL ARCHITECTURE',
      ctaText: 'Request assessment for this sector',
      items: [
        {
          id: 'hospitality',
          code: 'SEC.01',
          shortName: 'Hospitality & Foodservice',
          title: 'Hospitality & Foodservice',
          markets: 'SPAIN · UNITED STATES · GROUPS & FRANCHISES',
          problemLabel: 'OPERATIONAL DIAGNOSIS',
          problem:
            'Margin erosion from 25–35% third-party delivery commissions, unmanaged table no-shows, unmonitored food waste, and disconnected front-of-house, kitchen, POS, and supplier workflows across locations.',
          solutionLabel: 'ENGINEERING APPROACH',
          solution:
            'An owned end-to-end digital ecosystem connecting agile digital menus and direct ordering channels with Kitchen Display Systems (KDS), recipe costing, and multi-unit reporting.',
          automations: [
            'Automated WhatsApp/SMS reservation confirmations, reminders, and waitlist backfill',
            'Direct web/PWA pickup and delivery channels with native Stripe / Redsys checkout',
            'Low-stock threshold triggers with automated supplier purchase orders',
            'Daily multi-location consolidation of revenue, average check, labor shifts, and waste',
          ],
          stackTargets: ['Guest PWA / Menu', 'Kitchen KDS Tablet', 'POS / TPV Sync', 'WhatsApp & Payments'],
          impact:
            'Direct recovery of third-party aggregator margins, significant drop in no-shows, and real-time visibility into plate cost and store-level profitability.',
          hospitalityPillars: [
            {
              code: 'H-01',
              title: 'Floor, ordering & kitchen',
              description:
                'Frictionless flow from table and bar to kitchen pass—eliminating ticket errors and intermediary commissions.',
              deliverables: [
                'Instant-load multilingual PWA digital menus with allergen filtering',
                'Table and bar ordering with bill splitting and direct mobile checkout',
                'Branded direct delivery & takeaway channels to reduce aggregator fees',
                'Synchronized Kitchen Display Systems (KDS) by station and prep time',
              ],
            },
            {
              code: 'H-02',
              title: 'Reservations & repeat guests',
              description:
                'Real-time floor pacing combined with automated guest retention and table protection.',
              deliverables: [
                'Table management, turn-time rules, and digital waitlist queues',
                'Automated anti-no-show confirmations, reminders, and deposit options',
                'Owned guest CRM and automated loyalty / repeat-visit programs',
              ],
            },
            {
              code: 'H-03',
              title: 'Operations, purchasing & cost control',
              description:
                'Granular raw-material traceability to defend gross margins against supplier volatility.',
              deliverables: [
                'Real-time inventory control, batch tracking, and structured waste logging',
                'Automated supplier restocking triggered by actual consumption',
                'Bidirectional POS/TPV integration and dynamic recipe costing (escandallos)',
              ],
            },
            {
              code: 'H-04',
              title: 'Multi-location operations',
              description:
                'Centralized operational visibility for hospitality groups, ghost kitchens, and franchise networks.',
              deliverables: [
                'Consolidated sales, COGS, and variance dashboards across all sites',
                'Unified staff scheduling, shift tracking, and labor-to-sales ratios',
                'Centralized menu, pricing, and regional promotion governance',
              ],
            },
          ],
        },
        {
          id: 'healthcare',
          code: 'SEC.02',
          shortName: 'Healthcare & Clinics',
          title: 'Healthcare & Private Clinics',
          markets: 'SPAIN (GDPR) · UNITED STATES (HIPAA-READY)',
          problemLabel: 'OPERATIONAL DIAGNOSIS',
          problem:
            'Front-desk phone bottlenecks, costly appointment no-shows, paper intake forms duplicating staff effort, and fragmented post-visit patient follow-up.',
          solutionLabel: 'ENGINEERING APPROACH',
          solution:
            'Secure digital intake, automated scheduling workflows, and private patient follow-up portals built with strict access control, encryption, and compliance discipline.',
          automations: [
            'Online scheduling synchronized with live practitioner and room availability',
            'Multi-step anti-no-show reminders and automated slot rescheduling via SMS/WhatsApp/Email',
            'Digital pre-visit triage, intake questionnaires, and e-signed consent forms',
            'Patient follow-up portals for care instructions, documents, billing, and recall alerts',
          ],
          stackTargets: ['Patient Web / PWA', 'Front-Desk & Clinician Console', 'SMS / WhatsApp API', 'EHR / ERP Connectors'],
          impact:
            'Higher schedule utilization, lower front-desk call volume, and expanded clinical throughput without adding administrative headcount.',
        },
        {
          id: 'legal',
          code: 'SEC.03',
          shortName: 'Law Firms & LegalTech',
          title: 'Law Firms & Consultancies',
          markets: 'SPAIN · UNITED STATES · B2B PRACTICES',
          problemLabel: 'OPERATIONAL DIAGNOSIS',
          problem:
            'Billable partner hours lost qualifying mismatched inquiries, repetitive manual drafting of standard agreements, and case updates buried across email threads.',
          solutionLabel: 'ENGINEERING APPROACH',
          solution:
            'Structured client intake engines, controlled document assembly pipelines, and traceable case-management portals built for professional services rigor.',
          automations: [
            'Automated lead capture and structured legal/advisory qualification routed by practice area',
            'Template-driven document generation populated directly from validated matter data',
            'End-to-end matter traceability with statutory deadlines, milestones, and audit trails',
            'Private client portals for case status, secure document exchange, and digital signatures',
          ],
          stackTargets: ['Client Web Portal', 'Document Engine', 'CRM & Calendar Sync', 'E-Signature & Audit Log'],
          impact:
            'Faster client onboarding, elimination of copy-paste drafting risk, and disciplined visibility over deadlines and billable utilization.',
        },
        {
          id: 'realestate',
          code: 'SEC.04',
          shortName: 'Real Estate & Property Mgmt',
          title: 'Real Estate & Property Management',
          markets: 'SPAIN · UNITED STATES · PORTFOLIOS',
          problemLabel: 'OPERATIONAL DIAGNOSIS',
          problem:
            'Manual rent collection and owner payout reconciliations, maintenance requests scattered across chat apps, and out-of-sync listings across portals and internal CRMs.',
          solutionLabel: 'ENGINEERING APPROACH',
          solution:
            'Unified owner, tenant, and operator portals integrating automated billing, traceable maintenance workflows, and bidirectional listing syndication.',
          automations: [
            'Dedicated owner portals (yields, statements, invoices) and tenant portals (leases, receipts)',
            'Automated rent collection (ACH / SEPA / card) and monthly owner settlement reports',
            'Structured maintenance ticketing with vendor dispatch, quote approval, and photo closeout',
            'Automated multi-portal listing synchronization and lead capture into internal CRM',
          ],
          stackTargets: ['Owner / Tenant Portals', 'Maintenance PWA', 'ACH / SEPA / Stripe', 'MLS / Portal Feeds & CRM'],
          impact:
            'Higher units-per-manager ratio, transparent reporting for property owners, and faster turnaround on arrears and maintenance incidents.',
        },
        {
          id: 'ecommerce',
          code: 'SEC.05',
          shortName: 'E-commerce, Retail & Logistics',
          title: 'E-commerce, Retail & Logistics',
          markets: 'SPAIN · EU · UNITED STATES · OMNICHANNEL',
          problemLabel: 'OPERATIONAL DIAGNOSIS',
          problem:
            'Inventory mismatches and overselling across physical stores, web storefronts, and marketplaces; manual shipping label workflows; and wholesale B2B orders trapped in PDFs and phone calls.',
          solutionLabel: 'ENGINEERING APPROACH',
          solution:
            'Real-time multi-channel stock synchronization, automated order fulfillment pipelines, and self-service B2B ordering portals with account-specific pricing.',
          automations: [
            'Live inventory, catalog, and pricing sync across ERP, retail POS, web, and marketplaces',
            'Automated order routing, carrier label generation, and warehouse dispatch orchestration',
            'Real-time shipment tracking with proactive customer and exception alerts',
            'Private B2B portals with custom price tiers, repeat order templates, and credit controls',
          ],
          stackTargets: ['Headless Commerce', 'B2B Ordering Portal', 'ERP / WMS Connectors', 'Carrier & Payment APIs'],
          impact:
            'Elimination of stock discrepancies, faster warehouse dispatch with fewer picking errors, and full digitization of recurring B2B wholesale volume.',
        },
        {
          id: 'fieldservices',
          code: 'SEC.06',
          shortName: 'Field Services & B2B Ops',
          title: 'Home Services & B2B Field Operations',
          markets: 'SPAIN · UNITED STATES · FIELD TEAMS',
          problemLabel: 'OPERATIONAL DIAGNOSIS',
          problem:
            'Paper work orders, multi-day delays issuing quotes and invoices after site visits, and operational blind spots between mobile field technicians and back-office finance.',
          solutionLabel: 'ENGINEERING APPROACH',
          solution:
            'Offline-capable mobile apps and PWAs for field teams synchronized directly with rapid quoting engines, ERP/CRM systems, and automated invoicing.',
          automations: [
            'Offline-first mobile / PWA work orders with checklists, site photos, and on-glass customer sign-off',
            'On-site quote generation with instant digital approval and one-click conversion to work order',
            'Bidirectional sync with ERP, CRM, van inventory, and technician route scheduling',
            'Automated invoicing upon job completion with direct payment links and reconciliation',
          ],
          stackTargets: ['Offline Mobile / PWA', 'Dispatch & Routing Console', 'ERP / CRM Sync', 'Automated Invoicing'],
          impact:
            'Compressed quote-to-cash cycle, higher completed jobs per technician, and zero lost work orders or unbilled parts.',
        },
      ],
    },
    plans: {
      sectionCode: '03',
      sectionLabel: 'COMMERCIAL ENGAGEMENT MODELS',
      title: 'Three flexible commercial structures aligned to capital and scale',
      intro:
        'We structure software engagements around each client’s operational and financial horizon—ranging from predictable monthly managed delivery to full IP turnkey ownership or white-label enterprise licensing.',
      scopeLabel: 'INCLUDED SCOPE',
      ownershipLabel: 'OWNERSHIP & OPERATIONS',
      idealForLabel: 'OPTIMAL FIT',
      footnote:
        'Every engagement begins with a written technical specification, transparent delivery milestones, and bilingual execution for teams in Spain and the United States.',
      items: [
        {
          id: 'saas',
          code: 'PLAN 01',
          name: 'Software Rental',
          subtitle: 'Monthly SaaS / PaaS',
          billingTag: 'OPEX · MONTHLY SUBSCRIPTION',
          summary:
            'Rapid operational deployment of tailored applications and automations under a predictable monthly fee—without heavy upfront capital expenditure.',
          features: [
            'Agile deployment configured to your operational workflows',
            'Managed cloud hosting, active monitoring, and automated backups',
            'Continuous security patches, maintenance, and platform updates',
            'Ongoing technical support backed by defined response SLAs',
          ],
          ownership: 'Fully managed end-to-end by our engineering team under an ongoing SLA.',
          idealFor: 'Operators and businesses prioritizing speed to market and predictable monthly OPEX.',
          cta: 'Evaluate Monthly Plan',
        },
        {
          id: 'turnkey',
          code: 'PLAN 02',
          name: 'Turnkey Delivery',
          subtitle: 'Custom Engineering / Fixed Scope',
          billingTag: 'CAPEX · FIXED PROJECT',
          summary:
            'Bespoke cross-platform software built to exact specifications with milestone-based delivery and full handover to your own infrastructure.',
          features: [
            'Custom architecture, UX/UI engineering, and multi-platform build',
            'Intellectual property & source-code transfer per project agreement',
            'Production deployment, PWA setup, and third-party API integrations',
            'Complete technical documentation and team handover sessions',
          ],
          ownership: 'Client-owned software asset with full repository handover and documentation.',
          idealFor: 'Organizations building proprietary digital equity without recurring software rent.',
          cta: 'Request Turnkey Quote',
        },
        {
          id: 'enterprise',
          code: 'PLAN 03',
          name: 'Corporate Licensing',
          subtitle: 'White-Label / Enterprise License',
          billingTag: 'MULTI-SITE · WHITE-LABEL',
          summary:
            'Licensing of proven systems, vertical modules, or automation engines under your own brand identity for multi-location rollout or partner distribution.',
          features: [
            'Full White-Label deployment under your corporate brand and domain',
            'Architecture ready for multi-location groups, chains, or franchises',
            'Custom ERP / CRM / POS connectors and enterprise workflow rules',
            'Dedicated engineering support, priority roadmap, and enterprise SLA',
          ],
          ownership: 'Extended corporate license with isolated environment and centralized governance.',
          idealFor: 'Enterprise groups, franchise networks, consultancies, or strategic partners deploying across multiple sites.',
          cta: 'Discuss Enterprise License',
        },
      ],
    },
    process: {
      sectionCode: '04',
      sectionLabel: 'DELIVERY METHODOLOGY',
      title: 'Structured engineering execution in four verifiable phases',
      intro:
        'We replace software project ambiguity with written specifications, iterative production validation, and transparent milestone sign-off.',
      deliverablesLabel: 'DELIVERABLES',
      steps: [
        {
          code: '01',
          title: 'Discovery & Scope',
          duration: 'INITIAL PHASE',
          description:
            'Audit of current workflows, operational bottlenecks, existing software (ERP, POS, CRM), and rigorous definition of business goals and ROI metrics.',
          deliverables: ['Operational workflow map', 'Functional & technical scope', 'Timeline & commercial structure'],
        },
        {
          code: '02',
          title: 'Architecture & Design',
          duration: 'SYSTEM & UX DESIGN',
          description:
            'Objective platform, language, and integration selection paired with high-precision UX/UI prototypes validated before production coding starts.',
          deliverables: ['System & integration blueprint', 'Design system & UX prototype', 'Data model & security spec'],
        },
        {
          code: '03',
          title: 'Engineering & Integration',
          duration: 'ITERATIVE BUILD',
          description:
            'Short engineering cycles with working demos, automated verification, API and payment gateway integrations, and operational workflow automation.',
          deliverables: ['Versioned production codebase', 'API / Payment / AI integrations', 'Staging validation environment'],
        },
        {
          code: '04',
          title: 'Deployment, PWA & Support',
          duration: 'PRODUCTION & SLA',
          description:
            'Production launch with optimized load speed, installable PWA or app store release, active observability, team onboarding, and continuous evolution.',
          deliverables: ['Cloud & PWA production launch', 'Monitoring & backup policy', 'Technical support & agreed SLA'],
        },
      ],
    },
    ctaBand: {
      code: 'INIT // TECHNICAL BRIEFING',
      title: 'Review the architecture and ROI of your next system',
      description:
        'A focused 30-minute technical and strategic session to evaluate your operation, scope the right architecture, and align on the optimal engagement model.',
      button: 'Schedule Call',
    },
    footer: {
      summary:
        'Cross-platform software engineering, cloud architecture, and business automation firm operating across Spain and the United States.',
      navigationTitle: 'NAVIGATION',
      contactTitle: 'DIRECT CONTACT',
      pwaTitle: 'PWA APPLICATION',
      pwaReadyText: 'Install this executive dossier on mobile, tablet, or desktop for instant standalone and offline access.',
      pwaInstalledText: 'Running as an installed standalone application with offline support enabled.',
      pwaInstallBtn: 'Install PWA',
      pwaInstalledBtn: 'PWA Installed',
      pwaManualTitle: 'How to install on this device',
      pwaManualIos: 'On Safari (iOS/iPadOS): tap the Share icon and choose “Add to Home Screen”.',
      pwaManualDesktop:
        'On Chrome, Edge, or compatible browsers: click the install icon in the address bar or open the browser menu and select “Install app”.',
      copyright: '© 2026 DB Systems. Software & Automation Engineering.',
      operationsNote: 'SPAIN · UNITED STATES · CROSS-PLATFORM',
    },
    modal: {
      code: 'BRIEF // EXECUTIVE CONSULTATION',
      title: 'Schedule Technical Call',
      subtitle:
        'Share brief operational context so we can come prepared with architectural options, timelines, and commercial structures.',
      directChannelsLabel: 'DIRECT CHANNELS',
      formTitle: 'SCOPE SUMMARY',
      fields: {
        name: 'Name & Role',
        namePlaceholder: 'e.g. Alex Carter, VP of Operations',
        company: 'Company / Group',
        companyPlaceholder: 'Organization name',
        email: 'Work Email',
        emailPlaceholder: 'name@company.com',
        market: 'Primary Market',
        plan: 'Engagement Model',
        industry: 'Industry Vertical',
        brief: 'Core objective or process to automate',
        briefPlaceholder: 'Briefly outline the application, integration, or operational bottleneck you want to address...',
      },
      markets: {
        spain: 'Spain / EU',
        us: 'United States',
        both: 'Spain & US',
      },
      submitMail: 'Open Email Brief',
      copyBrief: 'Copy Technical Brief',
      copiedConfirm: 'Brief Copied',
      closeLabel: 'Close modal',
    },
  },
};
