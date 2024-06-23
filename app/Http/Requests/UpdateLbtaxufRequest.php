<?php

namespace App\Http\Requests;

use App\Models\Lbtaxuf;
use Illuminate\Foundation\Http\FormRequest;

class UpdateLbtaxufRequest extends FormRequest
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
        $rules = Lbtaxuf::$rules;
        
        return $rules;
    }
}
