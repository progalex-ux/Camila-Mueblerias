<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Principal extends CI_Controller {



		public function __construct()
		{
			parent::__construct();

			$this->load->helper('url');
		}
	
	public function index()
	{
		$this->load->view('index');
	}
	public function categorias()
    {
        $this->load->view('categorias');
    }
	public function productos()
	{
		$this->load->view('productos');
	}
	public function login()
	{
		$this->load->view('login');
	}
}
	