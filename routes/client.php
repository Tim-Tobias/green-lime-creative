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
