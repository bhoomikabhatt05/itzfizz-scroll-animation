import Hero from "@/components/Hero";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <main className="bg-ink font-sans text-bone antialiased">
      <Hero />
      <SecondSection />
      <div className="grain" aria-hidden="true" />
    </main>
  );
}
