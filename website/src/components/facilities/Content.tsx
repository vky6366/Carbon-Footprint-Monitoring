'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FacilitiesTable from '@/components/facilities/FacilitiesTable';
import SearchBar from '@/components/facilities/SearchBar';

export default function FacilitiesContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  return (
    <div>
      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Facilities Table */}
      <FacilitiesTable searchQuery={searchQuery} />
    </div>
  );
}