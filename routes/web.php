<?php

use App\Http\Controllers\ColunaController;
use App\Http\Controllers\ImpNotaController;
use App\Http\Controllers\LbtaxufController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TabelaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['prefix' => 'impNotas'], function () {
    Route::get('/', [ImpNotaController::class, 'index'])->name('impNotas');
    Route::post('/search', [ImpNotaController::class, 'search'])->name('impNotas.search');
    Route::get('/import', [ImpNotaController::class, 'import'])->name('impNotas.import');
    Route::post('/importarNotaApi', [ImpNotaController::class, 'importarNotaApi'])->name('impNotas.importarNotaApi');
});
Route::resource('impNotas', ImpNotaController::class);

Route::group(['prefix' => 'rotinas'], function () {
    Route::post('/colunas/search', [ColunaController::class, 'search'])->name('colunas.search');
    Route::resource('colunas', ColunaController::class);
    Route::post('/tabelas/search', [TabelaController::class, 'search'])->name('tabelas.search');
    Route::resource('tabelas', TabelaController::class);
});


Route::group(['prefix' => 'lbtaxufs'], function () {
    Route::post('/lbtaxufs/search', [LbtaxufController::class, 'search'])->name('lbtaxufs.search');
});
Route::resource('lbtaxufs', App\Http\Controllers\LbtaxufController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';


