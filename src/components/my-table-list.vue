<template>

    <div id= 'mi-table-list' >
        
        <table class="table">
            <thead >
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                </tr>
            </thead>
            <tbody>
                <tr scope="row" v-for="objj in obj" :key="objj.id" class="tr"
                @click="showModal(objj)">
                <!--v-on:click="selected(objj)"-->

                    <td> {{ objj.name }}</td>
                    <td> {{ objj.last }}</td>
                    <td> {{ objj.email }}</td>
                </tr>
                
            </tbody>
        </table>

            <MyTableEdit :isVisible="isModalVisible" @update:isVisible="isModalVisible = $event" 
            :objSelect="objSelect"  @handleSubmit="updateObjSelect" ></MyTableEdit>
            <!--MyTableEdit :objSelect="objSelect" update:objSelect="updateObjSelect" ></MyTableEdit-->
        
    </div>
</template>

<script>

    import MyTableEdit from './my-table-edit.vue'
    export default{
        
        name: 'MyTableList',
        components: {
            MyTableEdit
        },
        data(){
            
            return{

                obj: [

                    {
                        id: 1,
                        name : 'Juan',
                        last: 'Perez',
                        email: 'juan@correo.com'
                    },
                    {
                        id: 2,
                        name : 'Marcos',
                        last: 'Hernandez',
                        email: 'marcos@correo.com'
                    },
                    {
                        id: 2,
                        name : 'Leidy',
                        last: 'Acosta',
                        email: 'acosta@correo.com'
                    },
                    {
                        id: 2,
                        name : 'Saida',
                        last: 'Taju',
                        email: 'saida@correo.com'
                    }
                ],
                idSelected: 0,
                isModalVisible: false,
                objSelect:{}
            }
             
        },

        methods:{
            showModal(event) {
                this.isModalVisible = true;  // Mostrar el modal
                this.objSelect= event;
                this.idSelected = event.id
                console.log('event', this.objSelect);
            },
           /* selected(event){
                this.select = true;
                console.log('event', event);
                this.objSelect= event;
                
            },*/
            updateObjSelect(newValue) {
                console.log('updateObjSelect', newValue)
                this.objSelect = newValue;  // Actualiza el objeto en el padre
                this.obj[this.idSelected-1]= newValue
            }
        }
    }
</script>

<style>
#mi-table-list{
    margin: 5%;
    border: 3px solid #8080803d;
    padding: 2%;
    border-radius: 12px;
}
.tr:hover {
  background-color: #0056b3; /* Cambia el color al pasar el mouse */
  cursor: pointer; /* Cambia el cursor a manito */
}


</style>