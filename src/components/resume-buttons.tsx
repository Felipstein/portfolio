'use client';

import { Button } from './button';
import { DownloadIcon } from './icons/download';
import { PDFIcon } from './icons/pdf';

export function ResumeButtons() {
  function handleOpenPDF() {
    window.open('/resume.pdf', '_blank');
  }

  function handleDownloadPDF() {
    const link = document.createElement('a');

    link.href = '/resume.pdf';
    link.setAttribute('download', 'Felipe Oliveira.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="mt-16 flex items-center gap-4">
      <Button icon={PDFIcon} onClick={handleOpenPDF} />

      <Button icon={DownloadIcon} onClick={handleDownloadPDF}>
        Download CV
      </Button>
    </div>
  );
}
