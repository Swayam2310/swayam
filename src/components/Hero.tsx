import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillTags = [
    'Python', 'SQL', 'PySpark', 'FastAPI', 'LangGraph',
    'Databricks', 'AWS', 'Azure', 'Power BI', 'Snowflake',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background"
    >
      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 space-y-8">
            <span className="eyebrow">Portfolio</span>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
                Swayam Patel
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-medium">
                Data &amp; AI Consultant
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I&apos;m a Data &amp; AI professional based in Australia with experience across
              data engineering, analytics, machine learning, and AI-driven solutions. I work
              with Python, SQL, Spark, FastAPI, LangGraph, cloud platforms, and modern data
              tools to build reliable pipelines, intelligent workflows, dashboards, and
              practical AI systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-7 h-12 text-base font-medium shadow-none"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="rounded-full border-foreground/30 hover:border-foreground hover:bg-transparent text-foreground bg-transparent px-7 h-12 text-base font-medium"
              >
                View Projects
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://github.com/Swayam-Patel-2310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/swayammpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <span className="h-4 w-px bg-border" />
              <span className="text-sm text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 align-middle" />
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Right: abstract editorial visual */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              {/* Soft circular accent behind */}
              <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-card border border-border" />
              <div className="absolute -bottom-12 -left-6 w-32 h-32 rounded-full border border-primary/30" />

              {/* Main raised card: toolkit */}
              <div className="relative rounded-[28px] bg-card border border-border p-7 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="eyebrow !mb-0">Toolkit</span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-background border border-border text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mini workflow visual */}
                <div className="rounded-2xl bg-background border border-border p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    AI Workflow
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {['Data', 'Model', 'Agent', 'API'].map((step, i) => (
                      <div key={step} className="flex items-center flex-1">
                        <div className="flex-1 text-center">
                          <div className="w-9 h-9 mx-auto rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold">
                            {i + 1}
                          </div>
                          <div className="mt-2 text-[11px] font-medium text-foreground/80">
                            {step}
                          </div>
                        </div>
                        {i < 3 && (
                          <div className="w-4 h-px bg-primary/60 mx-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Small floating stat card */}
              <div className="absolute -bottom-6 -right-2 rounded-2xl bg-foreground text-background px-4 py-3 shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Now</div>
                <div className="text-sm font-semibold">Kantheri Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
