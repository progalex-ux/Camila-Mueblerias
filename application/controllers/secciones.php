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
	public function estufas(){
		$this->load->view('estufas');
	}
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

}
	