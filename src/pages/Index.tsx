import { WaitlistForm } from "@/components/WaitlistForm";
import heroCityscape from "@/assets/hero-cityscape.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCityscape})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-neon-flicker">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              THE QUARTER BILLBOARD
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground italic mb-4">
            A digital city that runs on time, attention, and stories.
          </p>

          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent my-8"></div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Enter the City</h2>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-3 max-w-2xl mx-auto">
            For 25 minutes every hour, the city opens its streets.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            For the next 35, it belongs to seven brands.
          </p>

          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access opens soon — step into a world where light and rhythm define discovery.
          </p>

          <WaitlistForm />

          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            <span className="text-accent font-semibold">Early members get 25% off billboard slots</span> (for the first 25 days only) 
            and first access when the city goes live.
          </p>
        </div>
      </section>

      {/* What You're Joining */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What You're Joining
            </h2>
            
            <p className="text-lg text-foreground/90 mb-6">
              This isn't another ad space. It's an attention experiment.
            </p>

            <p className="text-lg text-foreground/90 mb-6">
              The Quarter Billboard is a living digital world — a city built from light, rhythm, and curiosity.
              Every hour, it shifts between <span className="text-primary font-semibold">exploration</span> and{" "}
              <span className="text-accent font-semibold">spotlight</span>.
            </p>

            <p className="text-lg text-foreground/90">
              You can explore, advertise, or simply watch it evolve.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">The Clock</h3>
              <p className="text-foreground/80">
                Every hour is split into two cycles.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)]">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(var(--secondary)/0.3)]">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">The City</h3>
              <p className="text-foreground/80">
                Users explore through Center, Hotspot, or Random modes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">The Lights</h3>
              <p className="text-foreground/80">
                Seven advertisers define the skyline.
              </p>
            </div>
          </div>

          <p className="text-center text-lg text-foreground/90 mt-12 italic">
            You don't scroll through ads here — you walk through them.
          </p>
        </div>
      </section>

      {/* Why Join Now */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-card via-card to-card/50 border border-primary/30 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_hsl(var(--primary)/0.2)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
              Why Join Now
            </h2>
            
            <p className="text-xl text-foreground/90 mb-8 text-center font-semibold">
              Be there when the lights turn on.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-glow-pulse"></div>
                <p className="text-lg text-foreground/90">
                  <span className="text-accent font-semibold">25% off billboard slots</span>{" "}
                  <span className="text-muted-foreground italic">(for the first 25 days only)</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-glow-pulse"></div>
                <p className="text-lg text-foreground/90">
                  <span className="text-primary font-semibold">First access</span> to billboard windows
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-glow-pulse"></div>
                <p className="text-lg text-foreground/90">
                  <span className="text-secondary font-semibold">Sneak peeks</span> into the city's development
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-glow-pulse"></div>
                <p className="text-lg text-foreground/90">
                  <span className="text-accent font-semibold">Exclusive invites</span> to the first live hour
                </p>
              </div>
            </div>

            <WaitlistForm variant="neonAccent" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            The City Awaits
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 italic">
            The next cycle begins soon.
          </p>

          <p className="text-lg text-foreground/90 mb-10">
            Enter before the first light turns on.
          </p>

          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; 2025 The Quarter Billboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
