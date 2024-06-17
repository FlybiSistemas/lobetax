<?php

namespace App\Repositories;

use App\Repositories\Traits\CrudMethods;

abstract class AbstractCrudRepository extends BaseRepository
{
    use CrudMethods;
}
