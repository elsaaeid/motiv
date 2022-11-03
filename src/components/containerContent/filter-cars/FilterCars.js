import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./FilterCars.css"
import Products from "../cars-products/cars-product/Products"
import { newCars, usedCars, oldCars } from "../../back/cars-data/carsData";


 class FilterCars extends Component {

    constructor() {
        super();
    
        this.state = {
          selection : 1
        };
        this.handleChange = this.handleChange.bind(this); 
      }
    
      handleChange(event, index, value) {
        //set selection to the value selected
        this.setState({ selection : value });
    
      }
    
      pageControl(){
        if( this.state.selection === 1){
          return (
            <Row>
                {newCars.map((product) => (
                <Col key={product.id} product xs={12} sm={12} md={6} lg={4}>
                <Products  product={product} />
                </Col>
                ))}
            </Row>
          );
        } else if( this.state.selection === 2) {
          return (
            <Row>
                {usedCars.map((product) => (
                <Col key={product.id} product xs={12} sm={12} md={6} lg={4}>
                <Products  product={product} />
                </Col>
                ))}
            </Row>
          );
        } else if( this.state.selection === 3) {
          return (
            <Row>
                {oldCars.map((product) => (
                <Col key={product.id} product xs={12} sm={12} md={6} lg={4}>
                <Products  product={product} />
                </Col>
                ))}
            </Row>
          );
        }
      }
    render() {
        return(
            <div className='filter-cars'>
                <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className='filter-left d-flex flex-row justify-start'>
                        <div className='select select-model mx-3'>
                            <MuiThemeProvider>
                                <DropDownMenu 
                                style= {{fontSize: "20px", background: "white", border: "none", borderRadius: "3rem", width: "100%", color: "#5F6165"}}
                                value={this.state.selection} 
                                onChange={this.handleChange} 
                                >
                                <MenuItem value={1} primaryText="New"  />
                                <MenuItem value={2} primaryText="Used" />
                                <MenuItem value={3} primaryText="Old" />

                            </DropDownMenu>
                            </MuiThemeProvider>
                        </div>
                        <div className='select select-type'>
                            <MuiThemeProvider>
                                <DropDownMenu 
                                style= {{fontSize: "20px", background: "white", border: "none", borderRadius: "3rem", width: "100%", color: "#5F6165"}}
                                value={this.state.selection} 
                                onChange={this.handleChange} 
                                >
                                <MenuItem value={1} primaryText="Toyota"  />
                                <MenuItem value={2} primaryText="Kia" />
                                <MenuItem value={3} primaryText="Lamborghini" />

                            </DropDownMenu>
                            </MuiThemeProvider>
                        </div>
                    </div> 
                    
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className='filter-right d-flex flex-row justify-end align-items-center'>
                        <div className='icon-dashboard cursor-pointer d-flex justify-center align-items-center'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 2.5C1 1.67157 1.67157 1 2.5 1L5.5 1C6.32843 1 7 1.67157 7 2.5V5.5C7 6.32843 6.32843 7 5.5 7H2.5C1.67157 7 1 6.32843 1 5.5L1 2.5ZM2.5 2C2.22386 2 2 2.22386 2 2.5V5.5C2 5.77614 2.22386 6 2.5 6H5.5C5.77614 6 6 5.77614 6 5.5V2.5C6 2.22386 5.77614 2 5.5 2H2.5ZM9 2.5C9 1.67157 9.67157 1 10.5 1L13.5 1C14.3284 1 15 1.67157 15 2.5V5.5C15 6.32843 14.3284 7 13.5 7H10.5C9.67157 7 9 6.32843 9 5.5V2.5ZM10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM1 10.5C1 9.67157 1.67157 9 2.5 9H5.5C6.32843 9 7 9.67157 7 10.5V13.5C7 14.3284 6.32843 15 5.5 15H2.5C1.67157 15 1 14.3284 1 13.5L1 10.5ZM2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM9 10.5C9 9.67157 9.67157 9 10.5 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 14.3284 14.3284 15 13.5 15H10.5C9.67157 15 9 14.3284 9 13.5V10.5ZM10.5 10C10.2239 10 10 10.2239 10 10.5V13.5C10 13.7761 10.2239 14 10.5 14H13.5C13.7761 14 14 13.7761 14 13.5V10.5C14 10.2239 13.7761 10 13.5 10H10.5Z" fill="black"/>
                            </svg>
                        </div>
                        <div className='icon-filter cursor-pointer mx-3 d-flex justify-center align-items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H2ZM19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H19Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19ZM16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C1.44772 6 1 6.44772 1 7C1 7.55228 1.44772 8 2 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H2ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H22C22.5523 8 23 7.55228 23 7C23 6.44772 22.5523 6 22 6H11Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9ZM8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z" fill="white"/>
                            </svg>  
                        </div>
                    </div>
                </Col>
                </Row>
                <div className='my-5'>
                    {this.pageControl()}
                </div>
            </div>
        )
    }
}

export default FilterCars
 