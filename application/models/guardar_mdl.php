<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Guardar_mdl extends CI_Model{
    public function __construct(){
        parent::__construct();

        $this->load->database();
    }

    public function crearTarjetas($datosTarjeta){
        $this->db->insert("recamara",$datosTarjeta);
        return $this->db->insert_id();
    }

    public function leerTarjetas(){
        $query = $this->db->get("recamara");
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