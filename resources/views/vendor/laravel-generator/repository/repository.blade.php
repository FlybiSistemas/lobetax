@php
    echo "<?php".PHP_EOL;
@endphp

namespace {{ $config->namespaces->repository }};

use {{ $config->namespaces->model }}\{{ $config->modelNames->name }};

class {{ $config->modelNames->name }}Repository extends AbstractCrudRepository
{
    protected $model = {{ $config->modelNames->name }}::class;
    protected $fieldSearchable = [
        {!! $fieldSearchable !!}
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }
        if (isset($params['filter_cnf'])) {
            $qry = $qry->where('ide_cnf', $params['filter_cnf']);
        }

        if (isset($params['filter_cnpj'])) {
            $qry = $qry->where(function ($qry) use ($params) {
                $qry = $qry->where('emit_cnpj', $params['filter_cnpj']);
                $qry = $qry->orWhere('dest_cnpj', $params['filter_cnpj']);
            });
        }

        if (isset($params['filter_sort'])) {
            $qry = $qry->orderBy($params['filter_sort'], $params['filter_order']);
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
