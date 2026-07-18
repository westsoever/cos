import { useEffect, useState } from 'react';
import { Layout, type Tab } from './components/Layout';
import { ScanView } from './components/ScanView';
import { CoffeeDetail } from './components/CoffeeDetail';
import { RepertoireView } from './components/RepertoireView';
import { YouView } from './components/YouView';
import { saveRating } from './lib/storage';
import type { Rating } from './types/coffee';

interface AppRoute {
  tab: Tab;
  coffeeId: string | null;
}

const tabPaths: Record<Tab, string> = {
  scan: 'discover',
  repertoire: 'journal',
  you: 'taste',
};

function parseRoute(): AppRoute {
  const path = window.location.hash.replace(/^#\/?/, '');
  const [section, coffeeId] = path.split('/');
  if (section === 'coffee' && coffeeId) {
    const from = new URLSearchParams(window.location.hash.split('?')[1] ?? '').get('from');
    const tab: Tab = from === 'journal' ? 'repertoire' : from === 'taste' ? 'you' : 'scan';
    return { tab, coffeeId: decodeURIComponent(coffeeId.split('?')[0]) };
  }
  if (section === 'journal') return { tab: 'repertoire', coffeeId: null };
  if (section === 'taste') return { tab: 'you', coffeeId: null };
  return { tab: 'scan', coffeeId: null };
}

function tabHash(tab: Tab) {
  return `#/${tabPaths[tab]}`;
}

function App() {
  const [route, setRoute] = useState<AppRoute>(parseRoute);
  const [pendingPhoto, setPendingPhoto] = useState<string | undefined>();
  const [refreshKey, setRefreshKey] = useState(0);
  const [notice, setNotice] = useState('');
  const { tab: activeTab, coffeeId: selectedCoffeeId } = route;

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#/discover`);
    }
    const syncRoute = () => {
      setRoute(parseRoute());
    };
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(''), 3500);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const navigateToTab = (tab: Tab) => {
    setPendingPhoto(undefined);
    window.location.hash = tabHash(tab);
  };

  const handleSelectCoffee = (coffeeId: string, photoDataUrl?: string) => {
    setPendingPhoto(photoDataUrl);
    const from = tabPaths[activeTab];
    window.location.hash = `#/coffee/${encodeURIComponent(coffeeId)}?from=${from}`;
  };

  const handleBack = () => {
    setPendingPhoto(undefined);
    window.location.hash = tabHash(activeTab);
  };

  const handleSave = (rating: Omit<Rating, 'ratedAt'>) => {
    saveRating({ ...rating, ratedAt: new Date().toISOString() });
    setRefreshKey((k) => k + 1);
    setPendingPhoto(undefined);
    setNotice('Saved to your coffee journal.');
    window.location.hash = tabHash('repertoire');
  };

  const content = selectedCoffeeId ? (
    <CoffeeDetail
      coffeeId={selectedCoffeeId}
      pendingPhoto={pendingPhoto}
      onSave={handleSave}
      onBack={handleBack}
      onSelectCoffee={(id) => {
        setPendingPhoto(undefined);
        window.location.hash = `#/coffee/${encodeURIComponent(id)}?from=${tabPaths[activeTab]}`;
      }}
    />
  ) : activeTab === 'scan' ? (
    <ScanView onSelectCoffee={handleSelectCoffee} />
  ) : activeTab === 'repertoire' ? (
    <RepertoireView
      onSelectCoffee={handleSelectCoffee}
      refreshKey={refreshKey}
      onDiscover={() => navigateToTab('scan')}
    />
  ) : (
    <YouView
      onSelectCoffee={handleSelectCoffee}
      refreshKey={refreshKey}
      onDiscover={() => navigateToTab('scan')}
    />
  );

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={navigateToTab}
      title={selectedCoffeeId ? 'Coffee details' : undefined}
      subtitle={selectedCoffeeId ? 'Taste, rate, and remember this coffee' : undefined}
    >
      {content}
      {notice && (
        <div className="app-toast" role="status" aria-live="polite">
          {notice}
        </div>
      )}
    </Layout>
  );
}

export default App;
