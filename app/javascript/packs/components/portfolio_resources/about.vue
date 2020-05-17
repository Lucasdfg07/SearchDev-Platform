<template>
  <div class="bloco-sobre-mim">
    <h4 class="block-title grey">Sobre Mim</h4>
    <div class="row">
      <div class="input-field col l12 m12 s12">
        <vue-ckeditor v-model="about.description" :config="config" @blur="submit()" id="about_description" />
      </div>
    </div>
  </div>
</template>
 
 
<script>
 
import VueCkeditor from 'vue-ckeditor2';
 
export default {
 
  components: { VueCkeditor },
 
  props: ['portfolioId'],
 
  data() {
    return {
      about: { },
      config: {
        toolbar: [
          ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat',
           'Cut', 'Copy', 'Paste', 'Undo', 'Redo'],
        ],
        height: 150
      }
    }
  },
 
 
  created(){
    this.$resource('/portfolios{/portfolioId}/abouts').get({ portfolioId: this.portfolioId })
        .then(response => { this.about = response.body.resource },
              response => { M.toast({ html: "Ocorreu um erro ao tentar carregar informações do bloco Sobre Mim", classes: "red" })
        })
  },
 
 
  methods: {
    submit(){
      this.$resource('/portfolios{/portfolioId}/abouts{/id}').update({ portfolioId: this.portfolioId, id: this.about.id }, { about: this.about })
          .then({}, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    }
  }
}
 
</script>