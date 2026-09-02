import type { PropsWithChildren } from 'react';

import Footer from '@/components/site/Footer';
import Header from '@/components/site/Header';

export default function SiteLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-ivory text-ink">
            <Header />

            {children}

            <Footer />
        </div>
    );
}
