<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Secciones extends CI_Controller {



		public function __construct()
		{
			parent::__construct();
			$this->load->model('login');
			$this->load->helper('url');
		}

	public function index()
	{
		$this->load->view('home');
	}
	/*
	public function (){
		$this->load->view('');
	}
	*/
	// VISTAS ELECTRODOMESTICOS
	public function estufas(){
		$this->load->view('estufas');
	}
	public function licuadoras(){
		$this->load->view('licuadoras');
	}
	public function microondas(){
		$this->load->view('microondas');
	}
	public function parrillas(){
		$this->load->view('parrillas');
	}
	public function secadoras(){
		$this->load->view('secadoras');
	}
	public function lavadoras(){
		$this->load->view('lavadoras');
	}
//VISTAS ELECTRONICA
	public function telefonos(){
		$this->load->view('telefonos');
	}
	public function tablets(){
		$this->load->view('tablets');
	}
    public function laptop(){
		$this->load->view('laptop');
	}
    public function televisiones(){
		$this->load->view('televisiones');
	}
	public function bocinas(){
		$this->load->view('bocinas');
	}
//VISTAS RECAMARAS
	public function colchones(){
		$this->load->view('colchones');
	}
	public function basescama(){
		$this->load->view('basescama');
	}
	public function buros(){
		$this->load->view('buros');
	}
	public function roperos(){
		$this->load->view('roperos');
	}
	public function cabeceras(){
		$this->load->view('cabeceras');
	}
	public function recamarasS(){
		$this->load->view('recamarasS');
	}
//VISTAS SALAS
	public function sofacama(){
		$this->load->view('sofacama');
	}
	public function salamodular(){
		$this->load->view('salamodular');
	}
	public function sofas(){
		$this->load->view('sofas');
	}
}
	