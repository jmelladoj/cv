<template>
    <div class="page-wrapper">
        <b-container fluid>
            <b-row class="page-titles">
                <b-col cols="5" class="align-self-center"><h4 class="text-themecolor">Vídeos</h4></b-col>
                <b-col cols="7">
                    <div class="d-flex justify-content-end align-items-center">
                        <ol class="breadcrumb">
                            <b-link class="breadcrumb-item">Inicio</b-link>
                            <b-link class="breadcrumb-item">Vídeos</b-link>
                        </ol>
                        <b-button @click="abrirModalVideo(1)" class="btn btn-info d-lg-block m-l-15" v-b-tooltip.hover title="Agrega un vídeo a la página de inicio"><i class="fa fa-plus-circle"></i> Agregar Vídeo</b-button>
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
                <b-modal size="md" ref="modal_video" :title="modal_video.titulo" no-close-on-backdrop>
                    <b-form>   
                        <ValidationProvider name="Título del vídeo" rules="required|alpha_spaces" v-slot="{ errors }" :bails="false" >
                            <b-form-group label="Título">
                                <b-form-input type="text" v-model="video.titulo"></b-form-input>
                                <b-alert variant="danger" :show="errors.length > 0">
                                    <label for="" v-for="(error, index) in errors" :key="index" v-text="'* ' + error"></label>
                                </b-alert>
                            </b-form-group>
                        </ValidationProvider>

                        <b-form-group label="Vídeo">
                            <b-form-file id="video" name="video" accept="video/*" placeholder="Ningún archivo elegido"></b-form-file>
                        </b-form-group>
                    </b-form>

                    <template slot="modal-footer">
                        <b-button :disabled="!valid" v-show="modal_video.accion == 1" size="md" variant="success" @click="subirVideo()"> Guardar </b-button>
                        <b-button v-show="modal_video.accion == 2" size="md" variant="warning" @click="subirVideo()"> Actualizar </b-button>
                        <b-button size="md" variant="danger" @click="cerrarModalVideo()"> Cerrar </b-button>
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
                video: {
                    id: 0,
                    titulo: '',
                    video: null
                },
                modal_video: {
                    titulo: '',
                    accion: 0
                },
                items: items,
                fields: [
                    { key: 'index', label: '#', sortable: true, sortDirection: 'desc', class: 'text-center' },
                    { key: 'titulo', label: 'TÍTULO', sortable: true, class: 'text-left' },
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
            listarVideos (){
                let me=this;
                axios.get('/videos/1').then(function (response) {
                    me.items = response.data.videos;
                    me.totalRows = me.items.length;
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
            },
            cerrarModalVideo(){
                this.$refs['modal_video'].hide();
            },
            abrirModalVideo(accion, data = []){
                let me = this;
                this.limpiarDatosVideo();

                if(accion == 1){
                    me.modal_video.titulo = "Agregar Vídeo";
                    me.modal_video.accion = 1;
                } else if(accion == 2){
                    me.modal_video.titulo = "Modificar Editar";
                    me.modal_video.accion = 2;

                    me.video.id = data['id'];
                    me.video.titulo = data['titulo'];
                }

                this.$refs['modal_video'].show();
            },
            limpiarDatosVideo(){
                this.video.id = 0;
                this.video.titulo = '';
                this.video.video = null;

                this.modal_video.titulo = "";
                this.modal_video.accion = 0;
            },
            subirVideo(){
                let me = this;

                let formData = new FormData();

                let video = document.querySelector('#video');
                formData.append('video', video.files[0]);

                formData.append('titulo', this.video.titulo);
                
                axios.post('/video/crear/pagina', formData).then(function (response) {
                    me.mensaje('success', 'Registro agregado exitosamente');
                    me.listarVideos();
                    me.cerrarModalVideo();
                }).catch(function (error) {
                    console.error(error);
                });
            },
            borrar(id){
                Swal.fire({
                    title: '¿Esta seguro de eliminar este vídeo?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Aceptar!',
                    cancelButtonText: 'Cancelar',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                }).then((result) => {
                    if (result.value) {
                        let me = this;

                        axios.post('/video/borrar',{
                            'id': id
                        }).then(function (response) {
                            me.listarVideos();
                            me.mensaje('success', 'El video ha sido borrado');
                        }).catch(function (error) {
                            console.log(error);
                        });
                    } else if (result.dismiss === swal.DismissReason.cancel) {}
                })
            }
        },
        mounted() {
            this.listarVideos();
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