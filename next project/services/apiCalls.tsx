import axios from "axios";
import {apiBaseURL} from "../config/apiConfig.json";

const GETBYIDURL = apiBaseURL + "items/blog?filter[id][_eq]=";
const GETALLBLOGSURL = apiBaseURL + "items/blog";
const UPDATEBLOGURL = apiBaseURL + "items/blog/";
const DELETEBLOGBYIDURL = apiBaseURL + "items/blog/";


export async function getAllBlogs (){
    return axios.get(GETALLBLOGSURL);
}

export async function GetBlogByID (id : any){
    return axios.get(GETBYIDURL + id);
}


export async function updateBlog (id : any,title : any){
    const body ={
      title:title == null ? null : title
    }

    return axios.patch(UPDATEBLOGURL+id,body);
}

export async function DeleteBlogById (id : any){
    return axios.get(DELETEBLOGBYIDURL + id);
}
