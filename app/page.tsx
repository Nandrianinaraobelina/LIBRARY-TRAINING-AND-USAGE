
import { PopButton } from "@/components/ui/pop-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { AuroraHero } from "@/components/ui/aurora-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { items } from "@/data/image-reveal-items";
import { ImageRevealList } from "@/components/ui/image-reveal-list";




export default function PopButtonDemo() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AuroraHero title="" />
      </div>
      {/* Contenu au-dessus du background */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6">
        <FaqAccordion />
        <PopButton>Learn More</PopButton>
        <SocialFlipButton platform="twitter" href="https://twitter.com"/>
        <ImageRevealList items={items} />
      </div>

    </main>
  );
}




