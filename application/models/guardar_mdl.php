<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Guardar_mdl extends CI_Model{
    public function __construct(){
        parent::__construct();

        $this->load->database();
    }
  

    public function cardSalas($datosTarjeta){
        $this->db->insert("salas", $datosTarjeta);
        return $this->db->insert_id();
    }
    public function readCardSalas(){
        $query = $this->db->get("salas");
        if($query->num_rows()>0){
            $datos = array();
            foreach( $query->result() as $fila){
                $datos[] = $fila;
            }
            return $datos;
        }else{
            return array();
        }

    }
    
  

}

?>    