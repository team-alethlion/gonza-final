import { Navigate } from 'react-router-dom';
import ResetPassword from '@/pages/ResetPassword';

/**
 * Route wrapper for reset password that checks if this is a password recovery flow.
 * If the URL contains type=recovery in the hash, show the reset password page.
 * Otherwise, redirect authenticated users to the home page.
 */
const ResetPasswordRoute = () => {
    const isRecovery = window.location.hash.includes('type=recovery');

    console.log('ResetPasswordRoute check:', {
        isRecovery,
        hash: window.location.hash,
        pathname: window.location.pathname
    });

    return isRecovery ? <ResetPassword /> : <Navigate to="/" replace />;
};

export default ResetPasswordRoute;
