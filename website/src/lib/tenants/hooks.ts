import { useQuery, useMutation, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { fetchUsers, createUser } from './api';
import type { TenantUser, CreateUserRequest } from '@/types/tenants/tenantstypes';

export function useUsers(options?: UseQueryOptions<TenantUser[], unknown, TenantUser[]>) {
  const base = {
    queryKey: ['users'] as const,
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5 minutes
  };

  return useQuery(Object.assign({}, base, options) as UseQueryOptions<TenantUser[]>);
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}