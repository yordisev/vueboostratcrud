<template>
<div>
  <v-app>
   
<v-navigation-drawer
      v-model="drawer"
     :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="blue lighten-3--text text--accent-4"
        >
          <v-list-item :to="'/Inicio'">
            <v-list-item-title> <v-icon>mdi-offer</v-icon> Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item :to="'/Informes'">
            <v-list-item-title> <v-icon>mdi-monitor-dashboard</v-icon> Informes</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
         <!-- REPORTES -->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                
                <v-list-item-title> <v-icon>mdi-account-group</v-icon> Funcionarios </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
             <v-list-item :to="'/Empleados'">
            <v-list-item-title> <v-icon>mdi-account</v-icon> Empleados</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/Usuarios'">
            <v-list-item-title> <v-icon>mdi-account-multiple</v-icon> Usuarios</v-list-item-title>
          </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
     <v-app-bar
     :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>  
      <span class="hidden-sm-and-down">TALENTO</span>
 </v-toolbar-title>
      <v-spacer></v-spacer>

     
        <Drawer/>
        
    </v-app-bar>
    <v-main style="background: rgb(242, 243, 248);">
      <router-view/>
    </v-main>
<Footer/>
  </v-app>
  </div>
</template>

<script>
import Drawer from './components/Drawer.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
components:{
Drawer,
Footer
},
  data: () => ({
      drawer: true,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
