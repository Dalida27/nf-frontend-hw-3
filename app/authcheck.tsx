import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './context/auth';

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [delayExpired, setDelayExpired] = useState(false);

  useEffect(() => {
    const delayDuration = 15 * 60 * 1000;
    const delayTimer = setTimeout(() => {
      setDelayExpired(true);
    }, delayDuration);

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && delayExpired) {
      router.push('/login');
    }
  }, [isAuthenticated, delayExpired, router]);

  if (!isAuthenticated && !delayExpired) {
    return null;
  }

  return <>{children}</>;
};

export default AuthCheck;

