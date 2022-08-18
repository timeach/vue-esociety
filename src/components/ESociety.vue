<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This test is to build a front end for the E Society's member registry.<br>

      The E Society is a group that only allows members with an E in their name.
     
    </p>
    <h3>1. Show a list of the current members<br>
        2. Allow new members to be added<br>
        3. Allow members to be deleted<br>
        4. Validate that users being added have an 'e' or 'E' in their name.</h3>
    
    <h3>Member List</h3>
    <ul v-for="people in list" :key="people.id"> 
      <li>{{people.id}} {{people.name}} <button @click= "delNameOnList(people.id)">Delete</button></li>
    </ul>

    <h3>Add New Member</h3>
      <input placeholder="Please input name here"
        :value="inputName.name"
        @input="handleInputNameChange"
      />
      <button @click= "() => addNameToList(inputName.name)">Submit</button>

    <h3>Delete Member</h3>
      <input placeholder="Input member ID"
        :value="delName"
        @input="handleDelNameChange"
      />
      <button @click= "() => delNameOnList(delName)">Submit</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import axios from 'axios';

    const useGetListEffect = () => {  
      const list = ref([]);
      const getList = async () => {
      const  peopleList  = await axios.get("https://localhost:7073/People");
      list.value = peopleList.data
      }
      return { list, getList }
    }

export default {
  name: 'ESociety',
  props: {
    msg: String,
  },
  setup() {   

    const { list, getList } = useGetListEffect();

    getList()

    const inputName = reactive({});
    const handleInputNameChange = (e) => {
         inputName.name = e.target.value
        }

    const addNameToList = async (name1) => {
      if(name1.indexOf("e") != -1 || name1.indexOf("E") != -1){
        const { data } = await axios.post(
          'https://localhost:7073/People',
          {
            name: name1
          });
          getList()
          return data;
      } 
      else {
        alert("name must contain an e or E")}
     }

    const delName = ref('')

    const handleDelNameChange = (e) => {
         delName.value = e.target.value
        }
    const delNameOnList = async (id1) => {
      const { data } = await axios.delete(`https://localhost:7073/People?id=${id1}`,);
      getList()
      return data
    }

    return { 
       inputName, list, handleInputNameChange,
       addNameToList,  delName, handleDelNameChange, delNameOnList }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px 10px;
}
input {
  margin: 10px 10px;
}
</style>
