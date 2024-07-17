<?php

namespace App\Repositories;

use App\Models\Ncm;

class NcmRepository extends AbstractCrudRepository
{
    protected $modelClass = Ncm::class;
    protected $fieldSearchable = [
        'codigo',
        'tipo'
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }

        if (isset($params["filter_codigo"])) {
            $qry = $qry->where('codigo', $params["filter_codigo"]);
        }

        /* if (isset($params["filter_codigo"])) {
            $qry = $qry->where('codigo', 'ilike', $params["filter_codigo"]);
        } */
        if (isset($params["filter_
        tipo"])) {
            $qry = $qry->where(
        'tipo', $params["filter_
        tipo"]);
        }

        /* if (isset($params["filter_
        tipo"])) {
            $qry = $qry->where(
        'tipo', 'ilike', $params["filter_
        tipo"]);
        } */
        
        if (isset($params['filter_search'])) {
            $qry = $qry->where('', 'ilike', '%'.$params['filter_search'].'%');
        }

        return $this->doQuery($qry, $params['filter_take'], true);
    }

    public function findToSelect2js($q)
    {
        $q = strtoupper($q);
        $qry = $this->newQuery();
        $qry = $qry->whereRaw("UPPER(name) ilike '%$q%' ");
        $objetos = $qry->get();
        return $objetos->map(function ($item, $key) {
            return ['id' => $item->id, 'text' => "{$item->name}"];
        });
    }

    public function getFieldsSearchable(): array
    {
        return $this->fieldSearchable;
    }

    public function model(): string
    {
        return Ncm::class;
    }
}
