import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { PageTransition } from './components';
import { CustomCursor, Preloader } from './components/animations';
import Footer from './components/footer';
import Header from './components/header';
import { AppLayout } from './layouts/app-layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <AppLayout>
                <Preloader duration={1.2} delay={0} text="GREEN LIME" backgroundColor="#BDD330" textColor="#096260" />
                <Header />
                <PageTransition location={props.initialPage.url}>
                    <CustomCursor size={100} color="red" />
                    <App key={props.initialPage.component} {...props} />
                </PageTransition>
                <Footer />
            </AppLayout>,
        );
    },
    progress: {
        color: '#BDD330',
    },
});
