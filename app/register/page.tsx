
import Register from '@/components/Register';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register - Nexora',
    description: 'Join Nexora to manage your community effectively.',
};

export default function RegisterPage() {
    return (
        <div className="pt-24">
            <Register />
        </div>
    );
}
