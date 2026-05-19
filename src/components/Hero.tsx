import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
                Data Scientist
                <span className="text-primary"> · </span>
                <span className="text-muted-foreground">AI &amp; Machine Learning Enthusiast</span>
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I turn complex data into clear, useful decisions — building with Python, R,
              SQL and cloud tools across NLP, computer vision, and predictive analytics.
              Always learning, always shipping.
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
                className="rounded-full border-foreground/20 hover:border-foreground hover:bg-transparent text-foreground px-7 h-12 text-base font-medium"
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

          {/* Right: editorial visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
              {/* Soft circle backdrop */}
              <div className="absolute inset-0 rounded-full bg-card border border-border" />
              {/* Inner accent ring */}
              <div className="absolute inset-6 rounded-full border border-primary/20" />
              {/* Initials medallion */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-foreground">
                    SP
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Swayam Patel
                  </div>
                </div>
              </div>
              {/* Satellite CTA */}
              <button
                onClick={() => scrollToSection('about')}
                aria-label="Learn more about me"
                className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* Thin orange orbital arc */}
              <svg
                className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="hsl(var(--primary-glow))"
                  strokeWidth="0.4"
                  strokeDasharray="2 3"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
