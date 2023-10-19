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
		$his->load->view('microondas');
	}
	public function parrillas(){
		$his->load->view('parrillas');
	}
	public function secadoras(){
		$his->load->view('secadoras');
	}
	public function lavadoras(){
		$his->load->view('lavadoras');
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
	public function bases_cama(){
		$this->load->view('bases_cama');
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
	public function recamaras(){
		$this->load->view('recamaras');
	}
//VISTAS SALAS
	public function sofa_cama(){
		$this->load->view('sofa_cama');
	}
	public function sala_modular(){
		$this->load->view('sala_modular');
	}
	public function sofas(){
		$this->load->view('sofas');
	}
}
	