import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import BusinessSettingsCard from '@/components/BusinessSettingsCard';

const WelcomeState: React.FC = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 text-center">
      <BusinessSettingsCard />
      
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-sales-primary mb-4">
        Welcome to Your Sales Tracker
      </h2>
      <p className="text-gray-600 mb-4 md:mb-6 lg:mb-8 max-w-lg mx-auto text-sm md:text-base">
        Start by creating your first sale record. Once you have sales data,
        you'll see analytics and insights here on your dashboard.
      </p>
      <Button onClick={() => router.push('/new-sale')} size={isMobile ? "default" : "lg"} className="gap-2">
        <Plus size={18} /> Record Your First Sale
      </Button>
    </div>
  );
};

export default WelcomeState;