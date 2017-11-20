<template>
  <div class="container">
    <div class="container">
        <div id="what" class="page-header col-lg-12 col-md-12 col-sm-12 ">
            <h3>Foundation <small> by process. </small></h3>
            <p>Foundation is the key to any good website or application build.</p>
        </div>
        <img class="col-lg-3 col-md-3 col-sm-4 col-xs-6" id="foundation" src="static/foundation.png" alt="foundation">
        <p>There are three main areas of concern on any technical build; strategic planning, functional goals and aesthetics. Within these areas there are base level requirements, and in many cases depend on each other. The traditional approach is to: agree objectives, determine the requirements, assess the data, provide a frame of reference (wireframes), design core-templates, develop a staged environment, test and push to live.</p>
        <p>This is a base level example of a project laid out in a waterfall methodology. It has its advantages and disadvantages. With this type of thinking/ model, we run the risk of giving too much effort where it is not needed. Deliverable's can sit with other departments for some time before they hit studio, leaving an ever increasing pressure on development teams towards the latter end of the project.</p>
    </div>
    
    <div class="col-lg-4 col-md-4 col-sm-12">
      <v-card class="cards">
        <v-card-media src="/static/process-management.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Process</h3>
            <div>Establish effective milestones</div>
          </div>
        </v-card-title>
        <v-card-actions>
         <router-link to="/process"> <v-btn flat color="grey">View</v-btn></router-link>
        </v-card-actions>
      </v-card>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12">
      <v-card class="cards">
        <v-card-media src="/static/wireframe.jpeg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Solution Design</h3>
            <div>Solve the problem, then write the code</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="grey">View</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
     <v-card class="cards">
        <v-card-media src="/static/code.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Execution</h3>
            <div>Delivering the solution</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="grey">View</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Foundation',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

test  {
  width: 100%;
}

.cards {
  margin-bottom: 20px;
}

</style>
