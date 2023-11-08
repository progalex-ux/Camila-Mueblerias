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

// DELETE CARDS

public function deleteCard($id) {

    $this->load->model('change');
    $this->change->deleteCard($id);


    $response = array('status' => 'success', 'message' => 'Tarjeta eliminada con éxito');
    echo json_encode($response);
}


////////////////////////////////////////////

//EDIT CARDS

public function getCard($id) {

    $this->load->model('change');
    $cardData = $this->change->getCardData($id);

    echo json_encode(array('status' => 'success', 'card' => $cardData));
  }

  public function updateCard($id) {
    $this->load->model('Change');
    $titulo = $this->input->post('titulo');
    $precio = $this->input->post('precio');

    $image_name = '';
    if (!empty($_FILES['image']['name'])) {
        $config['upload_path'] = 'public/img/';
       
        
        $this->load->library('upload', $config);

        if (!$this->upload->do_upload('image')) {
            $error = array('error' => $this->upload->display_errors());
            echo json_encode(array('status' => 'error', 'message' => 'Error al subir la imagen', 'error' => $error));
            return;
        } else {
            $uploaded_data = $this->upload->data();
            $image_name = $uploaded_data['file_name'];
        }
    }

    $success = $this->Change->updateColchon($id, $titulo, $precio, $image_name);

    if ($success) {
        echo json_encode(array('status' => 'success', 'message' => 'Datos actualizados con éxito'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'No se pudo actualizar los datos'));
    }
}

  

//////////////////////////////////////
    public function saveCardCategorias(){
        $titulo = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
        $identificador = $this->input->post("identificador"); 
        
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/productos";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio,
            'identificador' => $identificador 
        );
    
        $idTarjeta = $this->guardar_mdl->cardCategorias($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "Registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    public function getCardCategorias(){

        $tarjetas = $this->guardar_mdl->readCardCategorias();
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
?>