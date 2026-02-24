'use client';

import { ProgressProvider } from '@bprogress/next/app';

export default function ProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider
      height="2px"
      color="#000"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
