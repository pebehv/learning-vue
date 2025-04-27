<template>
    <div id= 'mi-table-edit'  class="modal"  v-if="isVisible">
        <div class="modal-overlay" ></div>
        <div class="modal-content">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label >Name</label>
                    <input type="text" class="form-control" 
                    v-model="localObjSelect.name" >
                </div>
                <div class="form-group">
                    <label >Lastname</label>
                    <input type="text" class="form-control" 
                    v-model="localObjSelect.last" >
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    v-model="localObjSelect.email" >
                    
                </div>
                <button type="button" class="btn btn-success"
                @click="handleSubmit">Save</button>
                <button type="button" class="btn btn-danger" @click="closeModal">Close</button>
                
                <!--button type="submit" class="btn btn-primary" v-on:click="handleSubmit">Submit</button-->
            </form>
        <slot></slot>
        </div>
    </div>

</template>


<script>
    export default{
        name: 'MyTableEdit',
        
        props: { 
            objSelect: { 
                type: Object, 
                required: true, 
            }, 
            isVisible: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                subtitle: 'Texto en mi componente',
                localObjSelect: { ...this.objSelect } 
            }
        },
        watch: {
            objSelect: {
            handler(newVal) {
                this.localObjSelect = { ...newVal }; // Actualizar la copia local cuando cambie la prop
            },
            deep: true, // Para observar cambios en objetos anidados
            },
        },
        methods: {
            closeModal() {
              this.$emit('update:isVisible', false);  // Emitir evento para cerrar
            },
            handleSubmit() {
                // Aquí puedes manejar el envío del formulario
                console.log('handleSubmit', this.objSelect)
                this.$emit('handleSubmit', this.localObjSelect );
                //this.$emit('update:objSelect', { ...this.objSelect, value: this.localValue });
                //this.$emit('handleSubmit');
                this.closeModal();  
            }
        }
    }
</script>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>