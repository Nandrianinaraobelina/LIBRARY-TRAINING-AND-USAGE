import { PopButton } from "@/components/ui/pop-button"
import { SocialFlipButton } from "@/components/ui/social-flip-button"

export default function PopButtonDemo() {
  return (
 <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <PopButton>
        Learn More
      </PopButton>

      <SocialFlipButton
        platform="twitter"
        href="https://twitter.com"
      />
    </main>
  )
}