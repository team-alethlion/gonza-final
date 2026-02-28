import { redirect } from 'next/navigation';
import ResetPassword from '@/pages/ResetPassword';

/**
 * Route wrapper for reset password that checks if this is a password recovery flow.
 * If the URL contains type=recovery in the hash, show the reset password page.
 * Otherwise, redirect authenticated users to the home page.
 */
const ResetPasswordRoute = () => {
    // In server components or during initial render, window might not be available
    if (typeof window === 'undefined') return null;

    const isRecovery = window.location.hash.includes('type=recovery');

    console.log('ResetPasswordRoute check:', {
        isRecovery,
        hash: window.location.hash,
        pathname: window.location.pathname
    });

    if (isRecovery) {
        return <ResetPassword />;
    }

    return redirect('/');
};

export default ResetPasswordRoute;
