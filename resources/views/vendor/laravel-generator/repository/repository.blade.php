@php
    echo "<?php".PHP_EOL;
    $aspas = "''";
@endphp

namespace {{ $config->namespaces->repository }};

use {{ $config->namespaces->model }}\{{ $config->modelNames->name }};

class {{ $config->modelNames->name }}Repository extends AbstractCrudRepository
{
    protected $modelClass = {{ $config->modelNames->name }}::class;
    protected $fieldSearchable = [
        {!! $fieldSearchable !!}
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }

        @foreach (explode(',', $fieldSearchable) as $field)
if (isset($params["filter_{!!str_replace($aspas[0], '', $field)!!}"])) {
            $qry = $qry->where({!!$field!!}, $params["filter_{!!str_replace($aspas[0], '', $field)!!}"]);
        }

        /* if (isset($params["filter_{!!str_replace($aspas[0], '', $field)!!}"])) {
            $qry = $qry->where({!!$field!!}, 'ilike', $params["filter_{!!str_replace($aspas[0], '', $field)!!}"]);
        } */
        @endforeach

        if (isset($params['filter_search'])) {
            $qry = $qry->where('@php explode(',', $fieldSearchable)[0] @endphp', 'ilike', '%'.$params['filter_search'].'%');
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
        return {{ $config->modelNames->name }}::class;
    }
}
