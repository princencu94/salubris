<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BlogController;
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


// Blog Routes
Route::post('/addblog', [BlogController::class, 'store'])
                ->middleware(['auth']);

require __DIR__.'/auth.php';
