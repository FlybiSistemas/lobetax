<?php

namespace App\Http\Requests;

use App\Models\Lbtaxuf;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateLbtaxufRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'uf' => 'required|max:2',
            'imposto' => [
                'required',
                'max:255',
                Rule::unique('lbtaxufs')->where(function ($query) {
                    return $query->where('ordem', $this->ordem);
                }),
            ],
            'legislacao' => 'required|max:255',
        ];
    }


    public function messages()
    {
        return [
            'uf.required' => 'O campo UF é obrigatório.',
            'uf.max' => 'O campo UF não pode ter mais que 2 caracteres.',
            'imposto.required' => 'O campo Imposto é obrigatório.',
            'imposto.max' => 'O campo Imposto não pode ter mais que 255 caracteres.',
            'ordem.required' => 'O campo Ordem é obrigatório.',
            'ordem.integer' => 'O campo Ordem deve ser um número inteiro.',
            'imposto.unique' => 'A combinação de Imposto e Ordem já existe.',
        ];
    }
}
