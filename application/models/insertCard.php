<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class insertCard extends CI_Model {



		public function __construct()
		{
			parent::__construct();

            $this->load->database();
		}
        public function createCard($dataCard)
        {
            $this->db->insert("recamaras", $dataCard);
            return $this->db->insert_id();  
        }
        
	