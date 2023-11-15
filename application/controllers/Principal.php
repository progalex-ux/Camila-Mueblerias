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
    public function salas()
    {
        $this->load->view('salas');
    }
	public function recamaras()
	{
		$this->load->view('recamaras');
	}
	public function cocinas()
	{
		$this->load->view('cocinas');
	}
	public function electrodomesticos()
	{
		$this->load->view('electrodomesticos');
	}
	public function electronica()
	{
		$this->load->view('electronica');
	}
	public function motos()
	{
		$this->load->view('motos');
	}
	public function login()
	{
		$this->load->view('login');
	}
}
	