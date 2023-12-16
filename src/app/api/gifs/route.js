
import axios from 'axios';
import { NextRequest,NextResponse } from 'next/server';

const BASE_URL = "https://api.giphy.com/v1/gifs/search"
export async function POST(request){
    try {
       
        const reqBody = await request.json();
        const {searchKeyword} = reqBody;

        const apiKey = process.env.NEXT_PRIVATE_GIPHY_API_KEY;
        const data =await axios.get(BASE_URL,{params:{
            q:searchKeyword,
            api_key:apiKey,
        }}).then(res=>res.data).catch((error)=>console.log(error))
        
        return NextResponse.json({message:'Success',data:data.data},{status:200});
    } catch (error) {
        
        return NextResponse.json({error:error.message},{status:500});
    }
}