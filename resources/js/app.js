import './bootstrap';

import Alpine from 'alpinejs';
window.Alpine = Alpine;

import Filtro from "./filtros";
window.Filtro = Filtro;

import Ajax from "./ajax";
window.Ajax = Ajax;

import Tela from "./telas";
window.Tela = Tela;

import Sortable from 'sortablejs';
window.Sortable = Sortable;

// import iziToast from "izitoast";
// window.iziToast = iziToast;

Alpine.start();
