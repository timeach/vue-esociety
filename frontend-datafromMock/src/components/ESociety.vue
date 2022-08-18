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
      <li>{{people.id}} {{people.name}} <button @click= "delNameOnList(people.name)">Delete</button></li>
    </ul>

    <h3>Add New Member</h3>
      <input placeholder="Please input name here"
        :value="inputName.name"
        @input="handleInputNameChange"
      />
      <button @click= "() => addNameToList(inputName.name)">Submit</button>

    <h3>Delete Member</h3>
      <input placeholder="Input member name"
        :value="delName"
        @input="handleDelNameChange"
      />
      <button @click= "() => delNameOnList(delName)">Submit</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'

//   async const { peopleList } = await axios.get("https://localhost:7073/");

export default {
  name: 'ESociety',
  props: {
    msg: String,
  },
  setup() {   
    const inputName = reactive({});
    const handleInputNameChange = (e) => {
         inputName.name = e.target.value
        }

    const list = reactive([
      {
       "id":"01",
       "name": "Kate"
      },
      {
       "id":"02",
       "name": "Ellen"
      }
      ])

    const addNameToList = (name) => {
      if(name.indexOf("e") != -1){
          list.push({name})
          console.log(list)
      } 
      else if(name.indexOf("E") != -1){
          list.push({name})
          console.log(list)
      } 
      else {
        alert("name must contain an e or E")}
    }

    const delName = ref('')

    const handleDelNameChange = (e) => {
         delName.value = e.target.value
        }
    const delNameOnList = (name1) => {
      console.log(name1)
      for (let i in list) {
        const person = list[i];
        // console.log(person.name)   
        if(person.name === name1 ){
          list.splice(i,1)
          console.log(list)
        }
      }
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
