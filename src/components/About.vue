<template>
  <div class="container">
    <div class="container">
        <div id="what" class="page-header col-lg-12 col-md-12 col-sm-12 ">
            <h3>Scott Davies <small> Senior Technical Project Manager </small></h3>
        </div>
        <img class="col-lg-3 col-md-3 col-sm-3 col-xs-6" id="foundation" src="static/scott_photo.jpg" alt="foundation"></img>
        <p>I have a keen interest in brand psychology and take a strategic approach to problem solving. I have experience working on major global accounts such as P&G, Daimler, Virgin and RBS.
          Having worked the majority of my career in Digital communications management, I have honed and fine tuned my knowledge of UX best practice. I have experience working with the agile and waterfall methodologies across small to medium builds. I have also worked with various industry standard project management tools, building a technical understanding of the following languages and platforms.</p>
        <ul>
          <li><strong>Tools:</strong> Jira, Basecamp, Office, SmartSheets, Omnigraffle, MS Project/ Omniplan </li>
          <li><strong>Frameworks:</strong> Laravel, Vue, Angular, Rails </li>
       </ul>
       <v-btn color="primary">Curriculum Vitae</v-btn>
       <div id="core" class="col-lg-12 col=md-12 col-sm-12 col-xs-12">
        <ul>
          <li><strong>Core competencies:</strong></li><br>
          <li>- Writing of proposals and pitch documentation</li><br>
          <li>- Writing of scope of works documentation</li><br>
          <li>- Writing technical and functional specification</li><br>
          <li>- Day-to-day documentation of projects from initial brief to production</li><br>
          <li>- Briefing creative teams on campaign/ platform objectives in a clear concise manner</li>
        </ul>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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

.icon {
  width: 50px;
}
.CV {
  padding-top: 25px;
}
#core {
  padding-top: 20px;
}
</style>
