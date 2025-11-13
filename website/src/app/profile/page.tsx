// app/profile/page.tsx
'use client';

import { useState, useEffect } from 'react';
import AccountInformation from '@/components/profile/AccountInformation';
import ComprehensiveSettings from '@/components/profile/ComprehensiveSettings';
import { ProfileData } from '@/types/auth/profile';
import { me } from '@/app/api/auth/me/route';
import { useToast } from '@/components/ui/Toast';
import ProtectedRoute from '@/components/ProtectedRoute';
import { PageLayout } from '@/components/layout/PageLayout';
import { User } from 'lucide-react';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { error: showError } = useToast();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userData = await me();
        setProfileData({
          email: userData.email,
          organization: userData.org.name,
          currentRole: userData.role,
        });
      } catch (err) {
        console.error('Failed to load profile:', err);
        showError('Failed to load profile', 'Please try again later');
        setProfileData(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [showError]);

  return (
    <ProtectedRoute>
      <PageLayout
        title="My Profile"
        description="Manage your account information and preferences"
        icon={User}
      >
        {isLoading ? (
          <div className="text-center py-8 text-gray-400">Loading profile...</div>
        ) : profileData ? (
          <>
            <AccountInformation data={profileData} />
            <ComprehensiveSettings />
          </>
        ) : (
          <div className="text-center py-8 text-gray-400">
            Failed to load profile data. Please try refreshing the page.
          </div>
        )}
      </PageLayout>
    </ProtectedRoute>
  );
}