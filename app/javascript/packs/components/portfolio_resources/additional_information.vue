<template>
  <div class="bloco-informações-adicionais">
    <h4 class="block-title grey">Informações Adicinais</h4>
    <div class="input-field col l12 m12 s12">
      <input placeholder="Título" id="additional-information-title" v-model="additional_information.title" @change="submit()"
             class="font_20 custom-grey-text text-darken-1">
      <label class="active font_20 custom-grey-text text-darken-1">Título</label>
    </div>
    <div class="row">
    	<div class="input-field col l12 m12 s12">
        <vue-ckeditor v-model="additional_information.description" :config="config" @blur="submit()" />
      </div>
    </div>
  </div>
</template>
 
 
<script>
 
import VueCkeditor from 'vue-ckeditor2';
 
export default {
 
  components: { VueCkeditor },
 
  props: ['portfolioId', 'blockId'],
 
  data() {
    return {
      additional_information: { },
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
    this.$resource('/portfolios{/portfolioId}/blocks{/blockId}/additional_informations').get({ portfolioId: this.portfolioId, blockId: this.blockId })
        .then(response => { this.additional_information = response.body.resource },
              response => { M.toast({ html: "Ocorreu um erro ao tentar carregar Informações Adicionais", classes: "red" })
        })
  },
 
 
  methods: {
    submit(){
      this.$resource('/portfolios{/portfolioId}/blocks{/blockId}/additional_informations{/id}').update(
                    { portfolioId: this.portfolioId, blockId: this.blockId, id: this.additional_information.id },
                    { additional_information: this.additional_information })
          .then({}, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    }
  }
}
 
</script>