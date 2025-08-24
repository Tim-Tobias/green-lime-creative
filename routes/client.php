<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('client/welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('client/about');
})->name('about');
