<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class insert extends CI_Model {



		public function __construct()
		{
			parent::__construct();

            $this->load->database();
		}
    public function sendData($price,$tittle){

        $this->db->where('price',$price);
        $this->db->where('tittle',$tittle);
        $query=$this->db->get('recamaras');

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
	