import React from 'react';
import Menu from './menu';
import { Fade } from 'react-awesome-reveal';
import SEO from './seo';
import Layout from './layout';


const Container = ({ children, pageTitle }) => (
    <div id="outer-container" style={{ height: '100%' }}>
        <Menu />
        <Fade triggerOnce>
            <Layout id="site-layout">
                <SEO title={pageTitle} />
                {children}
            </Layout>
        </Fade>
    </div>
);

export default Container;