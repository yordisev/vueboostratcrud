<template>
   <v-form v-model="valid">
    <v-container>
      <v-row>
           <v-col cols="6" md="4">
<v-btn x-large @click="buscarCedula(cedula)" color="success">Aceptar</v-btn>
 </v-col>
        <v-col cols="6" md="4">
          <v-text-field v-model="cedula" label="Buscar por cedula" solo>
          </v-text-field>
          </v-col>
 <v-col cols="6" md="4">
<v-btn  x-large color="primary" @click.stop="dialog=true" @click="cedula=cedula">Buscar</v-btn>
 </v-col>



 <!-- ventana de diálogo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="success">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- componente snackbar para mostrar mensaje de eliminación -->

 <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
<!-- ------------------------------------- -->
 <template v-if="personas.cedula" != ''>
 <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
          v-model="personas.nombre"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
          v-model="personas.apellido"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
          v-model="personas.anio"
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Filled"
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Filled"
            placeholder="Placeholder"
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Outlined"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            outlined
          ></v-text-field>
        </v-col>

        <v-row
    align="center"
    justify="space-around"
  >
     <v-btn
      depressed
      color="primary"
    >
    
      <v-icon left>
        mdi-pencil
      </v-icon>
       Editar
    </v-btn>
  </v-row>
 </template>
<!-- -------------------------------------------- -->
      </v-row>
    </v-container>
  </v-form>
  
</template>

<script>
import axios from 'axios'
export default {
data(){
        return{
            dialog:false,
            cedula:'',
            valid:null,
             personas:{
          nombre:'',
          apellido:'',
          cedula:''
        }
           
        };
    },
    methods:{
          buscarCedula(cedula){
            axios.get('http://localhost/apirest/persona.php?cedula='+cedula)
            .then(r => {
                this.personas = r.data;
                console.log(this.personas);
            })
            .catch(function(error){
                console.log(error);
            })

        }
    }
  
}
</script>

<style>

</style>