<template>

    <div id= 'mi-component' >
        <h2>My List </h2>
        <h3> {{ subtitle }}</h3>
        <MyTableList></MyTableList>
    </div>
</template>


<script>
    import MyTableList from './my-table-list.vue'
    export default{
        name: 'MyComponent',
        components: {
            MyTableList
        },
        data(){
            return{
                subtitle: ''
            }
        }
    }
</script>
<style>
    #mi-component{
        margin-top: 2%;
    }
</style>