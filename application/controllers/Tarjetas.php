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

        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image       = $this->input->post("image");

        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;

        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);


        

        $datosTarjeta =array(
            'image'     =>$pathFile,
            'titulo'      =>$titulo,
            'precio' =>$precio
        );

        $idTarjeta = $this->guardar_mdl->crearTarjetas($datosTarjeta);

        $datosEnviar= array();

        $datosEnviar['mensaje']= "registro con exito";
        $datosEnviar['idUsuario'] = $idTarjeta;

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

// DELETE CARDS

public function deleteCard($id) {

    $this->load->model('change');
    $this->change->deleteCard($id);


    $response = array('status' => 'success', 'message' => 'Tarjeta eliminada con éxito');
    echo json_encode($response);
}


////////////////////////////////////////////

//EDIT CARDS



//////////////////////////////////////

    //ELECTRODOMESTICOS
    public function saveCardEstufa(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardEstufas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardEstufa(){

        $tarjetas = $this->guardar_mdl->readCardEstufa();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardMicroondas(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardMicroondas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardMicroondas(){

        $tarjetas = $this->guardar_mdl->readCardMicroondas();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardLicuadoras(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardLicuadoras($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardLicuadoras(){

        $tarjetas = $this->guardar_mdl->readCardLicuadoras();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardParrillas(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardParrillas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardParrillas(){

        $tarjetas = $this->guardar_mdl->readCardParrillas();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardSecadoras(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardSecadoras($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardSecadoras(){

        $tarjetas = $this->guardar_mdl->readCardSecadoras();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardLavadoras(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardLavadoras($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardLavadoras(){

        $tarjetas = $this->guardar_mdl->readCardLavadoras();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    //ELECTRONICA
    public function saveCardTelefonos(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardTelefonos($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardTelefonos(){

        $tarjetas = $this->guardar_mdl->readCardTelefonos();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardTablets(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardTablets($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardTablets(){

        $tarjetas = $this->guardar_mdl->readCardTablets();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardLaptop(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardLaptop($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardLaptop(){

        $tarjetas = $this->guardar_mdl->readCardLaptop();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardTelevisiones(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardTelevisiones($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardTelevisiones(){

        $tarjetas = $this->guardar_mdl->readCardTelevisiones();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardBocinas(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardBocinas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardBocinas(){

        $tarjetas = $this->guardar_mdl->readCardBocinas();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardBasescama(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardBasescama($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardBasescama(){

        $tarjetas = $this->guardar_mdl->readCardBasescama();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardBuros(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardBuros($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardBuros(){

        $tarjetas = $this->guardar_mdl->readCardBuros();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardCabeceras(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardCabeceras($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardCabeceras(){

        $tarjetas = $this->guardar_mdl->readCardCabeceras();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardColchones(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardColchones($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardColchones(){

        $tarjetas = $this->guardar_mdl->readCardColchones();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
     public function saveCardRoperos(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardRoperos($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    

    public function getCardRoperos(){

        $tarjetas = $this->guardar_mdl->readCardRoperos();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardRecamarasS(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardRecamarasS($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardRecamarasS(){

        $tarjetas = $this->guardar_mdl->readCardRecamarasS();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardSalamodular(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardSalamodular($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardSalamodular(){

        $tarjetas = $this->guardar_mdl->readCardSalamodular();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardSofacama(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardSofacama($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardSofacama(){

        $tarjetas = $this->guardar_mdl->readCardSofacama();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardSofas(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardSofas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardSofas(){

        $tarjetas = $this->guardar_mdl->readCardSofas();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    //Cocinas
    public function saveCardComedores(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardComedores($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardComedores(){

        $tarjetas = $this->guardar_mdl->readCardComedores();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }


    public function saveCardSillas(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardSillas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardSillas(){

        $tarjetas = $this->guardar_mdl->readCardSillas();
        $datosEnviar = array();
        if($tarjetas){
            $datosEnviar["status"] = 'success';
            $datosEnviar["tarjetas"] = $tarjetas;
        }else{
            $datosEnviar["status"] = 'error';
        }
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }

    public function saveCardVitrinas(){
        $titulo    = $this->input->post("titulo");
        $precio = $this->input->post("precio");
        $image = $this->input->post("image");
    
        $this->upload->do_upload("file");
        $rutaArchivo = "public/img/";
        $nombreArchivo = $_FILES["image"]["name"];
        $pathFile = $rutaArchivo.$nombreArchivo;
    
        move_uploaded_file($_FILES["image"]["tmp_name"], $pathFile);
    
        $datosTarjeta = array(
            'image' => $pathFile,
            'titulo' => $titulo,
            'precio' => $precio
        );
    
        $idTarjeta = $this->guardar_mdl->cardVitrinas($datosTarjeta);
    
        $datosEnviar = array();
        $datosEnviar['mensaje'] = "registro con éxito";
        $datosEnviar['idUsuario'] = $idTarjeta;
    
        echo json_encode($datosEnviar, JSON_NUMERIC_CHECK);
    }
    
    
    public function getCardVitrinas(){

        $tarjetas = $this->guardar_mdl->readCardVitrinas();
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