import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  kycVerified: boolean;
}

const AuthContext = createContext<{
  signIn: (email: string, password: string) => void;
  signUp: (userData: Omit<UserData, 'kycVerified'>) => void;
  updateSignupData: (data: Partial<UserData>) => void;
  completeKyc: () => void;
  signOut: () => void;
  session?: string | null;
  userData?: UserData | null;
  signupData?: Partial<UserData> | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signUp: () => null,
  updateSignupData: () => null,
  completeKyc: () => null,
  signOut: () => null,
  session: null,
  userData: null,
  signupData: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [[, userData], setUserData] = useStorageState('userData');
  const [[, signupData], setSignupData] = useStorageState('signupData');

  return (
    <AuthContext.Provider
      value={{
        signIn: (email: string, password: string) => {
          // In a real app, validate credentials here
          setSession('xxx');
          setUserData(JSON.stringify({ email, kycVerified: true }));
        },
        signUp: (userData: Omit<UserData, 'kycVerified'>) => {
          // In a real app, create account here
          setUserData(JSON.stringify({ ...userData, kycVerified: false }));
          setSignupData(null); // Clear signup data after completion
        },
        updateSignupData: (data: Partial<UserData>) => {
          const currentData = signupData ? JSON.parse(signupData) : {};
          setSignupData(JSON.stringify({ ...currentData, ...data }));
        },
        completeKyc: () => {
          const currentData = userData ? JSON.parse(userData) : null;
          if (currentData) {
            setUserData(JSON.stringify({ ...currentData, kycVerified: true }));
            setSession('xxx');
          }
        },
        signOut: () => {
          setSession(null);
          setUserData(null);
          setSignupData(null);
        },
        session,
        userData: userData ? JSON.parse(userData) : null,
        signupData: signupData ? JSON.parse(signupData) : null,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
