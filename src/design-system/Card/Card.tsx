import React, { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return <div className="shadow w-full p-4 small:p-8">{children}</div>;
}
