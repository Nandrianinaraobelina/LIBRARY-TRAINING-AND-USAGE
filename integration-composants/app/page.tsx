
import { PopButton } from "@/components/ui/pop-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { FluidMorphBg } from "@/components/ui/fluid-morph-bg"

export default function PopButtonDemo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <PopButton>Learn More</PopButton>

      <SocialFlipButton
        platform="twitter"
        href="https://twitter.com"
      />

      <div className="relative w-full h-[500px] flex items-center justify-center">
      <FluidMorphBg className="absolute inset-0" />
      <h2 className="relative z-10 text-white text-5xl font-serif">Fluid Life</h2>
    </div>
    
    </main>
  );
}
