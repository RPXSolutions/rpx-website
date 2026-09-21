import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/rpx/Layout';
import Home from './pages/Home';
import Installaties from './pages/Installaties';
import AudioService from './pages/AudioService';
import DetailingPakketten from './pages/DetailingPakketten';
import Portfolio from './pages/Portfolio';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import Privacybeleid from './pages/Privacybeleid';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0F0F10]">
        <div className="w-8 h-8 border-4 border-white/10 border-t-[#B5121B] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/installaties" element={<Installaties />} />
        <Route path="/audio-service" element={<AudioService />} />
        <Route path="/detailing-pakketten" element={<DetailingPakketten />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacybeleid" element={<Privacybeleid />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App