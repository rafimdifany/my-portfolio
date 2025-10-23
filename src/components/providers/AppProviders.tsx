'use client';

import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import { TooltipProvider } from "@/components/ui/Tooltip";

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <TooltipProvider>
      {children}
      <Analytics />
    </TooltipProvider>
  );
};
