<?php

use App\Http\Controllers\AlertaController;
use App\Http\Controllers\CnaeController;
use App\Http\Controllers\ColunaController;
use App\Http\Controllers\ImpNotaController;
use App\Http\Controllers\LbtaxController;
use App\Http\Controllers\LbtaxfullController;
use App\Http\Controllers\LbtaxleiController;
use App\Http\Controllers\LbtaxufController;
use App\Http\Controllers\NcmController;
use App\Http\Controllers\ParticipantesController;
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
    Route::get('/colunas/searchModelFillable/{model}', [ColunaController::class, 'searchModelFillable'])->name('colunas.searchModelFillable');
    Route::get('/colunas/searchModelRelations/{model}', [ColunaController::class, 'searchModelRelations'])->name('colunas.searchModelRelations');
    Route::resource('colunas', ColunaController::class);
    Route::post('/tabelas/search', [TabelaController::class, 'search'])->name('tabelas.search');
    Route::post('/tabelas/ordenaColunas', [TabelaController::class, 'ordenaColunas'])->name('tabelas.ordenaColunas');
    Route::resource('tabelas', TabelaController::class);
});

Route::group(['prefix' => 'parametros'], function () {
    Route::group(['prefix' => 'lbtaxufs'], function () {
        Route::post('/lbtaxufs/search', [LbtaxufController::class, 'search'])->name('lbtaxufs.search');
    });
    Route::resource('lbtaxufs', LbtaxufController::class);

    Route::group(['prefix' => 'lbtaxleis'], function () {
        Route::post('/search', [LbtaxleiController::class, 'search'])->name('lbtaxleis.search');
    });
    Route::resource('lbtaxleis', LbtaxleiController::class);

    Route::group(['prefix' => 'lbtaxs'], function () {
        Route::post('/search', [LbtaxController::class, 'search'])->name('lbtaxs.search');
    });
    Route::resource('lbtaxs', LbtaxController::class);

    Route::group(['prefix' => 'lbtaxfulls'], function () {
        Route::post('/search', [LbtaxfullController::class, 'search'])->name('lbtaxfulls.search');
    });
    Route::resource('lbtaxfulls', LbtaxfullController::class);
});


Route::group(['prefix' => 'cadastros'], function () {
    Route::post('/participantes/search', [ParticipantesController::class, 'search'])->name('participantes.search');
    Route::post('/ncms/search', [NcmController::class, 'search'])->name('ncms.search');
    Route::post('/cnaes/search', [CnaeController::class, 'search'])->name('cnaes.search');
});
Route::resource('cadastros/participantes', ParticipantesController::class);
Route::resource('cadastros/ncms', NcmController::class);
Route::resource('cadastros/cnaes', App\Http\Controllers\CnaeController::class);


Route::group(['prefix' => 'parti'], function () {
    Route::post('/search', [LbtaxfullController::class, 'search'])->name('parti.search');
});

Route::post('/search', [AlertaController::class, 'search'])->name('alertas.search');
Route::resource('alertas', AlertaController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/cnaes/find', [CnaeController::class, 'find'])->name('cnaes.find');


require __DIR__.'/auth.php';

