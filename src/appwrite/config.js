import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.endpoint)
        .setProject(conf.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new this.Storage(this.client);
    }
    
async createPost({title, slug, content, featuredImage, status, userId}){

        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId,

            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }

async updatePost(slug, {title, content, featuredImage, status, userId}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,

        )
    } catch (error) {
        
    }
}

    }

const service = new Service;
export default Service;