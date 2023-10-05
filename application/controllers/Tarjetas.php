<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {



		public function __construct()
		{
			parent::__construct();
			$this->load->model('insert');
			$this->load->helper('url');
		}

    public function insert()
    {
        $usuario =$this->input->post('price');
        $contrasena=$this->input->post('tittle');

        
		echo json_encode($data,JSON_NUMERIC_CHECK);
    }
}
	