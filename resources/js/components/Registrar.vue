<template>
    <section id="publicateEscort" class="contacts-section top_mask_add ds overflow-visible background-contact s-pt-70 s-pb-60 s-pt-md-95 s-pb-md-80 s-pt-xl-170 s-pb-xl-140 c-gutter-30">
        <div class="container" >
            <div class="row">
                <div class="col-lg-5 col-xl-4 animate" data-animation="scaleAppear">
                    <h2 class="mt-0 mb-40 contact-title text-uppercase">PUBLICATE EN</h2>
                    <span class="color-main fs-24 font-main text-uppercase">CLUBVIP.CL</span>
                    
                </div>
                <div class="fw-divider-space hidden-above-lg mt-20"></div>
                <div class="col-lg-7 col-xl-8 animate" data-animation="scaleAppear">  
                    <div class="row">
                        <ValidationObserver v-slot="{ valid }">              
                            <div class="col-sm-6">
                                <ValidationProvider name="nombre de usuario" rules="required" v-slot="{ errors }" :bails="false" >
                                    <div class="form-group">
                                        <input type="text" name="usuario" class="form-control" placeholder="Usuario">
                                        <b-alert variant="danger" :show="errors.length > 0">
                                            <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                        </b-alert>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="col-sm-6">
                                <ValidationProvider name="contraseña" rules="required" v-slot="{ errors }" :bails="false" >
                                    <div class="form-group">
                                        <input type="password" name="contraseña" class="form-control" placeholder="Contraseña">
                                        <b-alert variant="danger" :show="errors.length > 0">
                                            <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                        </b-alert>
                                    </div>
                                </ValidationProvider>
                            </div>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                usuario: '',
                clave: '',
                sexo: 0
            }
        },    
        methods:{
            limpiarDatos(){
                //this.$validator.reset();
                this.usuario = '';
                this.clave = '';
                this.sexo = 0;
            },
            registro(){
                this.$validator.validateAll('registro_usuario').then(valido => {
                    if (valido) {
                        let me = this;
                        me.errors.clear();
                        axios.post('/register',{
                            'usuario': me.usuario,
                            'clave': me.clave,
                            'sexo': me.sexo,
                            'tipo_usuario': 2
                        }).then(function (response) {
                            window.location.href = "/home";
                        }).catch(function (error) {
                            console.log(error);
                            if (error.response.status === 422){
                                me.errors.add({
                                    field: 'registro',
                                    msg: 'El usuario ya esta en uso, intenta con otro por favor.'
                                })
                            } else {
                                console.error(error);
                            }                      
                        });
                    }
                })
            },
        }
    }
</script>
