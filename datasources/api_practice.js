import {RESTDataSource} from 'apollo-datasource-rest'

class practiceAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL='https://jsonplaceholder.typicode.com/'
    }

    async getAllUser(){
        return this.get('users')
    }
    async getPostById(id) {
        return this.get(`posts/${id}`);
      }
    
      async getAllPosts() {
        return this.get('posts');
      }
    
      async getUserById(id) {
        return this.get(`users/${id}`);
      }
}

export default practiceAPI;