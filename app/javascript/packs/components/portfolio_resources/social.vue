<template>
  <div class="bloco-linguagem">
    <h4 class="block-title grey">Redes Sociais</h4>
    <div class="row">
      <div class="input-field col xl12 l12 m12 s12">
        <select v-model="social.kind" class="browser-default" id="select-social-kind">
          <option value="">Escolha um item</option>
          <option v-for="(value, key) in socialKinds" :value="key" :key="key">{{ value }}</option>
        </select>
      </div>
      <div class="input-field col l12 m12 s12">
        <input placeholder="URL" id="social-url" v-model="social.url" class="font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">URL</label>
      </div>
      <div class="input-field col l12 m12 s12">
        <button type="button" class="btn right" id="add-social" @click="submit()">Adicionar</button>
      </div>
    </div>
 
    <div v-for="social in socials" class="row resource-list" :key="social.id">
      <div class="col l12 m12 s12">
        <div class="row resource-item resource-social">
          <div class="col l10 m10 s10 valign-wrapper">
            <img :src="`/assets/socials/${social.kind}.png`" width="12%" />
            <a :href="social.url" target="_blank">{{ relativePath(social.url) }}</a>
          </div>
          <div class="col l1 m1 s1">
            <a class="fa fa-times grey-text remove-social" @click="removeSocial(social)"></a>
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
      social: { },
      socials: [],
      socialKinds: {
      	facebook: "Facebook",
        twitter: "Twitter",
        linkedin: "LinkedIn",
        github: "Github",
        instagram: "Instagram"
      }
    }
  },
 
 
  created(){
    this.$resource('/portfolios{/id}/socials').get({ id: this.portfolioId })
        .then(response => {
          this.socials = response.body.resource
        }, response => {
          M.toast({ html: "Ocorreu um erro ao carregar as Redes Sociais", classes: "red" })
        })
  },
 
 
  methods: {
    relativePath(url) {
      let url_obj = new URL(url);
      return url_obj.pathname
    },
 
    submit() {
      this.$resource('/portfolios{/id}/socials').save({ id: this.portfolioId }, { social: this.social })
          .then(response => {
            this.socials.push(response.body.resource)
            this.social = {}
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    },
 
    removeSocial(social){
      this.$resource('/portfolios{/portfolioId}/socials{/id}').remove({ portfolioId: this.portfolioId, id: social.id })
          .then(response => {
            let indexToRemove = this.socials.indexOf(social)
            this.socials.splice(indexToRemove, 1)
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    }
  }
}
 
</script>