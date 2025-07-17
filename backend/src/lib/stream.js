import {StreamChat} from "stream-chat";

import "dotenv/config"


const apikey=process.env.STEAM_API_KEY
const apiSecret = process.env.STEAM_API_SECRET


if ( !apikey || !apiSecret){
    console.error("Stream APi key or secret is miisng");
}

const streamClients = StreamChat.getInstance(apikey,apiSecret);

export const upsertStreamUser = async ( userData) => {
    try{
        await streamClients.upsertUsers([userData]);
        return userData

    }catch(error){
        console.error("Error Upserting streamUser")
    }
}

export const generateStreamToken = (userId) => {

    try {
        const userIdStr = userId.toString();
        return streamClients.createToken(userIdStr);

    } catch (error) {
        console.error("Error generating Stream Token: ", error)
        
    }
}; 