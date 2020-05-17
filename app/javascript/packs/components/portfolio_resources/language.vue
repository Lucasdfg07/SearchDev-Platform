<template>
  <div class="bloco-linguagem">
    <h4 class="block-title grey">Linguagens</h4>
    <div class="row">
      <div class="input-field col l5 m5 s12">
        <input placeholder="Título" id="language-title" v-model="language.title" class="font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Título</label>
      </div>
      <div class="input-field col l4 m4 s6">
        <input placeholder="Percent" id="language-percent" v-model="language.percent" class="font_20 custom-grey-text text-darken-1" type="number" min="0" max="100">
        <label class="active font_20 custom-grey-text text-darken-1">Porcentagem</label>
      </div>
      <div class="input-field col l3 m3 s6">
        <button type="button" class="btn" id="add-language" @click="submit()">Adicionar</button>
      </div>
    </div>
 
    <div v-for="language in languages" class="row resource-list" :key="language.title">
      <div class="col l12 m12 s12">
        <div class="row resource-item resource-language">
          <div class="col l5 m5 s5">{{ language.title }}</div>
          <div class="col l1 m1 s1 center">/</div>
          <div class="col l5 m5 s5">{{ language.percent }}%</div>
          <div class="col l1 m1 s1">
            <a class="fa fa-times grey-text remove-language" @click="removeLanguage(language)"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 
<script>
 
export default {
  props: ['portfolioId'],
 
  data() {
    return {
      language: { },
      languages: []
    }
  },
 
 
  created(){
    this.$resource('/portfolios{/id}/languages').get({ id: this.portfolioId })
        .then(response => {
          this.languages = response.body.resource
        }, response => {
          M.toast({ html: "Ocorreu um erro ao carregar as Linguagens", classes: "red" })
        })
  },
 
 
  methods: {
    submit() {
      this.$resource('/portfolios{/id}/languages').save({ id: this.portfolioId }, { language: this.language })
          .then(response => {
            this.languages.push(response.body.resource)
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    },
 
    removeLanguage(language){
      this.$resource('/portfolios{/portfolioId}/languages{/id}').remove({ portfolioId: this.portfolioId, id: language.id })
          .then(response => {
            let indexToRemove = this.languages.indexOf(language)
            this.languages.splice(indexToRemove, 1)
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    }
  }
}
 
</script>