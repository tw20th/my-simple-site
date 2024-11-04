import { ReactNode } from 'react';

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <div className="template-layout">
      {children}
    </div>
  );
}
