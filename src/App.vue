<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
     
      <ul>
        <li class="menu-link">Test</li><hr>
        <li class="menu-link">Test</li><hr>
        <li class="menu-link">Test</li><hr>
        <li class="menu-link">Test</li><hr>
        <li class="menu-link">Test</li><hr>
      </ul>
          
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
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
