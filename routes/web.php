<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/salubris-revolution', function () {
    return Inertia::render('SalubrisRevolution');
});

Route::get('/maternal-care', function () {
    return Inertia::render('MaternalCare');
});

Route::get('/preventive-care', function () {
    return Inertia::render('PreventiveCare');
});

Route::get('/wellness-spa', function () {
    return Inertia::render('WellnessSpa');
});

Route::get('/mental-and-behavioural-health', function () {
    return Inertia::render('MentalHealth');
});

Route::get('/nutrition-and-wellness', function () {
    return Inertia::render('NutritionWellness');
});

Route::get('/blogs', function () {
    return Inertia::render('Blogs');
});


Route::get('/rewards', function () {
    return Inertia::render('Rewards');
});

Route::get('/well-woman-program', function () {
    return Inertia::render('WellWomanProgram');
});

Route::get('/men-cave-program', function () {
    return Inertia::render('MenCaveProgram');
});

Route::get('/corporate-employee-wellness-program', function () {
    return Inertia::render('CorporateEmployeeWellnessProgram');
});

// Route::get('/dashboard/add-blog', function () {
//     return Inertia::render('Addblog');
// });
 
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard')->uses([DashboardController::class, 'index']);

Route::group(['middleware' => ['auth']], function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/add-blog', [DashboardController::class, 'addblog']);
});


// Blog Routes Admin
Route::post('/addblog', [BlogController::class, 'store'])->middleware(['auth']);
Route::get('/adminblogs', [BlogController::class, 'index'])->middleware(['auth'])->name('adminblogs');
Route::get('/editblog/{id}', [BlogController::class, 'show'])->middleware(['auth']);
Route::put('/editblog/{id}', [BlogController::class, 'update'])->middleware(['auth']);
Route::delete('/deleteblog/{id}', [BlogController::class, 'destroy'])->middleware(['auth']);


// Trainer Routes Admin
Route::get('/trainers', [TrainerController::class, 'index'])->middleware(['auth'])->name('trainers');
Route::get('/addtrainer', [TrainerController::class, 'create'])->middleware(['auth'])->name('addtrainer');
Route::post('/addtrainer', [TrainerController::class, 'store'])->middleware(['auth'])->name('addtrainer');
Route::get('/edittrainer/{id}', [TrainerController::class, 'show'])->middleware(['auth']);
Route::delete('/removetrainer/{id}', [TrainerController::class, 'destroy'])->middleware(['auth'])->name('removetrainer');

// User Routes Admin
Route::get('/users', [UserController::class, 'index'])->middleware(['auth'])->name('users');

// Trainer Routes Trainer
Route::get('/profile', [ProfileController::class, 'index'])->middleware(['auth'])->name('profile');
Route::post('/saveprofile', [ProfileController::class, 'store'])->middleware(['auth'])->name('saveprofile');
Route::put('/updateprofile/{id}', [ProfileController::class, 'update'])->middleware(['auth'])->name('updateprofile');

require __DIR__.'/auth.php';
