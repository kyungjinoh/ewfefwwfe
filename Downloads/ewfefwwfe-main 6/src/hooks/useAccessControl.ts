import { useAuth } from '../AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Routes that require authentication
const RESTRICTED_ROUTES = [
  '/dashboard',
  '/dashboard/log-reaction',
  '/dashboard/history',
  '/dashboard/analysis'
];

export const useAccessControl = (checkAccess: boolean = true) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isRestrictedRoute = RESTRICTED_ROUTES.includes(location.pathname);

  // Any authenticated user has access to all features
  const hasAccess = !isRestrictedRoute || !!user;

  // Redirect if not authenticated
  useEffect(() => {
    if (checkAccess && isRestrictedRoute) {
      if (!user) {
        navigate('/signin');
      }
    }
  }, [checkAccess, isRestrictedRoute, hasAccess, user, navigate]);

  return {
    user,
    hasAccess,
    redirectIfNoAccess: () => {}, // not used anymore, kept for compatibility
    isRestrictedRoute,
    loading: false
  };
}; 
