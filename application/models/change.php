<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class change extends CI_Model {

		public function __construct()
		{
			parent::__construct();

            $this->load->database();
		}
   
        public function deleteCard($id) {
            $this->db->where('id', $id);
            $this->db->delete('categorias'); 
        }

        public function getCardData($id) {
          
            $query = $this->db->get_where('categorias', array('id' => $id));
            return $query->row_array();
          }

          public function updateColchon($id, $titulo, $precio, $image_name) {
            $data = array(
                'titulo' => $titulo,
                'precio' => $precio
            );
        
            if (!empty($image_name)) {
                $data['image'] = $image_name; 
            }
        
            $this->db->where('id', $id);
            return $this->db->update('categorias', $data);
        }
        
        
        
}
	