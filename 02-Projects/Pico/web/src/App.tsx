import { useState } from 'react';
import { Layout, type Tab } from './components/Layout';
import { ScanView } from './components/ScanView';
import { CoffeeDetail } from './components/CoffeeDetail';
import { RepertoireView } from './components/RepertoireView';
import { YouView } from './components/YouView';
import { saveRating } from './lib/storage';
import type { Rating } from './types/coffee';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('scan');
  const [selectedCoffeeId, setSelectedCoffeeId] = useState<string | null>(null);
  const [pendingPhoto, setPendingPhoto] = useState<string | undefined>();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSelectCoffee = (coffeeId: string, photoDataUrl?: string) => {
    setSelectedCoffeeId(coffeeId);
    setPendingPhoto(photoDataUrl);
  };

  const handleBack = () => {
    setSelectedCoffeeId(null);
    setPendingPhoto(undefined);
  };

  const handleSave = (rating: Omit<Rating, 'ratedAt'>) => {
    saveRating({ ...rating, ratedAt: new Date().toISOString() });
    setRefreshKey((k) => k + 1);
    setSelectedCoffeeId(null);
    setPendingPhoto(undefined);
    setActiveTab('repertoire');
  };

  const content = selectedCoffeeId ? (
    <CoffeeDetail
      coffeeId={selectedCoffeeId}
      pendingPhoto={pendingPhoto}
      onSave={handleSave}
      onBack={handleBack}
      onSelectCoffee={(id) => {
        setPendingPhoto(undefined);
        setSelectedCoffeeId(id);
      }}
    />
  ) : activeTab === 'scan' ? (
    <ScanView onSelectCoffee={handleSelectCoffee} />
  ) : activeTab === 'repertoire' ? (
    <RepertoireView onSelectCoffee={handleSelectCoffee} refreshKey={refreshKey} />
  ) : (
    <YouView onSelectCoffee={handleSelectCoffee} refreshKey={refreshKey} />
  );

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={(tab) => {
        setActiveTab(tab);
        setSelectedCoffeeId(null);
        setPendingPhoto(undefined);
      }}
    >
      {content}
    </Layout>
  );
}

export default App;
