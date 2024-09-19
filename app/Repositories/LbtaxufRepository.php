<?php

namespace App\Repositories;

use App\Helpers\ImpostoHelper;
use App\Models\Lbtaxuf;

class LbtaxufRepository extends AbstractCrudRepository
{
    protected $modelClass = Lbtaxuf::class;

    public function all($params)
    {
        $qry = $this->newQuery();

        if (isset($params['filter_id'])) {
            $qry = $qry->where('id', '=', $params['filter_id']);
        }
        if (isset($params['filter_cnf'])) {
            $qry = $qry->where('ide_cnf', $params['filter_cnf']);
        }
        if (isset($params['filter_search'])) {
            $qry = $qry->where('legislacao', 'ilike', '%'.$params['filter_search'].'%')
                ->orwhere('uf', 'ilike', '%'.$params['filter_search'].'%');
        }

        if (isset($params['filter_cnpj'])) {
            $qry = $qry->where(function ($qry) use ($params) {
                $qry = $qry->where('emit_cnpj', $params['filter_cnpj']);
                $qry = $qry->orWhere('dest_cnpj', $params['filter_cnpj']);
            });
        }

        if (isset($params['filter_uf'])) {
            $qry = $qry->where('uf', $params['filter_uf']);
        }

        if (isset($params['filter_imposto'])) {
            $qry = $qry->where('imposto', ImpostoHelper::getKey($params['filter_imposto']));
        }

        if (isset($params['filter_legislacao'])) {
            $qry = $qry->where('legislacao', 'ilike', '%'.$params['filter_legislacao'].'%');
        }

        if (isset($params['filter_uf'])) {
            $qry = $qry->where('uf', $params['filter_uf']);
        }

        if (isset($params['filter_sort'])) {
            $qry = $qry->orderBy($params['filter_sort'], $params['filter_order']);
        }

        // $qry = $qry->orderBy('legislacao', 'asc');
        // $qry = $qry->orderBy('uf', 'asc');

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
        return Lbtaxuf::class;
    }

    public function reorder($input)
    {
        foreach ($input['ordem'] as $ordem => $id) {
            $this->modelClass::where('id', $id)->update(['ordem' => $ordem+1]);
        }
    }
}
