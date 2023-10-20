<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Guardar_mdl extends CI_Model{
    public function __construct(){
        parent::__construct();

        $this->load->database();
    }
    public function crearTarjetas($datosTarjeta){
        $this->db->insert("recamaras",$datosTarjeta);
        return $this->db->insert_id();
    }
    public function leerTarjetas(){
        $query = $this->db->get("recamaras");
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

    public function cardEstufas($datosTarjeta){
        $this->db->insert("estufas", $datosTarjeta);
        return $this->db->insert_id();
    }

    public function readCardEstufa(){
        $query = $this->db->get("estufas");
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

    public function cardMicroondas($datosTarjeta){
        $this->db->insert("microondas", $datosTarjeta);
        return $this->db->insert_id();
    }

    public function readCardMicroondas(){
        $query = $this->db->get("microondas");
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

    public function cardLicuadoras($datosTarjeta){
        $this->db->insert("licuadoras", $datosTarjeta);
        return $this->db->insert_id();
    }

    public function readCardLicuadoras(){
        $query = $this->db->get("licuadoras");
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
    public function cardParrillas($datosTarjeta){
        $this->db->insert("parrillas", $datosTarjeta);
        return $this->db->insert_id();
    }

    public function readCardParrillas(){
        $query = $this->db->get("parrillas");
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
    public function cardSecadoras($datosTarjeta){
        $this->db->insert("secadoras", $datosTarjeta);
        return $this->db->insert_id();
    }

    public function readCardSecadoras(){
        $query = $this->db->get("secadoras");
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
    public function cardLavadoras($datosTarjeta){
        $this->db->insert("lavadoras", $datosTarjeta);
        return $this->db->insert_id();
    }

    public function readCardLavadoras(){
        $query = $this->db->get("lavadoras");
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
//ELECTRONICA
public function cardTelefonos($datosTarjeta){
    $this->db->insert("celulares", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardTelefonos(){
    $query = $this->db->get("celulares");
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
  
public function cardTablets($datosTarjeta){
    $this->db->insert("tablets", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardTablets(){
    $query = $this->db->get("tablets");
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

public function cardLaptop($datosTarjeta){
    $this->db->insert("laptops", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardLaptop(){
    $query = $this->db->get("laptops");
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

public function cardTelevisiones($datosTarjeta){
    $this->db->insert("televisiones", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardTelevisiones(){
    $query = $this->db->get("televisiones");
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

public function cardBocinas($datosTarjeta){
    $this->db->insert("bocinas", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardBocinas(){
    $query = $this->db->get("bocinas");
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

public function cardColchones($datosTarjeta){
    $this->db->insert("colchones", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardColchones(){
    $query = $this->db->get("colchones");
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
public function cardBasescama($datosTarjeta){
    $this->db->insert("basescama", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardBasescama(){
    $query = $this->db->get("basescama");
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

public function cardCabeceras($datosTarjeta){
    $this->db->insert("cabeceras", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardCabeceras(){
    $query = $this->db->get("cabeceras");
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

public function cardBuros($datosTarjeta){
    $this->db->insert("buros", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardBuros(){
    $query = $this->db->get("buros");
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

public function cardRecamarasS($datosTarjeta){
    $this->db->insert("recamarasS", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardRecamarasS(){
    $query = $this->db->get("recamarasS");
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

public function cardRoperos($datosTarjeta){
    $this->db->insert("roperos", $datosTarjeta);
    return $this->db->insert_id();
}

public function readCardRoperos(){
    $query = $this->db->get("roperos");
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