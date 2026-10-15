
import { PopButton } from "@/components/ui/pop-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { AuroraHero } from "@/components/ui/aurora-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { items } from "@/lib/image-reveal-items";
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

// import { PopButton } from "@/components/ui/pop-button";
// import SocialFlipButton from "@/components/ui/social-flip-button";
// import { FluidMorphBg } from "@/components/ui/fluid-morph-bg"
// import { AuroraHero } from "@/components/ui/aurora-hero"
// import { FaqAccordion } from "@/components/ui/faq-accordion"

// export default function PopButtonDemo() {
//   return (
//     <main className=" flex min-h-screen flex-col items-center justify-center gap-6">
//       {/* <FluidMorphBg className="absolute inset-0 z-0" />
//        */}
//       {/* <div className="relative z-10 flex flex-col items-center gap-6" >
//           <PopButton>Learn More</PopButton>
//           <SocialFlipButton platform="twitter" href="https://twitter.com"/>
//           <h2 className="relative z-10 text-white text-5xl font-serif">Fluid Life</h2>
//       </div> */}

//      {/* AURORA background */}
//    <FaqAccordion />
//         <div className="w-full h-full ">
//       <AuroraHero title="Nandrianina" />
//     </div>

//     </main>
//   );
// }




