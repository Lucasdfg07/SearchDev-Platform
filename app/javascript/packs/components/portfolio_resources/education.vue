<template>
  <div class="bloco-educação">
    <h4 class="block-title grey">Educação</h4>
    <div class="row">
      <div class="input-field col l6 m6 s12">
        <input placeholder="Título do curso" id="education-title" v-model="education.title" class="font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Título do curso</label>
      </div>
      <div class="input-field col l6 m6 s12">
        <input placeholder="Instituição" id="education-institution" v-model="education.institution" class="font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Instituição</label>
      </div>
      <div class="input-field col l12 m12 s12">
        <textarea id="education-description" v-model="education.description" class="font_20 custom-grey-text text-darken-1 materialize-textarea">
        </textarea>
        <label class="active font_20 custom-grey-text text-darken-1">Descrição</label>
      </div>
      <div class="input-field col l4 m4 s6">
        <input data-attribute="start_date" v-model="education.start_date" placeholder="Data de Entrada" id="education-start-date"
              class="datepicker font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Data de Entrada</label>
      </div>
      <div class="input-field col l4 m4 s6">
        <input data-attribute="end_date" v-model="education.end_date" placeholder="Data de Saída" id="education-end-date"
               class="datepicker font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Data de Saída</label>
      </div>
      <div class="input-field col l4 m4 s6">
        <button type="button" class="btn" id="add-education" @click="submit()">Adicionar</button>
      </div>
    </div>
 
    <div v-for="education in educations" class="row resource-list" :key="education.title">
      <div class="col l12 m12 s12">
        <div class="row resource-item resource-education">
          <div class="col l5 m5 s5">{{ education.title }}</div>
          <div class="col l1 m1 s1 center">/</div>
          <div class="col l5 m5 s5">{{ education.institution }}</div>
          <div class="col l1 m1 s1">
            <a class="fa fa-times grey-text remove-education" @click="removeEducation(education)"></a>
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
      education: { },
      educations: []
    }
  },
 
 
  created(){
    this.$resource('/portfolios{/id}/educations').get({ id: this.portfolioId })
        .then(response => {
          this.educations = response.body.resource
        }, response => {
          M.toast({ html: "Ocorreu um erro ao carregar as Educações", classes: "red" })
        })
  },
 
 
  mounted() {
    let elems = document.querySelectorAll('.datepicker')
    let vue = this
    M.Datepicker.init(elems, {
      format: "dd/mm/yyyy",
      onClose: function() {
        console.log(this)
        let attribute = this.el.dataset.attribute
        vue.education[attribute] = this.el.value
       }
    });
  },
 
  methods: {
    submit() {
      this.$resource('/portfolios{/id}/educations').save({ id: this.portfolioId }, { education: this.education })
          .then(response => {
            this.educations.push(response.body.resource)
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    },
 
    removeEducation(education){
      this.$resource('/portfolios{/portfolioId}/educations{/id}').remove({ portfolioId: this.portfolioId, id: education.id })
          .then(response => {
            let indexToRemove = this.educations.indexOf(education)
            this.educations.splice(indexToRemove, 1)
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    }
  }
}
 
</script>