import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../constants/dummyData";
import "../App.css"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
const SimpleSlider = () => {

    // const Arrow = ({ className, style, onClick }) => (
    //     <Button style={{ position : "relative" , top : "160px" ,  backgroundColor: 'lightgray' , color : "green"}} onClick={onClick} className={className}>
          
    //     </Button>
    //   );


    const settings = {

        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        // prevArrow: <Arrow />,
      
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <Box sx={{
            // backgroundColor : "black",
            position: "relative",
            // left: "40px",
            width: "85%",
            margin: "0 auto",
            marginTop: "30px",
            marginBottom: "90px",
            boxShadow: "30px 0 0px -4px #ff4350, -30px 0 0px -4px #ff4350"

            
            
        }}>
            <Slider {...settings} >
                {dataDigitalBestSeller.map((item) => (
                    <>
                        <Typography color = "black" variant="h1" sx={{
                            fontSize: "20px",
                            marginBottom: "10px",
                            marginLeft : "109px",
                            color : "black"

                        }}>{item.title}</Typography>
                        <Box sx={{   
                     
                            // width : "200px",
                            // height : "250px",
                            marginLeft : "80px" ,    
                            marginRight : "80px" ,    
                            //    boxShadow : "10",
                        border: "1px solid #fff",
                      
                        overflow: "hidden",
            
                        // height: "350px",
                        color: "#fff",
                        cursor: "pointer",  marginBottom : "20px" }}>
                            <img style={{ width : "100%" , borderRadius: "50%" }} src={"https://i.pinimg.com/originals/fb/fa/57/fbfa57522ae79e10a99e12915764efca.jpg"}
                            />
                        </Box>

                    
                        {/* <Box sx={{ margin: "10px 40px" }}>
                            <Typography variant="h3">{item.price}</Typography>
                            <span className="category">{item.category}</span>
                        </Box> */}
                    </>
                ))}
            </Slider>
        </Box>
    );
}
export default SimpleSlider
