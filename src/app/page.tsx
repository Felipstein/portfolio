import Image from 'next/image';

import { Button } from '@/components/button';
import { DownloadIcon } from '@/components/icons/download';
import { GitHubIcon } from '@/components/icons/github';
import { InstagramIcon } from '@/components/icons/instagram';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { MailIcon } from '@/components/icons/mail';
import { PDFIcon } from '@/components/icons/pdf';
import { WhatsAppIcon } from '@/components/icons/whatsapp';
import { SocialActionsFeedback } from '@/components/social-actions-feedback';
import { SocialButton } from '@/components/social-button';

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <Image
        src="/avatar_profile.svg"
        alt="Avatar Profile"
        width={126}
        height={126}
        className="rounded-full"
      />

      <h3 className="mt-8 text-xl font-medium uppercase tracking-[.21rem] text-[#78869C] opacity-75 sm:text-2xl">
        Felipe Oliveira
      </h3>

      <h1 className="mt-2 text-[32px] font-black tracking-wide text-[#F0F0F0] sm:text-[40px]">
        Software Engineer
      </h1>

      <p className="mt-8 select-none font-mono text-[#BACCE8]">
        Let&apos;s build something awesome 🔥
      </p>

      <div className="mt-16 flex items-center gap-4">
        <Button icon={PDFIcon} />

        <Button icon={DownloadIcon}>Download CV</Button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <SocialButton
          to="https://www.linkedin.com/in/feelipeoliveira"
          textToCopy="https://www.linkedin.com/in/feelipeoliveira"
        >
          <LinkedInIcon />
        </SocialButton>

        <SocialButton
          to="https://instagram.com/luisfeelip"
          textToCopy="@luisfeelip"
        >
          <InstagramIcon />
        </SocialButton>

        <SocialButton
          to="https://github.com/Felipstein"
          textToCopy="https://github.com/Felipstein"
        >
          <GitHubIcon />
        </SocialButton>

        <SocialButton to="/" textToCopy="+55 (44) 99876-6289">
          <WhatsAppIcon />
        </SocialButton>

        <SocialButton
          to="felipstein.oliveira@gmail.com"
          textToCopy="felipstein.oliveira@gmail.com"
          isMailTo
        >
          <MailIcon />
        </SocialButton>
      </div>

      <SocialActionsFeedback />
    </div>
  );
}
