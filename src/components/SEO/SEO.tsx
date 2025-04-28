import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    lang?: string;
    image?: string;
    author?: string;
    keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
    title = "Ritin's Project Portfolio",
    description = 'Welcome to the portfolio page of Ritin Malhotra, Junior Data Analyst and Revenue Manager at Norse Atlantic Airways. CS graduate from NYU intersted in building impactful data products, with experience in software engineering and UI/UX design.',
    url = 'https://ritindev.github.io/project-portfolio/',
    image = 'https://ritindev.github.io/project-portfolio/vite.svg',
    author = 'Ritin Malhotra',
    keywords = ['Ritin Malhotra', 'Ritin', 'project', 'portfolio', 'project porftolio', 'full-stack web development', 'data', 'data analyst', 'Norse Atlantic', 'Revenue Management', 'Revenue Manager', 'NYU', 'Computer Science'],
    lang = 'en'
}) => {
    return (
        <Helmet prioritizeSeoTags>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(',')} />}
        </Helmet>
    );
}

export default SEO;
