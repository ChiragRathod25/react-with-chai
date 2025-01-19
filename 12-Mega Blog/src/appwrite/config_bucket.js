import config from "../conf/config";
import { Client,Storage,ID } from "appwrite";
export class BucketServices{
    client=new Client()
    bucket
    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.bucket=new Storage(this.client)
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("Appwrite Bucket serive :: uploadFile :: error", error);
            return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appwriteCollectionId,fileId)
            return true
        } catch (error) {
            console.log("Appwrite Bucket serive :: deleteFile :: error", error);
            return false
        }
    }
    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(config.appwriteBucketId,fileId)
        } catch (error) {
            console.log("Appwrite getFilePreview serive :: deleteFile :: error", error);
            return false
        }
    }
}

const bucketService=new BucketServices()

export default bucketService