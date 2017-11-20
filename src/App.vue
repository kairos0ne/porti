<template>
  <v-app light>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher app>
      <ul>
        <router-link to="/"><li class="menu-link">Foundation</li><hr></router-link>
        
          <router-link to="/process"><li class="menu-link">Process</li><hr></router-link>
          
        
          <li class="menu-link">Work</li><hr>
          <router-link to="/about"><li class="menu-link">About</li><hr></router-link>

        <router-link to="/cv"><li class="menu-link">Curriculum Vitae</li><hr></router-link>
      </ul>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <img src="/static/base_logo.svg" alt="">
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-content>
    </main>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; Base 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'home',
          title: 'Foundation',
          url: '/'
        }, {
          icon: 'settings',
          title: 'Process',
          url: '/process'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'

.container  
  max-width 1094px

.menu-link 
  list-style none
  font-size 15px

.menu-link:first-child
  padding-top 15px

hr 
  padding 0px

</style>
