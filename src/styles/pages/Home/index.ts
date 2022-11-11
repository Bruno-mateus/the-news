import { styled } from "@stitches/react";

export const CardNews = styled("div",{
    header:{
        width:'100%',
        backgroundColor:'#06aa48',
        display:'flex',
        color:'White',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
  

    },
    h1:{
        fontSize:'1.2rem'
    },
    img:{
        objectFit:'cover',
        width:'100%',
        height:'100%'
    },
  

   
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    p:{
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    borderRadius:'18px',
    boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)',


}) 

export const CardList = styled("main",{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gap:'1rem',
    a:{
        textDecoration:'none'
    },
}) 