import type { ReactNode } from 'react';

export type Tab = 'scan' | 'repertoire' | 'you';

interface LayoutProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  children: ReactNode;
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'scan', label: 'Scan', icon: '📷' },
  { id: 'repertoire', label: 'Repertoire', icon: '☕' },
  { id: 'you', label: 'You', icon: '✨' },
];

export function Layout({ activeTab, onTabChange, children }: LayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-[#faf8f5]">
      <header className="sticky top-0 z-10 border-b border-[#e8dfd6] bg-[#faf8f5]/95 px-4 pb-3 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur">
        <h1 className="text-xl font-bold tracking-tight text-[#6b3a2a]">Pico</h1>
        <p className="text-sm text-[#8a7568]">Pick the right coffee</p>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-4 pb-24">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-[#e8dfd6] bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="mx-auto flex max-w-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-1 flex-col items-center gap-0.5 py-3 text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[#6b3a2a]'
                  : 'text-[#8a7568] hover:text-[#6b3a2a]'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
