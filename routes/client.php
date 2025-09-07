<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('client/welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('client/about');
})->name('about');

Route::get('/works', function () {
    return Inertia::render('client/works');
})->name('works');

Route::get('/careers', function () {
    return Inertia::render('client/careers');
})->name('careers');

Route::get('/contact', function () {
    return Inertia::render('client/contact');
})->name('contact');

Route::get('/work/{id}', function ($id) {
    // Sample work data - in real application this would come from database
    $sampleWork = [
        'id' => (int)$id,
        'title' => 'Green Lime Corporate Website',
        'description' => 'A modern, responsive corporate website built with cutting-edge technologies to showcase our digital agency capabilities and portfolio.',
        'category' => 'Web Development',
        'subcategory' => 'Frontend Development',
        'client' => 'Green Lime Digital Agency',
        'year' => '2024',
        'duration' => '3 months',
        'team' => ['John Doe - Lead Developer', 'Jane Smith - UI/UX Designer', 'Mike Johnson - Backend Developer'],
        'technologies' => ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Inertia.js', 'Swiper.js', 'React Player'],
        'challenge' => 'The main challenge was creating a high-performance website that could showcase video content seamlessly while maintaining fast loading times and responsive design across all devices.',
        'solution' => 'We implemented a custom video slider using Swiper.js and React Player, optimized video loading with lazy loading techniques, and used modern web technologies to ensure optimal performance.',
        'result' => 'The final website achieved a 95+ PageSpeed score, reduced bounce rate by 40%, and increased client engagement by 60% through interactive video showcases.',
        'videos' => [
            [
                'url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'thumbnail' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
                'title' => 'Project Overview & Development Process',
                'description' => 'A comprehensive walkthrough of our development methodology and project timeline.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
                'thumbnail' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
                'title' => 'User Interface Design Showcase',
                'description' => 'Detailed presentation of the UI/UX design process and final interface elements.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
                'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
                'title' => 'Performance Optimization Results',
                'description' => 'Demonstration of performance improvements and optimization techniques implemented.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
                'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
                'title' => 'Performance Optimization Results',
                'description' => 'Demonstration of performance improvements and optimization techniques implemented.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
                'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
                'title' => 'Performance Optimization Results',
                'description' => 'Demonstration of performance improvements and optimization techniques implemented.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
                'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
                'title' => 'Performance Optimization Results',
                'description' => 'Demonstration of performance improvements and optimization techniques implemented.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
                'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
                'title' => 'Performance Optimization Results',
                'description' => 'Demonstration of performance improvements and optimization techniques implemented.'
            ],
            [
                'url' => 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
                'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
                'title' => 'Performance Optimization Results',
                'description' => 'Demonstration of performance improvements and optimization techniques implemented.'
            ]
        ],
        'images' => [
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=450&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=450&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=450&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&crop=center'
        ],        'gallery' => [
            [
                'url' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop&crop=center',
                'alt' => 'Development Process',
                'description' => 'Development Process'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
                'alt' => 'Team Collaboration',
                'description' => 'Team Collaboration'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                'alt' => 'Design Mockups',
                'description' => 'Design Mockups'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=550&fit=crop&crop=center',
                'alt' => 'Code Review',
                'description' => 'Code Review'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center',
                'alt' => 'Testing Phase',
                'description' => 'Testing Phase'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=500&fit=crop&crop=center',
                'alt' => 'Final Deployment',
                'description' => 'Final Deployment'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
                'alt' => 'User Testing',
                'description' => 'User Testing'
            ],
            [
                'url' => 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=280&fit=crop&crop=center',
                'alt' => 'Project Launch',
                'description' => 'Project Launch'
            ]
        ],
        'testimonial' => [
            'quote' => 'The team delivered an exceptional website that exceeded our expectations. The video integration is seamless and the performance is outstanding.',
            'author' => 'Sarah Wilson',
            'position' => 'Marketing Director',
            'company' => 'Green Lime Digital Agency'
        ]
    ];
    
    return Inertia::render('client/work-detail', [
        'work' => $sampleWork
    ]);
})->name('work.detail');
