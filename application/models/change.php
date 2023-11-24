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
                $data['image'] = 'public/img/productos/' . $image_name; 
            }
        
            $this->db->where('id', $id);
            return $this->db->update('categorias', $data);
        }
        
        
        
        public function getCurrentImageName($id) {
            $this->db->select('image');
            $this->db->where('id', $id);
            $this->db->from('categorias');

            $query = $this->db->get();
            
            if ($query->num_rows() > 0) {
                $row = $query->row();
                return $row->image;
            } else {
                return '';
            }
        }
        

        ////////// buscar
        public function searchCards($identificador) {
            $this->db->where('identificador', $identificador);
            $query = $this->db->get('categorias');
            return $query->result_array();
        }
        
        
}