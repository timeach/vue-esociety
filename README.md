# frontendtest for Aeroqual, developed by Vue3.2.13

  This test is to build a front end for the E Society's member registry.

  The E Society is a group that only allows members with an e or E in their name.

    1. Show a list of the current members
    2. Allow new members to be added
    3. Allow members to be deleted
    4. Validate that users being added have an 'e' or 'E' in their name.

The test is suppose to load data from backend with .net 6 API, but I am found the backend project has CORS problem, so the first version I using my own data, not from the backend, in the category frontend-datafromMock . Difficulty include how to bind input value to event at click submit button, this time I get inspired by TodoList develped in Composition API, which use ref and reactive from 'vue'

The data structure is like this:
```
  { "id":"01", "name": "Kate"},
  { "id":"02", "name": "Ellen"}
```
The second version is fully works with the API from backend Project, this time I face difficulty I could render the member list on the main page, I found it is the problem of definition of list, first I made it:
```
const list = reactive([])  
```
which is the same with the first version, but I found I could not load it from the backend project, although I can get data from backend by axios.get , but hard to put data with this list, it takes a little longer to found out the problem, and change it to this:
```
const list = ref([])
```
so that I can put data with list.value, and found I should return list in the right position, not in the getList founction.
```
const useGetListEffect = () => {  
  const list = ref([]);
  const getList = async () => {
  const  peopleList  = await axios.get("https://localhost:7073/People");
  list.value = peopleList.data
  }
  return { list, getList }
}
```
And I also found when I add member or del member to the backend, although it was done by backend, the member list do not refresh on the display page as React did, it seems like it does not have a state management, maybe I should try it with Vuex. So each action I should add a getList() to fix this problem.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
