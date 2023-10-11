<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tarjetas extends CI_Controller{

    public function __construct()
	{
		parent::__construct();

        $this->load->library('upload');
		$this->load->helper('url');
        $this->load->model('guardar_mdl');
	}

    public function index(){
        $this->load->view("insert");
    }

    public function guardarTarjetas(){
        $tittle   = $this->input->post("tittle");
        $price    = $this->input->post("price");
    
    
        $this->upload->do_upload("image");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo . $nombreArchivo;
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'price' => $price,
            'tittle' => $tittle
        );
    
        $idTarjeta = $this->guardar_mdl->crearTarjetas($datosTarjeta);
    
        $datosEnviar = array(
            'mensaje' => "Registro con éxito",
            'idRecamara' => $idTarjeta
        );
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK); 
    }
    

    public function obtenerTarjetas(){

        $tarjetas = $this->guardar_mdl->leerTarjetas();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
}