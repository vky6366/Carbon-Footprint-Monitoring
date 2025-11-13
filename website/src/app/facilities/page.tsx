"use client";

import FacilitiesContent from '@/components/facilities/FacilitiesContent';
import ProtectedRoute from '@/components/ProtectedRoute';
import { PageLayout } from '@/components/layout/PageLayout';
import { Building, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FacilitiesPage() {
  const router = useRouter();

  const handleNewFacility = () => {
    router.push('/facilities/new');
  };

  return (
    <ProtectedRoute requiredRole="viewer">
      <PageLayout
        title="Facilities"
        description="Manage and monitor your organization's facilities"
        icon={Building}
        actions={
          <button
            onClick={handleNewFacility}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-gray-900 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
          >
            <Plus className="w-5 h-5" />
            New Facility
          </button>
        }
      >
        <FacilitiesContent />
      </PageLayout>
    </ProtectedRoute>
  );
}