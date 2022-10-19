import styledComponents from "styled-components";

//common styles

export const Home = styledComponents.section`
    background: #fafafa;
    max-width: 100%;

    .HomeMain {
        display: flex;
        gap: 40px;
    }

    @media screen and (max-width: 1100px ){
        .HomeMain {
            display: flex;
            flex-direction: column;
            gap: 40px;
            // transition: all 0.3s linear;
        }
    }
`;

export const Nav = styledComponents.section`
    max-width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    background-color: white;
    border-bottom: 1px solid lightgrey;
`;

//core styles

export const ItemBtn = styledComponents.a`
    color: black;
    background: transparent;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    font-size: 13px;
    max-width: 100%;

    span {
        padding: 0 0 0 10px;
    }

    &:hover {   
        color: grey;
    }
`;

export const Profile = styledComponents.div`
    display: flex;

    gap: 15px;
    min-width: 100%;
    font-size: 11px;
    cursor: pointer;
    padding: 10px 0;

    .grey{
        padding: 4px 0 0;
        color: grey;
    }

    .black{
        font-weight: 600;
    }

    .fullDetails{
        width: 100%;
        display: flex;
        justify-content: space-between;

        .info{
            width: 70%;
            word-break: break-all;
        }

        .price{
            text-align: right;

        }
    } 
`;

export const Option = styledComponents.div`

    min-width: 100%;
    padding: 15px 20px 16px;
    display: flex;
    align-items: center;

    gap: 40px;
    // justify-content: space-between;
    // border-top: 0.5px solid lightgrey;
    border-bottom: 0.5px solid lightgrey;
    font-size: 11px;
    text-transform: capitalize;

    // &:hover{
    //     border-top: 0.5px solid lightgrey;
    // }

    span{
        font-weight: 600;
    }

    .grey{
        color: grey;
    }

    .status{
        min-width: 15%;

        button{
            font-size: 10px;
            padding: 4px 8px 5px;
            display: flex;
            align-items: center;

            .dot {
                margin: 0px 5px 0 0;
                background: ${(props) => props.fColor};
                height: 5px;
                width: 5px;
                border-radius: 50%;
            }
        }
    }

    .cardDetails{
        text-align: left;
        min-width: 28%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .amnt{
        text-align: left;
        min-width: 15%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .site{
        min-width: 9%;
        text-align: left;
    }

    .dotsBtn{
        button {
            border: none;
            min-height: 20px;
            min-width: 20px;
            border-radius: 50%;
            background: transparent;
            cursor: pointer;
            display: flex;

            &:hover {
                background: #fafafa;
            }

            .dots {
                min-width: 4px;
                max-height: 4px;
                background: grey;
                display: block;
                border: none;
                border-radius: 50%;
                margin: 8px 0px 0px 2px;
            }
        }
    }

    @media screen and (max-width: 1280px){

        .cardDetails{

            min-width: 26%;

        }

    }

    @media screen and (max-width: 920px){

        .cardDetails{

            min-width: 34%;

        }

    }

    @media screen and (max-width: 740px ){

    gap: 35px;

        .status{
            min-width: 17%;
        }

        .cardDetails{

            min-width: 27%;

        }
    }

    @media screen and (max-width: 570px ){

        gap: 30px;

        .status{
            // min-width: 15%;

            button{
                font-size: 9px;

                .dot {
                    margin: 3px 5px 0 0;

                }
            }

        }

        .cardDetails{

            min-width: 22%;

        }

        .amnt{

            min-width: 15%;

        }

        .site{
            // min-width: 9%;

        }
    }

    @media screen and (max-width: 460px ){

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
        gap: 20px;

        .site{
            p{
                font-weight: 600;
                color: black;
            }
        }
    }

`;

//buttons style

export const OvalSmBtn = styledComponents.button`
    text-transform: capitalize;
    border-radius: 20px;
    border: none;
    background: ${(props) => props.bColor};
    color: ${(props) => props.fColor};
    cursor: pointer;
    display: flex;

`;

export const RectBigBtn = styledComponents.button`
    min-width: 100%;
    font-size: 12px;
    font-weight: 600;
    padding: 12px 10px;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
   
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    &:hover {
        background: blue;
    }
`;

export const RectMedBtn = styledComponents.button`
    padding: 5px 5px ;
    border-radius: 5px;
    border: 1px solid grey;
    background: ${(props) => props.bgcolor}; 
    color: ${(props) => props.color};
    display: flex;
    cursor: pointer;

    span {
        padding: 1px 3px 0 0;
    }
`;

//papers style

export const CustPaper = styledComponents.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 20px;
    min-width: 29%;

    .title {
        font-size: 16px;
        font-weight: 600;
    }

    .titleText {
        font-size: 13px;
        color: grey;
        padding: 5px 0 15px;
    }

    button {
        color: grey;
        display: inline-block;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 10px;
        border: none;
        background: transparent;
        padding: 15px 10px 0px 0px;
        display: flex;

        &:hover {
            color: black;
        }

        span {
            padding: 1px 0 0;
        }

        svg {
            font-size: 14px;
            padding: 0 0 0 5px;
        }
    }
`;

export const SalesReport = styledComponents.div`

    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 20px;

    .head {
        align-items: center;
        height: 30px;
        display: flex;
        width: 100%;
        justify-content: space-between;

        p {
            font-weight: bold;
            font-size: 16px;
            ${"" /* padding: 5px 20px 0 0; */}
        }

        .radioGroup {
            height: 25px;
            display: flex;
            gap: 5px;
            align-items: center;

            .radioBtn {
                height: inherit;
                position: relative;
                text-align: center;
                font-size: 11px;
                font-weight: 600;
                color: grey;

                input {
                    opacity: 0;
                    width: 75px;
                    height: inherit;

                    &:hover + .selected {
                    border: 1px solid lightgrey;
                    border-radius: 5px;
                    padding: 5px 0;
                    top: 0px;
                    left: 0;
                    }

                    &:checked + .selected {
                    border: 1px solid lightgrey;
                    border-radius: 5px;
                    padding: 5px 0;
                    top: 0px;
                    color: black;
                    }
                }
                .selected {
                    padding: 5px 0;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    top: 1px;
                }
            }
        }

        button {
            font-size: 11px;
            font-weight: 600;
        }
    }

    .chart {
        position: relative;
        width: 100%;

        .lines {
            width: 100%;
            margin: 32px 0 0px;
            height: 1px;
            background: lightgrey;
        }

        img {
            position: absolute;
            top: -27px;
            width: 100%;
            height: 160px;
        }

        ul {
            margin: 8px 0;
            font-size: 11px;
            color: grey;
            display: flex;
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 1280px){
        .head {
        
            .radioGroup {
            
                .radioBtn {
                
                    input {
                    width: 60px;
                    }
                }
            }   
        }
    }

    @media screen and (max-width: 740px ){
        .head {

            p{
                font-size: 14px;
            }
            .radioGroup {

                .radioBtn {
                
                    input {
                        width: 60px;
                    
                    }
                }
            }   
        }
    }

    @media screen and (max-width: 570px ){
        .head {
            align-items: center;
            height: 60px;
            position: relative;
            
            .radioGroup { 
                position: absolute;
                top: 0;
                left: 133px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 5px;

                .radioBtn {
                    
                    input {          

                        &:hover + .selected {
                            padding: 5px 0;
                            
                        }

                        &:checked + .selected {
                            padding: 5px 0
                        }
                    }
                    .selected {
                        padding: 5px 0;
                    
                    
                    }
                }   
            }
        }
    }

    @media screen and (max-width: 460px ){
        .head {

            p{
                font-size: 12px;
            }

            .radioGroup { 
                left: 95px;
                

                .radioBtn {
                    
                    input {    
                        width: 55px;      

                    }
                    
                    .selected {
                        font-size: 10px;
                    }
                }   
            }
            
            button{
                font-size: 10px;
                width: 60px;
            }   
        }
    }
 
`;

export const TodayPaper = styledComponents.div`
    border: 1px solid lightgrey;
    border-radius: 6px;
    // min-width: 230px;
    background: white;
    padding: 15px;

    .head {
        p {
            font-size: 11px;
            color: grey;
        }
    }

    .bodypart {
        padding: 10px 0 0 0;
        display: flex;
        justify-content: space-between;

        p {
            font-size: 21px;
            font-weight: 700;
            color: black;
            padding: 6px 0 0;
        }

        span {
            color: ${(props) => props.color};
            padding: 14px 0 0 0;
            font-size: 13px;
        }
    }
`;

export const TraffPaper = styledComponents.div`
    background: white;
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 20px;
    min-width: 29%;

    .head {
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 16px;
        }

        select {
            font-size: 12px;
            outline: none;
            border: none;
            background: transparent;

                option {
                    outiline: none;
                }
        }
    }
    .barTitle {
        font-size: 11px;
        font-weight: 400;
        padding: 20px 0 10px;
        display: flex;
        justify-content: space-between;
    }
    .bar {
        width: 100%;
        background: lightgrey;
        height: 5px;
        border-radius: 5px;
        position: relative;

        div {
            position: absolute;
            background: #4f46e5;
            height: 5px;
            border-radius: 5px;
        }

        .progress1 {
            width: 80%;
        }

        .progress2 {
            width: 60%;
        }

        .progress3 {
            width: 40%;
        }

        .progress4 {
            width: 20%;
        }
    }
`;

export const TransacPaper = styledComponents.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    min-width: 68%;
    padding: 20px 0 0;

    .head {
        display: flex;
        justify-content: space-between;
        padding: 0 20px 15px;

        p {
            color: black;
            font-weight: 600;
            font-size: 16px;
            display: flex;
            flex-direction: column;

            .grey {
                padding: 5px 0 0;
                font-size: 13px;
                color: grey;
                font-weight: 100;
            }
        }

        button {
            text-transform: capitalize;
            color: #4f46e5;
            cursor: pointer;
            font-size: 11px;
            border: none;
            background: transparent;
            display: flex;

            &:hover {
            color: grey;
            }

            svg {
            font-size: 13px;
            padding: 3px 0 0 5px;
            }
        }
    }

    @media screen and (max-width: 460px ){

        .head {
            button {
                svg {
                    font-size: 20px;
                    padding: 7px 0 0 0px;
                }
            }
        }
    }


`;
