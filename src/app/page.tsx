import {
  ArrowRight,
  EthernetPort,
  GitBranch,
  LayoutDashboard,
  Network,
  Server,
  Shield,
  Users,
  Box,
  Building2,
  TerminalSquare,
  Layers,
  Book,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Get Started", href: "#getting-started" },
];

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "One place to see what is running on your network and spot issues at a glance.",
    accent: "text-mauve",
    bg: "bg-mauve/10",
  },
  {
    icon: Building2,
    title: "Organizations",
    description:
      "Use organizations to separate your homelab into multiple logical groups, each with their own users, devices, and networks.",
    accent: "text-blue",
    bg: "bg-blue/10",
  },
  {
    icon: Users,
    title: "Members & roles",
    description:
      "Choose who has access, and what they have access to, with fine-grained roles and permissions.",
    accent: "text-green",
    bg: "bg-green/10",
  },
  {
    icon: Server,
    title: "Devices & inventory",
    description:
      "Track routers, switches, servers, and everything else by hostname, IP, vendor, and model.",
    accent: "text-peach",
    bg: "bg-peach/10",
  },
  {
    icon: EthernetPort,
    title: "Interfaces",
    description:
      "See the interfaces on each device and understand how your infrastructure is connected up.",
    accent: "text-sapphire",
    bg: "bg-sapphire/10",
  },
  {
    icon: Network,
    title: "Networks & connections",
    description:
      "Model your networks and the connections between them for a real map of your homelab.",
    accent: "text-pink",
    bg: "bg-pink/10",
  },
];

const architecture = [
  {
    icon: TerminalSquare,
    title: "API",
    tech: "Go, Gin",
    description:
      "The heart of Atranna. A REST API that handles authentication, authorization, and communication with the database and web frontend.",
    accent: "text-teal",
    border: "hover:border-teal/40",
  },
  {
    icon: Layers,
    title: "Web",
    tech: "Next.js, React",
    description: "A responsive dashboard frontend that talks to the API.",
    accent: "text-blue",
    border: "hover:border-blue/40",
  },
  {
    icon: Box,
    title: "Storage Backend",
    tech: "PostgreSQL, SQLite",
    description:
      "choose your own database. PostgreSQL is recommended for production and is required for HA deployments, SQLite is great for testing.",
    accent: "text-yellow",
    border: "hover:border-yellow/40",
  },
];

export default function Home() {
  return (
    <div className="bg-base text-text">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-mantle/60 bg-base/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-mauve"
          >
            ATRANNA
          </a>
          <div className="hidden items-center gap-8 text-sm text-subtext-0 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/atranna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-subtext-0 transition-colors hover:text-text"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="#getting-started"
              className="rounded-full bg-mauve px-4 py-2 text-sm font-semibold text-mantle transition-colors hover:bg-pink"
            >
              Get started
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(203,166,247,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(203,166,247,0.08),transparent_35%,rgba(137,180,250,0.08))]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-144 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-mauve/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(circle_at_center,black,transparent_80%)]" />

          <div className="relative mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 lg:py-28">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-extrabold leading-none tracking-[-0.06em] text-text drop-shadow-[0_0_30px_rgba(203,166,247,0.15)] sm:text-6xl lg:text-7xl">
                Network management for your{" "}
                <span className="text-mauve">homelab</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl leading-7 text-subtext-0 sm:text-lg sm:leading-8">
                Atranna is a self-hosted network management, monitoring and
                documentation tool built for homelabs of any size with
                deployment options for Docker & Kubernetes
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#getting-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r bg-mauve px-6 py-3 text-sm font-semibold text-mantle shadow-[0_15px_30px_rgba(203,166,247,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(203,166,247,0.45)]"
                >
                  Get started
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-1 bg-mantle/40 px-6 py-3 text-sm font-semibold text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-surface-2 hover:bg-mantle"
                >
                  Explore features
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-20 border-t border-mantle bg-mantle/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve">
                Features
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything your homelab needs
              </h2>
              <p className="mt-4 text-subtext-0">
                Atranna has everything you need for managing your homelab, from
                device and network documentation to integrations with your
                existing monitoring and alerting tools.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-surface-0 bg-base p-6 transition-colors hover:border-surface-1"
                >
                  <div className={`inline-flex rounded-lg p-2.5 ${feature.bg}`}>
                    <feature.icon size={20} className={feature.accent} />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-subtext-0">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="architecture"
          className="scroll-mt-20 border-t border-mantle"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve">
                Architecture
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                open-source, self-hosted, free forever
              </h2>
              <p className="mt-4 text-subtext-0">
                Atranna consists of many components, all of which are
                open-source and free to use.
              </p>
              <p className="mt-2 text-subtext-0"></p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {architecture.map((part) => (
                <div
                  key={part.title}
                  className={`rounded-xl border border-surface-0 bg-mantle/40 p-6 transition-colors ${part.border}`}
                >
                  <div className="flex items-center justify-between">
                    <part.icon size={20} className={part.accent} />
                    <span className="font-mono text-xs text-subtext-0">
                      {part.tech}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold">{part.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-subtext-0">
                    {part.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="getting-started"
          className="scroll-mt-20 border-t border-mantle bg-mantle/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve">
                Get started
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Up and running in minutes
              </h2>
              <p className="mt-4 text-subtext-0">
                Deploy the API and WebUI, then log in and add your first
                organization.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              <div className="rounded-xl border border-surface-0 bg-base p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mauve/10 font-bold text-mauve">
                    1
                  </span>
                  <h3 className="font-semibold">Deploy the stack</h3>
                </div>
                <p className="mt-3 text-sm text-subtext-0">
                  Use Docker Compose or the provided Helm charts to spin up the
                  API and WebUI with your preferred database.
                </p>
              </div>

              <div className="rounded-xl border border-surface-0 bg-base p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mauve/10 font-bold text-mauve">
                    2
                  </span>
                  <h3 className="font-semibold">Create an account</h3>
                </div>
                <p className="mt-3 text-sm text-subtext-0">
                  Register your first user, create an organization, and invite
                  any other users you want to share access with.
                </p>
              </div>

              <div className="rounded-xl border border-surface-0 bg-base p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mauve/10 font-bold text-mauve">
                    3
                  </span>
                  <h3 className="font-semibold">Add your network</h3>
                </div>
                <p className="mt-3 text-sm text-subtext-0">
                  Register your devices, define your networks, and start wiring
                  up connections.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href="https://github.com/atranna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mauve px-6 py-3 text-sm font-semibold text-mantle transition-colors hover:bg-pink"
                >
                  <Book size={16} />
                  Deployment Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-mantle">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <div className="rounded-xl border border-yellow/20 bg-yellow/5 p-6">
              <div className="flex items-center justify-center gap-2 text-yellow">
                <Shield size={18} />
                <h3 className="font-semibold">Early in development</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-subtext-0">
                Atranna is a work in progress. APIs, models, and storage are all
                subject to change without notice, so don&apos;t use it in
                production yet. Contributions are welcome.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-mantle bg-crust">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-lg font-extrabold tracking-tight text-mauve"
            >
              ATRANNA
            </a>
            <span className="text-sm text-subtext-0">
              Network management for your homelab.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-subtext-0">
            <a
              href="https://github.com/atranna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
            >
              <GitBranch size={16} />
              GitHub
            </a>
            <a
              href="https://github.com/atranna/atranna-web"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text"
            >
              WebUI
            </a>
            <a
              href="https://github.com/atranna/atranna-api"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text"
            >
              API
            </a>
          </div>
          <p className="text-xs text-subtext-0">
            © {new Date().getFullYear()} Atranna
          </p>
        </div>
      </footer>
    </div>
  );
}
