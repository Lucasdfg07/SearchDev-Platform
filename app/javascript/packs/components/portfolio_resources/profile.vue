<template>
  <div class="bloco-perfil row">
    <form class="profile col s12">
      <div class="col m10 offset-m1 s12 center">
        <img :src="profile.photo_url" @click="openImageSelect()" class="responsive-img" >
        <input type="file" class="hide" id="profile-photo" ref="photoInput" @change="submit()" />
      </div>
      <div class="input-field col s12">
        <input placeholder="Título" id="profile-title" v-model="profile.title" @change="submit()" class="font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Título</label>
      </div>
      <div class="input-field col s12">
        <input placeholder="Nome" id="profile-name" v-model="profile.name" @change="submit()" class="font_20 custom-grey-text text-darken-1">
        <label class="active font_20 custom-grey-text text-darken-1">Nome</label>
      </div>
    </form>
  </div>
</template>
 
 
<script>
 
export default {
 
  props: ['portfolioId'],
 
  data() {
    return {
      profile: { photo_url: "" },
      photoToUpload: ""
    }
  },
 
 
  created(){
    this.$resource('/portfolios{/portfolioId}/profiles').get({ portfolioId: this.portfolioId })
        .then(response => { this.profile = response.body.profile },
              response => { M.toast({ html: "Ocorreu um erro ao tentar carregar o Perfil", classes: "red" })
        })
  },
 
 
  methods: {
    openImageSelect(){
      this.$refs.photoInput.click();
    },
 
    submit(){
      let formData;
      if(this.$refs.photoInput.files.length > 0) {
        formData = new FormData();
        formData.append('photo', this.$refs.photoInput.files[0]);
        formData.append('title', this.profile.title);
        formData.append('name', this.profile.name);
      }
 
      this.$http.patch(`/portfolios/${this.portfolioId}/profiles/${this.profile.id}`, formData || this.profile)
          .then(response => {
            this.profile = response.body.profile
            this.$refs.photoInput.value = ""
          }, response => {
            response.body.errors.forEach(error => { M.toast({ html: error, classes: "red" }) })
          })
    }
  }
}
 
</script>