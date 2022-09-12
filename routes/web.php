<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LiveStreamController;
use App\Http\Controllers\MemberController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\BillingController;
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

Route::get('/managed-healthcare', function () {
    return Inertia::render('ManagedHealthCare');
});

Route::get('/wellness-spa', function () {
    return Inertia::render('WellnessSpa');
});

Route::get('/mental-health-management', function () {
    return Inertia::render('MentalHealth');
});

Route::get('/nutrition-and-wellness', function () {
    return Inertia::render('NutritionWellness');
});

Route::get('/blogs', [BlogController::class, 'blogtopics']);


Route::get('/rewards', function () {
    return Inertia::render('Rewards');
});

Route::get('/well-woman-program', function () {
    return Inertia::render('WellWomanProgram');
});

Route::get('/men-cave-program', function () {
    return Inertia::render('MenCaveProgram');
});

Route::get('/virtual-gym', function () {
    return Inertia::render('VirtualGym');
});

Route::get('/corporate-wellness-program', function () {
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
Route::get('/add-blog', [BlogController::class, 'create'])->middleware(['auth']);
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
Route::get('/livestreams', [LiveStreamController::class, 'index'])->middleware(['auth'])->name('livestreams');
Route::get('/editlivestream/{id}', [LiveStreamController::class, 'edit'])->middleware(['auth'])->name('editlivestream');
Route::put('/editlivestream/{id}', [LiveStreamController::class, 'update'])->middleware(['auth'])->name('editlivestream');
Route::delete('/deletelivestream/{id}', [LiveStreamController::class, 'destroy'])->middleware(['auth'])->name('deletelivestream');
Route::get('/addlivestream', [LiveStreamController::class, 'create'])->middleware(['auth'])->name('addlivestream');
Route::post('/addlivestream', [LiveStreamController::class, 'store'])->middleware(['auth'])->name('addlivestream');
Route::post('/saveprofile', [ProfileController::class, 'store'])->middleware(['auth'])->name('saveprofile');
Route::put('/updateprofile/{id}', [ProfileController::class, 'update'])->middleware(['auth'])->name('updateprofile');


// Member Routes Member
Route::get('/health-info', [MemberController::class, 'index'])->middleware(['auth'])->name('health-info');
Route::get('/addhealthinfo', [MemberController::class, 'create'])->middleware(['auth'])->name('addhealthinfo');
Route::post('/savehealthinfo', [MemberController::class, 'store'])->middleware(['auth'])->name('savehealthinfo');
Route::get('/edithealthinfo/{id}', [MemberController::class, 'edit'])->middleware(['auth'])->name('edithealthinfo');
Route::put('/edithealthinfo/{id}', [MemberController::class, 'update'])->middleware(['auth'])->name('edithealthinfo');

// Schedule Routes
Route::get('/schedule', [ScheduleController::class, 'index'])->middleware(['auth'])->name('schedule');
Route::get('/addschedule', [ScheduleController::class, 'create'])->middleware(['auth'])->name('addschedule');
Route::post('/add-schedule', [ScheduleController::class, 'store'])->middleware(['auth'])->name('add-schedule');
Route::get('/editschedule/{id}', [ScheduleController::class, 'edit'])->middleware(['auth'])->name('editschedule');
Route::put('/edit-schedule/{id}', [ScheduleController::class, 'update'])->middleware(['auth'])->name('edit-schedule');
Route::delete('/delete-schedule/{id}', [ScheduleController::class, 'destroy'])->middleware(['auth'])->name('delete-schedule');

// Billing Portal Routes
Route::get('/billing', [BillingController::class, 'index'])->middleware(['auth'])->name('billing');
Route::get('/billing-plans', [BillingController::class, 'plans'])->middleware(['auth'])->name('billing');


require __DIR__.'/auth.php';
