<?php

namespace App\Repositories;

use App\Models\Cnae;

class CnaeRepository extends AbstractCrudRepository
{
    protected $modelClass = Cnae::class;
    protected $fieldSearchable = [
        'codigo',
        'descricao',
        'atividade'
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }

        if (isset($params["filter_codigo"])) {
            $qry = $qry->where('codigo', 'ilike', $params["filter_codigo"]);
        }

        if (isset($params["filter_descricao"])) {
            $qry = $qry->where('descricao', 'ilike', $params["filter_descricao"]);
        }

        if (isset($params["filter_atividade"])) {
            $qry = $qry->where('atividade', $params["filter_atividade"]);
        }
        
        if (isset($params['filter_search'])) {
            $qry = $qry->where('descricao', 'ilike', '%'.$params['filter_search'].'%')
                ->orwhere('codigo', 'ilike', '%'.$params['filter_search'].'%');
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
        return Cnae::class;
    }
}
