<div class="card-vertical" id="row{{ $i }}" data-idx="{{ $i }}">
    <span><p>{{$coluna ? $coluna->nome : ''}}</p>
    <img onclick="removeColuna({{ $i }})" src="{{ asset('img/new/icons/trash.ico') }}" alt="">
    </span>
    <input type="hidden" name="coluna[{{ $i }}]" value="{{ $coluna ? $coluna->id : '' }}">
</div>