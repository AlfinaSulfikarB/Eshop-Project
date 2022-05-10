import styled from 'styled-components';


export const Item = styled.article`
    background: white;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.15);
    height: 300px;
    padding: 40px 20px 20px 20px;
    position: relative;
    transition: all 250ms ease-in-out 0s;    dl {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 20px;        dt {
            background: #ddd;
            opacity: 0;
            cursor: pointer;
            height: 31px;
            width: 30px;
            text-align: center;
            line-height: 24px;
            padding: 0 6px;
            border-radius: 3px;
            transition: all 250ms ease-in-out 0s;
        }        dd {
            display: none;
            cursor: pointer;
            color: #b16060;
            background: #ffdede;
            margin: 0;
            width: 100px;
            padding: 0 12px;
            font-weight: bold;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            border-radius: 0px 3px 3px 3px;
            transition: all 250ms ease-in-out 0s;            &:hover {
                background: #b10000;
                color: white;
            }
        }        &:hover {
            dt {
                border-radius: 3px 3px 0px 0px;
            }            dd {
                display: block;
            }
        }
    }    &:hover {
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3);
        transform: scale(1.01);
        dl {
            dt {
                opacity: 1;
            }
        }
    }    img {
        display: block;
        width: auto;
        height: 180px;
        margin: 0 auto;
        top: 40px;
        bottom: 0;
        left: 0;
        right: 0;
    }    span {
        position: absolute;
        top: 20px;
        right: 20px;
        text-align: right;
        border: 1px solid #ddd;
        font-size: 14px;
        line-height: 21px;
        height: 21px;
        padding: 4px 8px;
        border-radius: 3px;
        color: #666;
    }    h3 {
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        max-height: 42px;
        position: absolute;
        bottom: 60px;
        left: 25px;
        right: 25px;
        overflow: hidden;
    }    
`;export const Main = styled.main`
    padding: 60px 0;
    display: flex;
    justify-content: center;
    > section {
        display: flex;
        flex-wrap: wrap;
        margin: 50-150px;
        width: 960px;
        > ${Item} {
            margin: 0 15px 30px 15px;
            flex: 1 1 1;
            width: calc(70% - 70px - 40px);
        }
        color:black;
        font-size:large;
    }
`;