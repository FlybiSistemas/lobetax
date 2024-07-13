<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class Cnae
 * Table/View: cnaes
 *
 * @version December 15, 2022, 09:40 am -03
 *
 * @property int $id
 * @property string $codigo
 * @property string $descricao
 */
class Cnae extends Model
{
    use HasFactory;
    public $table = 'cnaes';
    protected $hidden = [];
    public string $label = 'descricao';
    public array  $searchable = ['descricao'];

    public $fillable = [
        'codigo',
        'descricao',
        'categoria'
    ];
}
