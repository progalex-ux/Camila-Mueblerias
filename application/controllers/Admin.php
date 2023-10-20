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
	public function cardsElectrodomesticos(){
		$this->load->view('cardsElectrodomesticos');
	}
	public function cardsRecamaras(){
		$this->load->view('cardsRecamaras');
	}
	public function cardsSalas(){
		$this->load->view('cardsSalas');
	}
	public function cardsElectronica(){
		$this->load->view('cardsElectronica');
	}
	public function cardsCocinas(){
		$this->load->view('cardsCocinas');
	}
	//CARDS ELECTRODOMESTICOS
	public function insertEstufas(){
        $this->load->view("insertEstufas");
    }
	public function insertMicroondas(){
        $this->load->view("insertMicroondas");
    }
    public function insertLicuadoras(){
        $this->load->view("insertLicuadoras");
    }
    public function insertParrillas(){
        $this->load->view("insertParrillas");
    }
    public function insertSecadoras(){
        $this->load->view("insertSecadoras");
    }
    public function insertLavadoras(){
        $this->load->view("insertLavadoras");
    }
	public function insert(){
		$this->load->view('insert');
	}
	//insert electronica
	public function insertTelefonos(){
		$this->load->view('insertTelefonos');
	}
	public function insertTablets(){
		$this->load->view('insertTablets');
	}
	public function insertLaptop(){
		$this->load->view('insertLaptop');
	}
	public function insertTelevisiones(){
		$this->load->view('insertTelevisiones');
	}
	public function insertBocinas(){
		$this->load->view('insertBocinas');
	}
	//Recamaras
	public function insertColchones(){
		$this->load->view('insertColchones');
	}
	public function insertBasescama(){
		$this->load->view('insertBasescama');
	}
	public function insertBuros(){
		$this->load->view('insertBuros');
	}
	public function insertRoperos(){
		$this->load->view('insertRoperos');
	}
	public function insertCabeceras(){
		$this->load->view('insertCabeceras');
	}
	public function insertRecamarasS(){
		$this->load->view('insertRecamarasS');
	}
	//

	public function tarjetas(){
		$this->load->view('tarjetas');
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
}
	