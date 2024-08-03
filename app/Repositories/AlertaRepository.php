<?php

namespace App\Repositories;

use App\Models\Alerta;

class AlertaRepository extends AbstractCrudRepository
{
    protected $modelClass = Alerta::class;
    protected $fieldSearchable = [
        'model_name',
        'model_id',
        'descricao',
        'valor',
        'rota'
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }

        if (isset($params["filter_model_name"])) {
            $qry = $qry->where('model_name', $params["filter_model_name"]);
        }

        /* if (isset($params["filter_model_name"])) {
            $qry = $qry->where('model_name', 'ilike', $params["filter_model_name"]);
        } */
        if (isset($params["filter_
        model_id"])) {
            $qry = $qry->where(
        'model_id', $params["filter_
        model_id"]);
        }

        /* if (isset($params["filter_
        model_id"])) {
            $qry = $qry->where(
        'model_id', 'ilike', $params["filter_
        model_id"]);
        } */
        if (isset($params["filter_
        descricao"])) {
            $qry = $qry->where(
        'descricao', $params["filter_
        descricao"]);
        }

        /* if (isset($params["filter_
        descricao"])) {
            $qry = $qry->where(
        'descricao', 'ilike', $params["filter_
        descricao"]);
        } */
        if (isset($params["filter_
        valor"])) {
            $qry = $qry->where(
        'valor', $params["filter_
        valor"]);
        }

        /* if (isset($params["filter_
        valor"])) {
            $qry = $qry->where(
        'valor', 'ilike', $params["filter_
        valor"]);
        } */
        if (isset($params["filter_
        rota"])) {
            $qry = $qry->where(
        'rota', $params["filter_
        rota"]);
        }

        /* if (isset($params["filter_
        rota"])) {
            $qry = $qry->where(
        'rota', 'ilike', $params["filter_
        rota"]);
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
        return Alerta::class;
    }
}
