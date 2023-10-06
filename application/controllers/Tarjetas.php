<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tarjetas       extends CI_Controller {



		public function __construct()
		{
			parent::__construct();
			$this->load->model('insert');
			$this->load->helper('url');
		}
		public function index(){
			$this->load->view('recamaras');
		}
		public function insert()
		{
			$price = $this->input->post('price');
			$tittle = $this->input->post('tittle');
			$image = $this->input->post('image');
		
			$dataCard = array(
				'price' => $price,
				'tittle' => $tittle,
				'image' => $image 
			);
		
			$id_recamaras = $this->insert->insert($dataCard);
		
			$dataSend = array();
			$dataSend['message'] = "Registro con éxito";
			$dataSend['id_recamaras'] = $id_recamaras;
		
			echo json_encode($dataSend, JSON_NUMERIC_CHECK); 
		}
		
}
	