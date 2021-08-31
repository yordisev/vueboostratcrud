<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Listado de Artículos
        </h2>       
      </v-col>        
    </v-row>
    <!-- <v-row>
    <v-col class="mb-2">
        <v-btn color="primary" :to="'/CrearEmpleado'"> Agregar Articulo</v-btn>
    </v-col>
    </v-row> -->
    <div class="text-right mb-2">
         <v-row justify="end">
            <v-col>
             <v-btn color="primary" :to="'/CrearEmpleado'"><v-icon>mdi-account-plus</v-icon> Agregar Articulo</v-btn>
            </v-col>
          </v-row>
    </div>
   
     
    <!-- <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Descripción</th>
            <th class="text-center">Precio</th>
            <th class="text-center">Stock</th>
            <th class="text-center">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="articulo in articulos" :key="articulo.id">
                <td>{{articulo.id}}</td>
                <td>{{articulo.descripcion}}</td>
                <td>{{articulo.precio}}</td>
                <td>{{articulo.stock}}</td>
                <td>
                    <v-btn :to="{name:'EditarEmpleado', params:{id:articulo.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=articulo.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row> -->
    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
    <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      >
      
      </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="articulos"
      :search="search"
      class="elevation-1"
    >
    
  <!-- <template v-slot:articulos.stock="{ articulos }"> -->
      <template v-slot:[`item.stock`]="{ item }">
      <v-chip
        :color="getColor(item.stock)"
        dark
      >
        {{ item.stock }}
      </v-chip>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
    <td>
                    <v-btn :to="{name:'EditarEmpleado', params:{id:item.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=item.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
    </template>
    </v-data-table>
  </v-card>
    <!-- ventana de diálogo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- componente snackbar para mostrar mensaje de eliminación -->
    <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'listarArticulos',
    mounted(){
        this.obtenerArticulos();
    },
    data(){
        return{            
            dialog:false,
            articulos:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!',
             search: '',
        headers: [
          {
            text: 'id',
            align: 'start',
            filterable: false,
            value: 'id',
          },
          { text: 'descripcion', value: 'descripcion' },
          { text: 'precio', value: 'precio' },
          { text: 'stock', value: 'stock' },
          { text: 'Acciones', value: 'actions', sortable: false },
        ],
        articulos: [],
        }
    },
    methods:{
         getColor (stock) {
        if (stock > 400) return 'red'
        else if (stock > 200) return 'orange'
        else return 'green'
      },
        obtenerArticulos(){
            axios.get('http://localhost/apirest/articulos.php')
            .then(r => {
                this.articulos = r.data;
                console.log(this.articulos);
            })
            .catch(function(error){
                console.log(error);
            })

        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/articulos.php?id='+id)
            .then(()=>{
                    this.obtenerArticulos();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            });    
        }
    }
}
</script>