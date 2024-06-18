@php
    echo "<?php".PHP_EOL;
@endphp

namespace {{ $config->namespaces->repository }};

use {{ $config->namespaces->model }}\{{ $config->modelNames->name }};
use {{ $config->namespaces->app }}\Repositories\BaseRepository;

class {{ $config->modelNames->name }}Repository extends BaseRepository
{
    protected $fieldSearchable = [
        {!! $fieldSearchable !!}
    ];

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }
        if (isset($params['filter_nome'])) {
            $qry = $qry->where('nome', $params['filter_nome']);
        }

        return $this->doQuery($qry, $params['filter_take'], true);
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
