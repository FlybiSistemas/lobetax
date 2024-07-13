<?php

namespace App\Repositories;

use App\Models\Participantes;

class ParticipantesRepository extends AbstractCrudRepository
{
    protected $modelClass = Participantes::class;
    protected $fieldSearchable = [
        'cnpj',
        'razao_social',
        'natureza',
        'categoria'
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }

        if (isset($params["filter_cnpj"])) {
            $qry = $qry->where('cnpj', 'ilike', $params["filter_cnpj"]);
        }

        if (isset($params["filter_razao_social"])) {
            $qry = $qry->where('razao_social', 'ilike', $params["filter_razao_social"]);
        }

        if (isset($params["filter_natureza"])) {
            $qry = $qry->where('natureza', $params["filter_natureza"]);
        }

        if (isset($params["filter_categoria"])) {
            $qry = $qry->where('categoria', $params["filter_categoria"]);
        }
        
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
        return Participantes::class;
    }
}
