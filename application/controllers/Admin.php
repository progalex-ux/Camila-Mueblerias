<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {



		public function __construct()
		{
			parent::__construct();
			$this->load->model('login');
			$this->load->helper('url');
		}

	public function index()
	{
		$this->load->view('login');
	}
	public function tarjetas(){
		$this->load->view('tarjetas');
	}
	public function changeData(){
		$this->load->view('changeData');
	}
    public function login()
    {
        $usuario =$this->input->post('usuario');
        $contrasena=$this->input->post('contrasena');

        $checkUser=$this->login->leerUser($usuario,$contrasena);

		if($checkUser){
			$data=array(
				'usuario'=>$checkUser->usuario,
				'status'=>'true'
			);
		} else{
			$data= array('Status'=>'False');
		}
		echo json_encode($data,JSON_NUMERIC_CHECK);
    }
	public function insertProducts(){
        $this->load->view("insertProducts");
    }

}