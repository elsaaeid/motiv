import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const TranslationSelect = ({selection, align, HandleSearch}) => {
  return (
    <div style={{float: align, marginInline: "100px", height: "47px", marginTop: "10px"}} className="btn-language position-relative">
        <MuiThemeProvider>
        <DropDownMenu 
              style= {{fontSize: "20px", background: "white", border: "none", borderRadius: "3rem", width: "100%", color: "#d148d1"}}
              onChange={HandleSearch}
              value={selection}>
              <MenuItem value={1} primaryText="English" />
              <MenuItem value={2} primaryText="Arabic" />
        </DropDownMenu>
        </MuiThemeProvider>                                
    </div>
  )
}

export default TranslationSelect
