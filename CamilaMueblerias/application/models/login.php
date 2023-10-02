<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login extends CI_Model {



		public function __construct()
		{
			parent::__construct();

            $this->load->database();
		}
    public function leerUser($usuario,$contrasena){

        $this->db->where('usuario',$usuario);
        $this->db->where('contrasena',$contrasena);
        $query=$this->db->get('usuarios');

            if($query->num_rows() > 0){

                $allData = array();

                foreach ($query->result() as $row){

                    $allData[] = $row;

                }
                return $allData[0];
            } else {
                return array();
            }
    }	
}
	