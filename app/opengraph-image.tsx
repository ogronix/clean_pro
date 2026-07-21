import {
  ImageResponse
} from "next/og";


export const runtime =
  "edge";


export default function Image(){

  return new ImageResponse(

    (

      <div
        style={{
          width:"100%",
          height:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          background:"#2563EB",
          color:"white",
          fontSize:64,
          fontWeight:700
        }}
      >

        Gebäudereinigung Hamburg

      </div>

    ),

    {
      width:
        1200,

      height:
        630
    }

  );

}