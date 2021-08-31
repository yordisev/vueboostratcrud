<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Formulario de ALTA</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarArticulo()">
        <v-text-field v-model="articulo.descripcion"
                label="Descripción"
                outlined
                required   
        >
        </v-text-field>
         <v-text-field
                v-model="articulo.precio"        
                label="Precio"
                type="number"                
                prefix="$"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="articulo.stock"        
                label="Stock"
                type="number"
                outlined
                required        
            ></v-text-field>
   <v-row
    align="center"
    justify="space-around"
  >
      <v-card-actions>
                <v-btn color="primary" class="ma-2" type="submit">Guardar</v-btn>      
            </v-card-actions>
    <v-btn
    to="/Usuarios"
      color="warning"
      dark
      class="ma-2"
    >
      Regresar
    </v-btn>
  </v-row>
        </form>
    </v-col>
    </v-row>

    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'CrearEmpleado',
    data(){
        return{
            articulo:{
                descripcion:'',
                precio:'',
                stock:''
            }
        };
    },
    methods:{
        guardarArticulo(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('descripcion',this.articulo.descripcion);
           formData.append('precio',this.articulo.precio);
           formData.append('stock',this.articulo.stock);
           axios.post('http://localhost/apirest/articulos.php',formData)
           .then(()=>{
               router.push('/Usuarios');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>