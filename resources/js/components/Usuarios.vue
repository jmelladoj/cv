<template>
    <div class="page-wrapper">
        <b-container fluid>
            <b-row class="page-titles">
                <b-col cols="5" class="align-self-center"><h4 class="text-themecolor">Usuarios</h4></b-col>
                <b-col cols="7">
                    <div class="d-flex justify-content-end align-items-center">
                        <ol class="breadcrumb">
                            <b-link class="breadcrumb-item">Inicio</b-link>
                            <b-link class="breadcrumb-item">Usuarios</b-link>
                        </ol>
                        <b-button @click="abrirModalUsuario(1)" class="btn btn-info d-lg-block m-l-15" v-b-tooltip.hover title="Agrega un usuario a la plataforma"><i class="fa fa-plus-circle"></i> Agregar Usuario</b-button>
                    </div>                    
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-card>
                        <b-form-group>
                            <b-container fluid>
                                <b-row>
                                    <b-col md="6" class="my-1">
                                        <b-form-group label-cols-sm="3" label="Filtrar" class="mb-0">
                                        <b-input-group>
                                            <b-form-input v-model="filter" placeholder="Escribe para buscar" />
                                            <b-input-group-append>
                                            <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6" class="my-1">
                                        <b-form-group label-cols-sm="3" label="Ordenar" class="mb-0">
                                        <b-input-group>
                                            <b-form-select v-model="sortBy" :options="sortOptions">
                                            <option slot="first" :value="null">-- nada --</option>
                                            </b-form-select>
                                            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                                            <option :value="false">Asc</option> <option :value="true">Desc</option>
                                            </b-form-select>
                                        </b-input-group>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6" class="my-1">
                                        <b-form-group label-cols-sm="3" label="Dirección" class="mb-0">
                                        <b-input-group>
                                            <b-form-select v-model="sortDirection" slot="append">
                                            <option value="asc">Asc</option> <option value="desc">Desc</option>
                                            <option value="last">Último</option>
                                            </b-form-select>
                                        </b-input-group>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6" class="my-1">
                                        <b-form-group label-cols-sm="3" label="Por página" class="mb-0">
                                        <b-form-select :options="pageOptions" v-model="perPage" />
                                        </b-form-group>
                                    </b-col>
                                </b-row>

                                <!-- Main table element -->
                                <b-table show-empty responsive striped borderless outlined small
                                    :items="items"
                                    :fields="fields"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter="filter"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    :sort-direction="sortDirection"
                                    @filtered="onFiltered"
                                >

                                <template slot="empty">
                                    <center><h5>No hay registros para mostrar.</h5></center>
                                </template>

                                <template slot="emptyfiltered">
                                    <center><h5>No hay registros que coincidan con su solicitud.</h5></center>
                                </template>

                                <template v-slot:cell(index)="data">
                                    {{ data.index + 1 }}
                                </template>

                                <template v-slot:cell(acciones)="data">
                                    <b-button size="xs" variant="warning" title="Actualizar modelo" @click="abrirModalUsuario(2, data.item)">
                                        <i class="fa fa-pencil"></i>
                                    </b-button>

                                    <b-button size="xs" variant="success" title="Administrar videos del usuario" @click="abrirModalVideos(data.item.id)">
                                        <i class="fa fa-play"></i>
                                    </b-button>

                                    <b-button size="xs" variant="success" title="Administrar publicaciones del usuario" @click="abrirModalAviso(data.item.id)">
                                        <i class="fa fa-list"></i>
                                    </b-button>

                                    <template v-if="data.item.agencia == 1">
                                        <b-button size="xs" variant="danger" title="Quitar de la agencia" @click="agregarQuitarAgencia(data.item.id, 1)">
                                            <i class="fa fa-star-o"></i>
                                        </b-button>
                                    </template>
                                    <template v-else>
                                        <b-button size="xs" variant="success" title="Añadir a la agencia" @click="agregarQuitarAgencia(data.item.id, 2)">
                                            <i class="fa fa-star"></i>
                                        </b-button>
                                    </template>

                                    <template v-if="data.item.visible == 1">
                                        <b-button size="xs" variant="danger" title="Ocultar modelo" @click="ocultarMostrarUsuario(data.item.id, 1)">
                                            <i class="fa fa-eye-slash"></i>
                                        </b-button>
                                    </template>
                                    <template v-else>
                                        <b-button size="xs" variant="success" title="Mostrar modelo" @click="ocultarMostrarUsuario(data.item.id, 2)">
                                            <i class="fa fa-eye"></i>
                                        </b-button>
                                    </template>

                                    <template>
                                        <b-button size="xs" variant="danger" title="Eliminar usuario" @click="borrar(data.item.id)">
                                            <i class="fa fa-trash"></i>
                                        </b-button>
                                    </template>
                                </template>

                                </b-table>

                                <b-row>
                                    <b-col md="6" class="my-1">
                                        <b-pagination
                                        :total-rows="totalRows"
                                        :per-page="perPage"
                                        v-model="currentPage"
                                        class="my-0"
                                        />
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
            
            <ValidationObserver v-slot="{ valid }">
                <b-modal size="lg" ref="modal_usuario" :title="modal_usuario.titulo" no-close-on-backdrop>
                    <b-form>
                        <b-form-group>
                            <b-row>                       
                                <b-col lg="4" md="4" sm="4">
                                    <h4 class="text-center">Foto de perfil (Obligatorio)</h4>
                                    <b-form-group>
                                        <b-img :src="usuario.perfil" fluid id="imagen_0" name="imagen_0"></b-img>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-file id="perfil" name="perfil" accept="image/*" placeholder="Sin archivo" @change="mostrarFoto($event, 0)"></b-form-file>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="8" md="8" sm="8">
                                    <h4 class="text-center">Datos</h4>
                                    <b-row>
                                        <b-col lg="6" md="6" sm="6">
                                            <ValidationProvider name="nombre de modelo" rules="required|alpha_spaces" v-slot="{ errors }" :bails="false" >
                                                <b-form-group label="Nombre">
                                                    <b-form-input type="text" v-model="usuario.nombre"></b-form-input>
                                                    <b-alert variant="danger" :show="errors.length > 0">
                                                        <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                                    </b-alert>
                                                </b-form-group>
                                            </ValidationProvider>
                                        </b-col>
                                        <b-col lg="6" md="6" sm="6">
                                            <ValidationProvider name="teléfono" rules="required|numeric|digits:9" v-slot="{ errors }" :bails="false" >
                                                <b-form-group label="Telefóno">
                                                    <b-form-input type="number" v-model="usuario.telefono"></b-form-input>
                                                    <b-alert variant="danger" :show="errors.length > 0">
                                                        <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                                    </b-alert>
                                                </b-form-group>
                                            </ValidationProvider>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col lg="6" md="6" sm="6">
                                            <ValidationProvider name="nombre de usuario" rules="required" v-slot="{ errors }" :bails="false" >
                                                <b-form-group label="Nombre de usuario">
                                                    <b-form-input type="text" v-model="usuario.usuario" :readonly="modal_usuario.accion == 2"></b-form-input>
                                                    <b-alert variant="danger" :show="errors.length > 0">
                                                        <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                                    </b-alert>
                                                </b-form-group>
                                            </ValidationProvider>
                                        </b-col>
                                        <b-col lg="6" md="6" sm="6">
                                            <ValidationProvider name="clave" :rules="modal_usuario.accion == 1 ? 'required' : ''" v-slot="{ errors }" :bails="false" >
                                                <b-form-group label="Clave">
                                                    <b-form-input type="password" v-model="usuario.clave"></b-form-input>
                                                    <b-alert variant="danger" :show="errors.length > 0">
                                                        <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                                    </b-alert>
                                                </b-form-group>
                                            </ValidationProvider>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col lg="6" md="6" sm="6">
                                            <ValidationProvider name="edad" rules="required|numeric|between:18,99" v-slot="{ errors }" :bails="false" >
                                                <b-form-group label="Edad">
                                                    <b-form-input type="number" v-model="usuario.edad"></b-form-input>
                                                    <b-alert variant="danger" :show="errors.length > 0">
                                                        <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                                    </b-alert>
                                                </b-form-group>
                                            </ValidationProvider>
                                        </b-col>
                                        <b-col lg="6" md="6" sm="6">
                                            <ValidationProvider name="nacionalidad" rules="required|alpha_spaces" v-slot="{ errors }" :bails="false" >
                                                <b-form-group label="Nacionalidad">
                                                    <b-form-input type="text" v-model="usuario.nacionalidad"></b-form-input>
                                                    <b-alert variant="danger" :show="errors.length > 0">
                                                        <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                                    </b-alert>
                                                </b-form-group>
                                            </ValidationProvider>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <br>
                            <b-row>
                                <b-col lg="3" md="3" sm="3">
                                    <ValidationProvider name="altura" rules="required|between:1,2" v-slot="{ errors }" :bails="false" >
                                        <b-form-group label="Altura(MT)">
                                            <b-form-input type="number" step="any" v-model="usuario.altura"></b-form-input>
                                            <b-alert variant="danger" :show="errors.length > 0">
                                                <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                            </b-alert>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col lg="3" md="3" sm="3">
                                    <ValidationProvider name="busto" rules="required|numeric|between:1,250" v-slot="{ errors }" :bails="false" >
                                        <b-form-group label="Busto(CM)">
                                            <b-form-input type="number" v-model="usuario.busto"></b-form-input>
                                            <b-alert variant="danger" :show="errors.length > 0">
                                                <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                            </b-alert>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col lg="3" md="3" sm="3">
                                    <ValidationProvider name="cintura" rules="required|numeric|between:1,250" v-slot="{ errors }" :bails="false" >
                                        <b-form-group label="Cintura(CM)">
                                            <b-form-input type="number" v-model="usuario.cintura"></b-form-input>
                                            <b-alert variant="danger" :show="errors.length > 0">
                                                <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                            </b-alert>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col lg="3" md="3" sm="3">
                                    <ValidationProvider name="caderas" rules="required|numeric|between:1,250" v-slot="{ errors }" :bails="false" >
                                        <b-form-group label="Caderas(CM)">
                                            <b-form-input type="number" v-model="usuario.caderas"></b-form-input>
                                            <b-alert variant="danger" :show="errors.length > 0">
                                                <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                            </b-alert>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="12" md="12" sm="12">
                                    <b-form-group label="Vídeo" label-for="video" label-cols-sm="2">
                                        <b-form-file id="video_perfil" name="video_perfil" accept="video/*" placeholder="Ningún archivo elegido"></b-form-file>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="12" md="12" sm="12">
                                    <ValidationProvider name="descripción" rules="required" v-slot="{ errors }" :bails="false" >
                                        <b-form-group label="Descripción">
                                            <b-form-textarea v-model="usuario.descripcion" rows="3" max-rows="6"></b-form-textarea>
                                            <b-alert variant="danger" :show="errors.length > 0">
                                                <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                            </b-alert>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <hr>
                            <b-row>
                                <b-col lg="12" md="12" sm="12">
                                    <h4 class="card-title text-center">Fotos de galería (12 como máximo)</h4>
                                </b-col> 
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="3" sm="3" v-for="(imagen, index) in usuario.imagenes" :key="index">
                                    <b-form-group v-if="usuario.imagenes[index]">
                                        <b-img :src="usuario.imagenes[index]" fluid :id="'imagen_' + (index + 1)" :name="'imagen_' + (index + 1)" class="alinear-fotos"></b-img>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-file :id="'img_' +  (index + 1)" :name="'img_' +  (index + 1)" accept="image/*" placeholder="Sin archivo" @change="mostrarFoto($event, (index + 1))"></b-form-file>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form-group>
                    </b-form>

                    <template slot="modal-footer">
                        <b-button :disabled="!valid" v-show="modal_usuario.accion == 1" size="md" variant="success" @click="crearOactualizar(1)"> Guardar </b-button>
                        <b-button v-show="modal_usuario.accion == 2" size="md" variant="warning" @click="crearOactualizar(2)"> Actualizar </b-button>
                        <b-button size="md" variant="danger" @click="cerrarModalUsuario()"> Cerrar </b-button>
                    </template>
                </b-modal>
            </ValidationObserver>

        </b-container>

    </div>
</template>

<script>
    const items = [];

    export default {
        data() {
            return {
                usuario: {
                    id: 0,
                    nombre: '',
                    telefono: null,
                    usuario: '',
                    clave: '',
                    edad: null,
                    nacionalidad: '',
                    altura: null,
                    busto: null,
                    cintura: null,
                    caderas: null,
                    descripcion: '',
                    perfil: null,
                    imagenes: [],
                    videos: [],
                    avisos: [],
                    video: null
                },
                modal_usuario: {
                    titulo: '',
                    accion: 0
                },
                items: items,
                fields: [
                    { key: 'index', label: '#', sortable: true, sortDirection: 'desc', class: 'text-center' },
                    { key: 'nombre', label: 'NOMBRE', sortable: true, class: 'text-left' },
                    { key: 'usuario', label: 'USUARIO', sortable: true, class: 'text-left' },
                    { key: 'acciones', label: 'ACCIONES', sortable: true, class: 'text-center' }
                ],
                currentPage: 1,
                perPage: 10,
                totalRows: 0,
                pageOptions: [10, 25, 50, 100],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
            }
        },    
        computed:{
            sortOptions() {
                return this.fields.filter(f => f.sortable).map(f => {
                    return { text: f.label, value: f.key }
                })
            }
        },
        methods:{
            onFiltered(filteredItems) {
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },
            mensaje(clase, mensaje) {
                Swal.fire({
                    type: clase,
                    title: mensaje,
                    showConfirmButton: true,
                    timer: 2000
                });
            },
            listarUsuarios (){
                let me=this;
                axios.get('/usuarios').then(function (response) {
                    me.items = response.data.usuarios;
                    me.totalRows = me.items.length;
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
            },
            cerrarModalUsuario(){
                this.$refs['modal_usuario'].hide();
            },
            abrirModalUsuario(accion, data = []){
                let me = this;
                this.limpiarDatosUsuario();

                if(accion == 1){
                    me.modal_usuario.titulo = "Agregar Usuario";
                    me.modal_usuario.accion = 1;

                    me.usuario.imagenes.push(null);
                } else if(accion == 2){
                    me.modal_usuario.titulo = "Modificar Editar";
                    me.modal_usuario.accion = 2;

                    me.usuario.id = data['id'];
                    me.usuario.nombre = data['nombre'];
                    me.usuario.telefono = data['telefono'];
                    me.usuario.usuario = data['usuario'];
                    me.usuario.edad = data['edad'];
                    me.usuario.nacionalidad = data['nacionalidad'];
                    me.usuario.altura = data['altura'];
                    me.usuario.busto = data['busto'];
                    me.usuario.cintura = data['cintura'];
                    me.usuario.caderas = data['caderas'];
                    me.usuario.descripcion = data['descripcion'];
                    me.usuario.perfil = 'storage/' + data['perfil_url'];
                }

                this.$refs['modal_usuario'].show();
            },
            limpiarDatosUsuario(){
                this.usuario.id = 0;
                this.usuario.nombre = '';
                this.usuario.telefono = null;
                this.usuario.usuario = '';
                this.usuario.clave = '';
                this.usuario.edad = null;
                this.usuario.nacionalidad = '';
                this.usuario.altura = null;
                this.usuario.busto = null;
                this.usuario.cintura = null;
                this.usuario.caderas = null;
                this.usuario.descripcion = '';
                this.usuario.perfil = null;
                this.usuario.imagenes = [];
                this.usuario.video = null;

                this.modal_usuario.titulo = "";
                this.modal_usuario.accion = 0;
            },
            mostrarFoto(e, index){
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#imagen_' + index).attr('src', e.target.result);
                }

                reader.readAsDataURL(e.target.files[0]);

                if(index == 0){
                    this.usuario.perfil = URL.createObjectURL(e.target.files[0]);
                } else {
                    if(this.usuario.imagenes.length < 12){
                        this.usuario.imagenes.push(null); 
                    } 

                    this.usuario.imagenes[index - 1] = URL.createObjectURL(e.target.files[0]);
                }
            },
            crearOactualizar(accion){
                let me = this;

                let formData = new FormData();
                var mensaje = me.modal_usuario.accion == 1 ? 'Registro agregado exitosamente' : 'Registro actualizado exitosamente';
                
                let f_perfil = document.querySelector('#perfil');
                formData.append('imagen_perfil', f_perfil.files[0]);
                
                let video = document.querySelector('#video_perfil');
                formData.append('video', video.files[0]);

                me.usuario.imagenes.forEach(function(item, index) {
                    let imagen = document.querySelector('#img_' + (index + 1));
                    formData.append('foto_' + (index + 1), imagen.files[0]);
                });

                formData.append('accion', this.modal_usuario.accion);
                formData.append('usuario_id', this.usuario.id);
                formData.append('nombre', this.usuario.nombre);
                formData.append('telefono', this.usuario.telefono);
                formData.append('usuario', this.usuario.usuario);
                formData.append('clave', this.usuario.clave);
                formData.append('edad', this.usuario.edad);
                formData.append('nacionalidad', this.usuario.nacionalidad);
                formData.append('altura', this.usuario.altura);
                formData.append('busto', this.usuario.busto);
                formData.append('cintura', this.usuario.cintura);
                formData.append('caderas', this.usuario.caderas);
                formData.append('descripcion', this.usuario.descripcion);
                formData.append('perfil', this.usuario.perfil);
                
                axios.post('/usuario/crear/actualizar', formData).then(function (response) {
                    me.mensaje('success', mensaje);
                    me.listarUsuarios();
                    me.cerrarModalUsuario();
                }).catch(function (error) {
                    if (error.response.status == 500 && accion == 1){
                        me.mensaje('error', 'El usuario ya esta en uso, intenta con otro.');
                    } else {
                        console.error(error);
                    }
                });
            }
        },
        mounted() {
            this.listarUsuarios();
            this.usuario.imagenes.push(null);
        }
    }
</script>

<style>    
    .page-titles .breadcrumb {
        padding-left: 30px;
    }

    span .form-group {
        margin-bottom: 10px;
    }

    .custom-file-input:lang(en) ~ .custom-file-label::after {
        content: 'Buscar';
    }

    .alinear-fotos{
        height: 200px;
        width: auto;
        object-fit: cover;
    }
</style>