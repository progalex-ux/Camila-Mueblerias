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


	//CARDS ELECTRODOMESTICOS
	public function insertElectronica(){
        $this->load->view("insertElectronica");
    }
	public function insertElectrodomesticos(){
        $this->load->view("insertElectrodomesticos");
    }
    public function insertMotos(){
        $this->load->view("insertMotos");
    }
    public function insertSalas(){
        $this->load->view("insertSalas");
    }
    public function insertRecamaras(){
        $this->load->view("insertRecamaras");
    }
    public function insertCocinas(){
        $this->load->view("insertCocinas");
    }

}