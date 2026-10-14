
import { PopButton } from "@/components/ui/pop-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { FluidMorphBg } from "@/components/ui/fluid-morph-bg"
import { AuroraHero } from "@/components/ui/aurora-hero"

export default function PopButtonDemo() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center gap-6">
      {/* <FluidMorphBg className="absolute inset-0 z-0" />
       */}
      {/* <div className="relative z-10 flex flex-col items-center gap-6" >
          <PopButton>Learn More</PopButton>
          <SocialFlipButton platform="twitter" href="https://twitter.com"/>
          <h2 className="relative z-10 text-white text-5xl font-serif">Fluid Life</h2>
      </div> */}

     {/* AURORA background */}

        <div className="w-full h-full ">
      <AuroraHero title="Nandrianina" />
    </div>

    </main>
  );
}

/*
<main className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-6 overflow-hidden">
  <FluidMorphBg className="absolute inset-0 z-0" />

  <div className="relative z-10 flex flex-col items-center gap-6">
    <PopButton>Learn More</PopButton>
    <SocialFlipButton platform="twitter" href="https://twitter.com" />
    <h2 className="text-5xl font-serif text-white">Fluid Life</h2>
  </div>
</main>

2. Dans  app/layout.tsx , remplacez les classes du  <body>  par :

<body className="min-h-dvh bg-black">
  {children}
</body>


*/