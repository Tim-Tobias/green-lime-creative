import { PageWrapper, ScrollReveal } from '@/components/animations';
import ProjectCard from '@/components/ui/project-card';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

// Category Filter Component
interface CategoryFilterProps {
    categories: Category[];
    selectedCategory: string;
    selectedSubcategory: string;
    onCategoryChange: (categoryId: string) => void;
    onSubcategoryChange: (subcategoryId: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, selectedSubcategory, onCategoryChange, onSubcategoryChange }: CategoryFilterProps) => {
    const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

    return (
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => onCategoryChange('all')}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                            selectedCategory === 'all' ? 'bg-[#BDD330] text-[#096260]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        ALL CATEGORIES
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onCategoryChange(category.id)}
                            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                selectedCategory === category.id ? 'bg-[#BDD330] text-[#096260]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Subcategory Filter */}
                {selectedCategoryData && selectedCategory !== 'all' && (
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => onSubcategoryChange('all')}
                            className={`px-3 py-1 text-xs font-medium transition-colors duration-200 ${
                                selectedSubcategory === 'all' ? 'bg-[#096260] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                            }`}
                        >
                            ALL {selectedCategoryData.name}
                        </button>
                        {selectedCategoryData.subcategories.map((subcategory) => (
                            <button
                                key={subcategory.id}
                                onClick={() => onSubcategoryChange(subcategory.id)}
                                className={`px-3 py-1 text-xs font-medium transition-colors duration-200 ${
                                    selectedSubcategory === subcategory.id ? 'bg-[#096260] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                {subcategory.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// Portfolio data structure with categories, subcategories, and projects
interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    subcategory: string;
    category: string;
    categoryNumber: string;
    subCategoryNumber: string;
    tags: string[];
    year: string;
    client?: string;
}

interface Subcategory {
    id: string;
    name: string;
    description: string;
    categoryNumber: string;
    subCategoryNumber: string;
}

interface Category {
    id: string;
    name: string;
    categoryNumber: string;
    description: string;
    subcategories: Subcategory[];
}

// Categories with subcategories
const categories: Category[] = [
    {
        id: 'branding',
        name: 'BRANDING & IDENTITY',
        categoryNumber: '01',
        description: 'Creating distinctive brand identities that resonate with audiences',
        subcategories: [
            {
                id: 'logo-design',
                categoryNumber: '01',
                subCategoryNumber: '01',
                name: 'Logo Design',
                description: 'Custom logo creation and brand marks',
            },
            {
                id: 'brand-identity',
                categoryNumber: '01',
                subCategoryNumber: '02',
                name: 'Brand Identity',
                description: 'Complete visual identity systems',
            },
            {
                id: 'brand-guidelines',
                categoryNumber: '01',
                subCategoryNumber: '03',
                name: 'Brand Guidelines',
                description: 'Comprehensive brand style guides',
            },
            { id: 'rebranding', categoryNumber: '01', subCategoryNumber: '04', name: 'Rebranding', description: 'Brand refresh and modernization' },
        ],
    },
    {
        id: 'digital-design',
        name: 'DIGITAL DESIGN',
        categoryNumber: '02',
        description: 'Modern digital experiences across all platforms',
        subcategories: [
            {
                id: 'web-design',
                categoryNumber: '02',
                subCategoryNumber: '01',
                name: 'Web Design',
                description: 'Responsive website design and UI/UX',
            },
            {
                id: 'mobile-app',
                categoryNumber: '02',
                subCategoryNumber: '02',
                name: 'Mobile App Design',
                description: 'iOS and Android app interfaces',
            },
            {
                id: 'dashboard',
                categoryNumber: '02',
                subCategoryNumber: '03',
                name: 'Dashboard Design',
                description: 'Data visualization and admin panels',
            },
            {
                id: 'landing-page',
                categoryNumber: '02',
                subCategoryNumber: '04',
                name: 'Landing Pages',
                description: 'High-converting landing page design',
            },
        ],
    },
    {
        id: 'development',
        name: 'WEB DEVELOPMENT',
        categoryNumber: '03',
        description: 'Full-stack development solutions for modern businesses',
        subcategories: [
            {
                id: 'frontend',
                categoryNumber: '03',
                subCategoryNumber: '01',
                name: 'Frontend Development',
                description: 'React, Vue, and modern JS frameworks',
            },
            {
                id: 'backend',
                categoryNumber: '03',
                subCategoryNumber: '02',
                name: 'Backend Development',
                description: 'API development and server architecture',
            },
            {
                id: 'ecommerce',
                categoryNumber: '03',
                subCategoryNumber: '03',
                name: 'E-commerce',
                description: 'Online store development and integration',
            },
            { id: 'cms', categoryNumber: '03', subCategoryNumber: '04', name: 'CMS Development', description: 'Custom content management systems' },
        ],
    },
    {
        id: 'marketing',
        name: 'DIGITAL MARKETING',
        categoryNumber: '04',
        description: 'Strategic digital marketing campaigns and content',
        subcategories: [
            {
                id: 'social-media',
                categoryNumber: '04',
                subCategoryNumber: '01',
                name: 'Social Media',
                description: 'Social media strategy and content creation',
            },
            {
                id: 'content-marketing',
                categoryNumber: '04',
                subCategoryNumber: '02',
                name: 'Content Marketing',
                description: 'Blog posts, articles, and copywriting',
            },
            {
                id: 'email-marketing',
                categoryNumber: '04',
                subCategoryNumber: '03',
                name: 'Email Marketing',
                description: 'Email campaigns and automation',
            },
            {
                id: 'seo',
                categoryNumber: '04',
                subCategoryNumber: '04',
                name: 'SEO Optimization',
                description: 'Search engine optimization strategies',
            },
        ],
    },
    {
        id: 'print-design',
        name: 'PRINT & PACKAGING',
        categoryNumber: '05',
        description: 'Traditional print design and packaging solutions',
        subcategories: [
            {
                id: 'packaging',
                categoryNumber: '05',
                subCategoryNumber: '01',
                name: 'Packaging Design',
                description: 'Product packaging and label design',
            },
            {
                id: 'brochure',
                categoryNumber: '05',
                subCategoryNumber: '02',
                name: 'Brochures & Flyers',
                description: 'Marketing collateral and print materials',
            },
            {
                id: 'business-cards',
                categoryNumber: '05',
                subCategoryNumber: '03',
                name: 'Business Cards',
                description: 'Professional business card design',
            },
            {
                id: 'signage',
                categoryNumber: '05',
                subCategoryNumber: '04',
                name: 'Signage Design',
                description: 'Outdoor and indoor signage solutions',
            },
        ],
    },
    {
        id: 'photography',
        name: 'PHOTOGRAPHY & VIDEO',
        categoryNumber: '06',
        description: 'Professional photography and video production',
        subcategories: [
            {
                id: 'product-photography',
                categoryNumber: '06',
                subCategoryNumber: '01',
                name: 'Product Photography',
                description: 'High-quality product shots and lifestyle images',
            },
            {
                id: 'corporate-photography',
                categoryNumber: '06',
                subCategoryNumber: '02',
                name: 'Corporate Photography',
                description: 'Professional headshots and company events',
            },
            {
                id: 'video-production',
                categoryNumber: '06',
                subCategoryNumber: '03',
                name: 'Video Production',
                description: 'Promotional videos and brand storytelling',
            },
            {
                id: 'animation',
                categoryNumber: '06',
                subCategoryNumber: '04',
                name: 'Motion Graphics',
                description: 'Animated graphics and explainer videos',
            },
        ],
    },
];

// Portfolio projects with detailed information - 2 projects per subcategory
const portfolioProjects: Project[] = [
    // Branding & Identity - Logo Design (2 projects)
    {
        id: 'startup-logo',
        title: 'TECHSTART LOGO',
        categoryNumber: '01',
        subCategoryNumber: '01',
        description: 'Minimalist logo design for a technology startup, emphasizing innovation and forward-thinking approach.',
        imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
        subcategory: 'logo-design',
        category: 'branding',
        tags: ['Startup', 'Technology', 'Minimalist'],
        year: '2024',
        client: 'TechStart',
    },
    {
        id: 'restaurant-logo',
        title: 'GOURMET BISTRO LOGO',
        description: 'Elegant logo design for premium restaurant with focus on sophistication and culinary excellence.',
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
        subcategory: 'logo-design',
        category: 'branding',
        categoryNumber: '01',
        subCategoryNumber: '01',
        tags: ['Restaurant', 'Premium', 'Elegant'],
        year: '2024',
        client: 'Gourmet Bistro',
    },

    // Branding & Identity - Brand Identity (2 projects)
    {
        id: 'greenlime-identity',
        title: 'GREEN LIME AGENCY',
        categoryNumber: '01',
        subCategoryNumber: '02',
        description:
            'Brand identity design for a creative agency, featuring modern typography, vibrant color palette, and comprehensive brand guidelines.',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        subcategory: 'brand-identity',
        category: 'branding',
        tags: ['Agency', 'Creative', 'Modern'],
        year: '2024',
        client: 'Green Lime',
    },
    {
        id: 'healthcare-identity',
        categoryNumber: '01',
        subCategoryNumber: '02',
        title: 'MEDICARE CLINIC IDENTITY',
        description: 'Medical clinic brand identity with focus on trust, professionalism, and patient care values.',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        subcategory: 'brand-identity',
        category: 'branding',
        tags: ['Healthcare', 'Medical', 'Trust'],
        year: '2024',
        client: 'Medicare Clinic',
    },

    // Branding & Identity - Brand Guidelines (2 projects)
    {
        id: 'corporate-guidelines',
        title: 'CORPORATE BRAND GUIDELINES',
        categoryNumber: '01',
        subCategoryNumber: '03',
        description: 'Comprehensive brand guidelines for multinational corporation including usage standards and applications.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        subcategory: 'brand-guidelines',
        category: 'branding',
        tags: ['Corporate', 'Guidelines', 'Standards'],
        year: '2024',
        client: 'Global Corp',
    },
    {
        id: 'startup-guidelines',
        title: 'ECOSTART BRAND GUIDELINES',
        description: 'Brand guidelines for eco-friendly startup with focus on sustainability and environmental values.',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        subcategory: 'brand-guidelines',
        category: 'branding',
        categoryNumber: '01',
        subCategoryNumber: '03',
        tags: ['Sustainability', 'Eco-friendly', 'Startup'],
        year: '2024',
        client: 'EcoStart',
    },

    // Branding & Identity - Rebranding (2 projects)
    {
        id: 'advan-rebrand',
        title: 'ADVAN INDONESIA',
        categoryNumber: '01',
        subCategoryNumber: '04',
        description:
            "Complete rebranding for Indonesia's leading technology company, including logo redesign, brand guidelines, and digital asset creation.",
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        subcategory: 'rebranding',
        category: 'branding',
        tags: ['Technology', 'Rebranding', 'Corporate'],
        year: '2024',
        client: 'Advan Indonesia',
    },
    {
        id: 'fashion-rebrand',
        title: 'FASHION FORWARD REBRAND',
        categoryNumber: '01',
        subCategoryNumber: '04',
        description: 'Complete rebranding for fashion retailer including new visual identity and brand positioning strategy.',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        subcategory: 'rebranding',
        category: 'branding',
        tags: ['Fashion', 'Retail', 'Rebranding'],
        year: '2024',
        client: 'Fashion Forward',
    },

    // Digital Design - Web Design (2 projects)
    {
        id: 'samsung-dashboard',
        title: 'SAMSUNG ANALYTICS',
        categoryNumber: '02',
        subCategoryNumber: '01',
        description:
            "Enterprise dashboard design for Samsung's internal analytics platform, featuring data visualization and user-friendly interface.",
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        subcategory: 'web-design',
        category: 'digital-design',
        tags: ['Enterprise', 'Analytics', 'Dashboard'],
        year: '2024',
        client: 'Samsung',
    },
    {
        id: 'elearning-platform',
        title: 'E-LEARNING PLATFORM UI',
        categoryNumber: '02',
        subCategoryNumber: '01',
        description: 'Educational platform interface design with focus on accessibility and user engagement for online learning.',
        imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
        subcategory: 'web-design',
        category: 'digital-design',
        tags: ['Education', 'Accessibility', 'Learning'],
        year: '2024',
        client: 'EduPlatform',
    },

    // Digital Design - Mobile App Design (2 projects)
    {
        id: 'fintech-app',
        title: 'FINTECH MOBILE APP',
        categoryNumber: '02',
        subCategoryNumber: '02',
        description: 'Mobile banking application design with focus on security, usability, and modern financial services.',
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        subcategory: 'mobile-app',
        category: 'digital-design',
        tags: ['Fintech', 'Mobile', 'Banking'],
        year: '2024',
        client: 'FinanceApp',
    },
    {
        id: 'travel-app',
        title: 'TRAVEL BOOKING APP',
        categoryNumber: '02',
        subCategoryNumber: '02',
        description: 'Travel booking app design with intuitive navigation and beautiful destination showcases for seamless user experience.',
        imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        subcategory: 'mobile-app',
        category: 'digital-design',
        tags: ['Travel', 'Booking', 'Navigation'],
        year: '2024',
        client: 'TravelEasy',
    },

    // Digital Design - Dashboard Design (2 projects)
    {
        id: 'analytics-dashboard',
        title: 'ANALYTICS DASHBOARD',
        categoryNumber: '02',
        subCategoryNumber: '03',
        description: 'Modern dashboard interface design for analytics platform with comprehensive data visualization and insights.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        subcategory: 'dashboard',
        category: 'digital-design',
        tags: ['Analytics', 'Data Visualization', 'Insights'],
        year: '2024',
        client: 'DataInsights Pro',
    },
    {
        id: 'admin-dashboard',
        title: 'ADMIN CONTROL PANEL',
        categoryNumber: '02',
        subCategoryNumber: '03',
        description: 'Comprehensive admin dashboard with user management, system monitoring, and configuration controls.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        subcategory: 'dashboard',
        category: 'digital-design',
        tags: ['Admin', 'Management', 'Control Panel'],
        year: '2024',
        client: 'TechCorp',
    },

    // Digital Design - Landing Pages (2 projects)
    {
        id: 'ecommerce-landing',
        title: 'FASHION STORE LANDING',
        categoryNumber: '02',
        subCategoryNumber: '04',
        description: 'High-converting landing page design for a premium fashion e-commerce store with focus on visual storytelling.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        subcategory: 'landing-page',
        category: 'digital-design',
        tags: ['E-commerce', 'Fashion', 'Landing Page'],
        year: '2024',
        client: 'Fashion Store',
    },
    {
        id: 'saas-landing',
        title: 'SAAS PRODUCT LANDING',
        categoryNumber: '02',
        subCategoryNumber: '04',
        description: 'High-converting landing page for SaaS product launch with A/B testing implementation and lead generation focus.',
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        subcategory: 'landing-page',
        category: 'digital-design',
        tags: ['SaaS', 'Product Launch', 'Conversion'],
        year: '2024',
        client: 'StartupXYZ',
    },

    // Web Development - Frontend Development (2 projects)
    {
        id: 'react-dashboard',
        title: 'REACT ADMIN DASHBOARD',
        categoryNumber: '03',
        subCategoryNumber: '01',
        description: 'Modern admin dashboard built with React, featuring real-time data updates and comprehensive user management.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        subcategory: 'frontend',
        category: 'development',
        tags: ['React', 'Dashboard', 'Admin'],
        year: '2024',
        client: 'Tech Company',
    },
    {
        id: 'vue-portfolio',
        title: 'VUE.JS PORTFOLIO SITE',
        categoryNumber: '03',
        subCategoryNumber: '01',
        description: 'Interactive portfolio website built with Vue.js featuring smooth animations and responsive design.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        subcategory: 'frontend',
        category: 'development',
        tags: ['Vue.js', 'Portfolio', 'Interactive'],
        year: '2024',
        client: 'Creative Studio',
    },

    // Web Development - Backend Development (2 projects)
    {
        id: 'api-development',
        title: 'REST API DEVELOPMENT',
        categoryNumber: '03',
        subCategoryNumber: '02',
        description: 'Scalable REST API development with authentication, data validation, and comprehensive documentation.',
        imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        subcategory: 'backend',
        category: 'development',
        tags: ['API', 'Backend', 'Scalable'],
        year: '2024',
        client: 'API Solutions',
    },
    {
        id: 'microservices',
        title: 'MICROSERVICES ARCHITECTURE',
        categoryNumber: '03',
        subCategoryNumber: '02',
        description: 'Enterprise microservices architecture with containerization and cloud deployment strategies.',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        subcategory: 'backend',
        category: 'development',
        tags: ['Microservices', 'Cloud', 'Enterprise'],
        year: '2024',
        client: 'Enterprise Corp',
    },

    // Web Development - E-commerce (2 projects)
    {
        id: 'ecommerce-platform',
        title: 'E-COMMERCE PLATFORM',
        categoryNumber: '03',
        subCategoryNumber: '03',
        description: 'Custom e-commerce platform development with payment integration, inventory management, and admin dashboard.',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        subcategory: 'ecommerce',
        category: 'development',
        tags: ['E-commerce', 'Platform', 'Payment'],
        year: '2024',
        client: 'Online Store',
    },
    {
        id: 'marketplace-development',
        title: 'ONLINE MARKETPLACE',
        categoryNumber: '03',
        subCategoryNumber: '03',
        description: 'Multi-vendor marketplace platform with seller management, commission tracking, and dispute resolution.',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        subcategory: 'ecommerce',
        category: 'development',
        tags: ['Marketplace', 'Multi-vendor', 'Platform'],
        year: '2024',
        client: 'MarketPlace Pro',
    },

    // Web Development - CMS Development (2 projects)
    {
        id: 'corporate-website',
        title: 'CORPORATE WEBSITE',
        categoryNumber: '03',
        subCategoryNumber: '04',
        description: 'Full-stack development of a corporate website with CMS integration, responsive design, and performance optimization.',
        imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        subcategory: 'cms',
        category: 'development',
        tags: ['Corporate', 'CMS', 'Responsive'],
        year: '2024',
        client: 'Corporate Inc.',
    },
    {
        id: 'blog-platform',
        title: 'CUSTOM BLOG PLATFORM',
        categoryNumber: '03',
        subCategoryNumber: '04',
        description: 'Custom content management system for blog platform with multi-author support and SEO optimization.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        subcategory: 'cms',
        category: 'development',
        tags: ['Blog', 'CMS', 'Multi-author'],
        year: '2024',
        client: 'BlogPlatform',
    },

    // Digital Marketing - Social Media (2 projects)
    {
        id: 'social-campaign',
        title: 'SOCIAL MEDIA CAMPAIGN',
        categoryNumber: '04',
        subCategoryNumber: '01',
        description: 'Comprehensive social media marketing campaign for a lifestyle brand, including content creation and strategy.',
        imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
        subcategory: 'social-media',
        category: 'marketing',
        tags: ['Social Media', 'Campaign', 'Lifestyle'],
        year: '2024',
        client: 'Lifestyle Brand',
    },
    {
        id: 'b2b-social',
        title: 'B2B SOCIAL STRATEGY',
        categoryNumber: '04',
        subCategoryNumber: '01',
        description: 'LinkedIn-focused social media strategy for B2B software company with thought leadership content and lead generation.',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        subcategory: 'social-media',
        category: 'marketing',
        tags: ['B2B', 'LinkedIn', 'Lead Generation'],
        year: '2024',
        client: 'SoftwarePro Inc.',
    },

    // Digital Marketing - Content Marketing (2 projects)
    {
        id: 'content-strategy',
        title: 'CONTENT MARKETING STRATEGY',
        categoryNumber: '04',
        subCategoryNumber: '02',
        description: 'Strategic content marketing plan with blog posts, articles, and SEO optimization for increased organic reach.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        subcategory: 'content-marketing',
        category: 'marketing',
        tags: ['Content', 'SEO', 'Strategy'],
        year: '2024',
        client: 'Digital Agency',
    },
    {
        id: 'blog-content',
        title: 'BLOG CONTENT STRATEGY',
        categoryNumber: '04',
        subCategoryNumber: '02',
        description: 'Comprehensive blog content strategy for fintech startup with SEO optimization and lead nurturing focus.',
        imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
        subcategory: 'content-marketing',
        category: 'marketing',
        tags: ['Blog', 'Fintech', 'Lead Nurturing'],
        year: '2024',
        client: 'FinTech Startup',
    },

    // Digital Marketing - Email Marketing (2 projects)
    {
        id: 'email-automation',
        title: 'EMAIL AUTOMATION CAMPAIGN',
        categoryNumber: '04',
        subCategoryNumber: '03',
        description: 'Automated email marketing campaign with personalization and behavioral triggers for e-commerce store.',
        imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop',
        subcategory: 'email-marketing',
        category: 'marketing',
        tags: ['Email', 'Automation', 'E-commerce'],
        year: '2024',
        client: 'Online Retailer',
    },
    {
        id: 'newsletter-design',
        title: 'NEWSLETTER DESIGN SYSTEM',
        categoryNumber: '04',
        subCategoryNumber: '03',
        description: 'Professional newsletter design system with templates and automation for B2B company communications.',
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        subcategory: 'email-marketing',
        category: 'marketing',
        tags: ['Newsletter', 'B2B', 'Templates'],
        year: '2024',
        client: 'B2B Solutions',
    },

    // Digital Marketing - SEO Optimization (2 projects)
    {
        id: 'seo-campaign',
        title: 'SEO OPTIMIZATION CAMPAIGN',
        categoryNumber: '04',
        subCategoryNumber: '04',
        description: 'Complete SEO strategy implementation resulting in 300% increase in organic traffic and improved rankings.',
        imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
        subcategory: 'seo',
        category: 'marketing',
        tags: ['SEO', 'Organic Traffic', 'Rankings'],
        year: '2024',
        client: 'GrowthCorp',
    },
    {
        id: 'local-seo',
        title: 'LOCAL SEO STRATEGY',
        categoryNumber: '04',
        subCategoryNumber: '04',
        description: 'Local search optimization for restaurant chain resulting in 250% increase in local visibility and foot traffic.',
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
        subcategory: 'seo',
        category: 'marketing',
        tags: ['Local SEO', 'Restaurant', 'Visibility'],
        year: '2024',
        client: 'Restaurant Chain',
    },

    // Print & Packaging - Packaging Design (2 projects)
    {
        id: 'product-packaging',
        title: 'PREMIUM PACKAGING DESIGN',
        categoryNumber: '05',
        subCategoryNumber: '01',
        description: 'Luxury packaging design for premium consumer products, emphasizing sustainability and brand premium positioning.',
        imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
        subcategory: 'packaging',
        category: 'print-design',
        tags: ['Packaging', 'Premium', 'Sustainable'],
        year: '2024',
        client: 'Premium Brand',
    },
    {
        id: 'food-packaging',
        title: 'FOOD PACKAGING DESIGN',
        categoryNumber: '05',
        subCategoryNumber: '01',
        description: 'Innovative food packaging design with focus on freshness preservation and eco-friendly materials.',
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
        subcategory: 'packaging',
        category: 'print-design',
        tags: ['Food', 'Eco-friendly', 'Innovation'],
        year: '2024',
        client: 'Food Company',
    },

    // Print & Packaging - Brochures & Flyers (2 projects)
    {
        id: 'marketing-collateral',
        title: 'MARKETING BROCHURES',
        categoryNumber: '05',
        subCategoryNumber: '02',
        description: 'Professional marketing collateral design including brochures, flyers, and presentation materials for B2B clients.',
        imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
        subcategory: 'brochure',
        category: 'print-design',
        tags: ['Brochure', 'Marketing', 'B2B'],
        year: '2024',
        client: 'B2B Company',
    },
    {
        id: 'event-materials',
        title: 'EVENT MARKETING MATERIALS',
        categoryNumber: '05',
        subCategoryNumber: '02',
        description: 'Complete event marketing materials including flyers, posters, and promotional brochures for tech conference.',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
        subcategory: 'brochure',
        category: 'print-design',
        tags: ['Event', 'Conference', 'Promotional'],
        year: '2024',
        client: 'TechConf 2024',
    },

    // Print & Packaging - Business Cards (2 projects)
    {
        id: 'executive-cards',
        title: 'EXECUTIVE BUSINESS CARDS',
        categoryNumber: '05',
        subCategoryNumber: '03',
        description: 'Premium business card design for corporate executives with luxury finishes and professional aesthetics.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        subcategory: 'business-cards',
        category: 'print-design',
        tags: ['Business Cards', 'Executive', 'Premium'],
        year: '2024',
        client: 'Executive Corp',
    },
    {
        id: 'creative-cards',
        title: 'CREATIVE BUSINESS CARDS',
        categoryNumber: '05',
        subCategoryNumber: '03',
        description: 'Innovative business card design for creative agency with unique die-cut shapes and special printing techniques.',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        subcategory: 'business-cards',
        category: 'print-design',
        tags: ['Creative', 'Die-cut', 'Innovation'],
        year: '2024',
        client: 'Creative Agency',
    },

    // Print & Packaging - Signage Design (2 projects)
    {
        id: 'retail-signage',
        title: 'RETAIL STORE SIGNAGE',
        categoryNumber: '05',
        subCategoryNumber: '04',
        description: 'Complete signage system for retail store including exterior signs, wayfinding, and promotional displays.',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        subcategory: 'signage',
        category: 'print-design',
        tags: ['Retail', 'Wayfinding', 'Signage'],
        year: '2024',
        client: 'Retail Store',
    },
    {
        id: 'office-signage',
        title: 'CORPORATE OFFICE SIGNAGE',
        categoryNumber: '05',
        subCategoryNumber: '04',
        description: 'Professional office signage system with brand integration and modern aesthetic for corporate headquarters.',
        imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        subcategory: 'signage',
        category: 'print-design',
        tags: ['Corporate', 'Office', 'Professional'],
        year: '2024',
        client: 'Corporate HQ',
    },

    // Photography & Video - Product Photography (2 projects)
    {
        id: 'product-photography',
        title: 'PRODUCT PHOTOGRAPHY',
        categoryNumber: '06',
        subCategoryNumber: '01',
        description: 'Professional product photography for e-commerce and marketing materials, featuring lifestyle and studio shots.',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
        subcategory: 'product-photography',
        category: 'photography',
        tags: ['Photography', 'Product', 'E-commerce'],
        year: '2024',
        client: 'Product Company',
    },
    {
        id: 'fashion-photography',
        title: 'FASHION PRODUCT PHOTOGRAPHY',
        categoryNumber: '06',
        subCategoryNumber: '01',
        description: 'High-end fashion photography for luxury brand catalog with studio and lifestyle shots for marketing campaigns.',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        subcategory: 'product-photography',
        category: 'photography',
        tags: ['Fashion', 'Luxury', 'Catalog'],
        year: '2024',
        client: 'Luxury Fashion',
    },

    // Photography & Video - Corporate Photography (2 projects)
    {
        id: 'corporate-headshots',
        title: 'CORPORATE HEADSHOTS',
        categoryNumber: '06',
        subCategoryNumber: '02',
        description: 'Professional headshots and corporate photography for executive team and company events documentation.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        subcategory: 'corporate-photography',
        category: 'photography',
        tags: ['Headshots', 'Corporate', 'Executive'],
        year: '2024',
        client: 'Corporate Inc',
    },
    {
        id: 'event-photography',
        title: 'CORPORATE EVENT PHOTOGRAPHY',
        categoryNumber: '06',
        subCategoryNumber: '02',
        description: 'Comprehensive event photography coverage for corporate conferences, meetings, and company celebrations.',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
        subcategory: 'corporate-photography',
        category: 'photography',
        tags: ['Events', 'Conference', 'Corporate'],
        year: '2024',
        client: 'Event Corp',
    },

    // Photography & Video - Video Production (2 projects)
    {
        id: 'brand-video',
        title: 'BRAND STORYTELLING VIDEO',
        categoryNumber: '06',
        subCategoryNumber: '03',
        description: 'Cinematic brand video production showcasing company values and culture for internal and external communications.',
        imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
        subcategory: 'video-production',
        category: 'photography',
        tags: ['Video', 'Branding', 'Storytelling'],
        year: '2024',
        client: 'Corporate Brand',
    },
    {
        id: 'product-video',
        title: 'PRODUCT DEMO VIDEO',
        categoryNumber: '06',
        subCategoryNumber: '03',
        description: 'Professional product demonstration video with 3D animations and detailed feature explanations for marketing.',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
        subcategory: 'video-production',
        category: 'photography',
        tags: ['Product Demo', '3D Animation', 'Marketing'],
        year: '2024',
        client: 'Tech Product Co',
    },

    // Photography & Video - Motion Graphics (2 projects)
    {
        id: 'motion-graphics',
        title: 'MOTION GRAPHICS PACKAGE',
        categoryNumber: '06',
        subCategoryNumber: '04',
        description: 'Animated graphics package for brand identity including logo animations and promotional video elements.',
        imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
        subcategory: 'animation',
        category: 'photography',
        tags: ['Motion Graphics', 'Animation', 'Branding'],
        year: '2024',
        client: 'Motion Studio',
    },
    {
        id: 'explainer-video',
        title: 'EXPLAINER VIDEO ANIMATION',
        categoryNumber: '06',
        subCategoryNumber: '04',
        description: 'Animated explainer video for SaaS product with custom illustrations and smooth motion graphics.',
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        subcategory: 'animation',
        category: 'photography',
        tags: ['Explainer', 'SaaS', 'Illustration'],
        year: '2024',
        client: 'SaaS Company',
    },
];

// ProjectGrid Component for displaying filtered projects
interface ProjectGridProps {
    projects: Project[];
    subCategory: string;
    categoryNumber: number;
    subCategoryNumber: number;
}

const ProjectGrid = ({ projects, subCategory, categoryNumber, subCategoryNumber }: ProjectGridProps) => {
    if (projects.length === 0) {
        return (
            <section className="container mx-auto py-20">
                <div className="px-6 text-center">
                    <h2 className="mb-4 text-2xl font-bold text-gray-600">{subCategory}</h2>
                    <p className="text-gray-500">No projects found in this category.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="container mx-auto border-t border-gray-500 py-10 md:py-20">
            <div className="px-6">
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                    {/* Left Column - Category */}
                    <div className="min-h-full lg:col-span-3 lg:border-r lg:border-gray-500 lg:pr-5">
                        <ScrollReveal delay={0.3} className="flex w-full justify-between">
                            <span className="text-sm text-gray-600">{categoryNumber}</span>
                            <span className="text-sm text-gray-600">/{subCategoryNumber}</span>
                        </ScrollReveal>

                        <div className="h-full items-center md:flex">
                            <ScrollReveal delay={0.2}>
                                <h2 className="my-10 text-center text-2xl leading-tight font-bold tracking-wide text-black uppercase md:w-[20%] md:text-xl lg:my-0 lg:text-2xl xl:text-4xl">
                                    {subCategory}
                                </h2>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right Column - Projects Grid */}
                    <div className="lg:col-span-9 lg:pl-16">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    delay={0.4 + index * 0.2}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Works() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');

    // Group projects by subcategory for 'all' view
    const getProjectsBySubcategory = () => {
        const grouped: { [key: string]: { subcategoryName: string; subCategoryNumber: number; categoryNumber: number; projects: Project[] } } = {};

        portfolioProjects.forEach((project) => {
            if (!grouped[project.subcategory]) {
                const subcategoryData = categories.flatMap((cat) => cat.subcategories).find((sub) => sub.id === project.subcategory);

                grouped[project.subcategory] = {
                    subcategoryName: subcategoryData?.name || project.subcategory.replace('-', ' ').toUpperCase(),
                    subCategoryNumber: Number(subcategoryData?.subCategoryNumber || '01'),
                    categoryNumber: Number(subcategoryData?.categoryNumber || '01'),
                    projects: [],
                };
            }
            grouped[project.subcategory].projects.push(project);
        });

        return grouped;
    };

    // Filter projects based on selected category and subcategory
    const getFilteredProjects = () => {
        if (selectedCategory === 'all') {
            return portfolioProjects;
        }

        let filtered = portfolioProjects.filter((project) => project.category === selectedCategory);

        if (selectedSubcategory !== 'all') {
            filtered = filtered.filter((project) => project.subcategory === selectedSubcategory);
        }

        return filtered;
    };

    const filteredProjects = getFilteredProjects();
    const projectsBySubcategory = getProjectsBySubcategory();
    const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);
    const categoryName = selectedCategory === 'all' ? 'ALL WORKS' : selectedCategoryData?.name || '';
    const subcategoryName =
        selectedSubcategory === 'all' ? '' : selectedCategoryData?.subcategories.find((sub) => sub.id === selectedSubcategory)?.name || '';

    return (
        <PageWrapper className="bg-white">
            <Head title="Works" />
            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="relative container mx-auto space-y-7 px-6">
                    {/* Left Column - Main Title */}
                    <ScrollReveal delay={0.3}>
                        <h1 className="text-4xl leading-tight font-bold text-black md:text-5xl lg:text-6xl xl:text-7xl">
                            MAKE
                            <br />
                            IMPACT,
                            <br />
                            <span className="text-[#BDD330]">*</span> THROUGH
                            <br />
                            CREATIVITY.
                        </h1>
                    </ScrollReveal>

                    {/* Right Column - Description */}
                    <div className="right-10 bottom-0 md:absolute">
                        <ScrollReveal delay={0.5}>
                            <p className="text-right text-sm leading-tight text-gray-600 md:text-left md:text-base">
                                The work we create lives at the intersection
                                <br />
                                of clarity and surprise and functions to
                                <br />
                                connect through shared values and beliefs.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onCategoryChange={(categoryId) => {
                    setSelectedCategory(categoryId);
                    setSelectedSubcategory('all');
                }}
                onSubcategoryChange={setSelectedSubcategory}
            />

            {/* Portfolio Sections */}
            {selectedCategory === 'all' ? (
                // Show all projects grouped by subcategory
                Object.entries(projectsBySubcategory).map(([subcategoryKey, { subcategoryName, subCategoryNumber, categoryNumber, projects }]) => (
                    <ProjectGrid
                        key={subcategoryKey}
                        projects={projects}
                        subCategory={subcategoryName}
                        categoryNumber={Number(categoryNumber)}
                        subCategoryNumber={Number(subCategoryNumber)}
                    />
                ))
            ) : (
                // Show filtered projects
                <ProjectGrid
                    projects={filteredProjects}
                    subCategory={subcategoryName || categoryName}
                    categoryNumber={Number(selectedCategoryData?.categoryNumber || '1')}
                    subCategoryNumber={Number(
                        selectedCategoryData?.subcategories.find((sub) => sub.id === selectedSubcategory)?.subCategoryNumber || '1',
                    )}
                />
            )}
        </PageWrapper>
    );
}
