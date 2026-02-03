import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";

const User: React.FC = () => {
  return (
    <div id="page-user-0">
    <div id="iu4n" style={{"display": "flex", "height": "100vh", "fontFamily": "Arial, sans-serif", "--chart-color-palette": "default"}}>
      <nav id="il4e" style={{"width": "250px", "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)", "color": "white", "padding": "20px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "--chart-color-palette": "default"}}>
        <h2 id="ix5y" style={{"marginTop": "0", "fontSize": "24px", "marginBottom": "30px", "fontWeight": "bold", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="intgj" style={{"display": "flex", "flexDirection": "column", "flex": "1", "--chart-color-palette": "default"}}>
          <a id="im822" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "rgba(255,255,255,0.2)", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/user">{"User"}</a>
        </div>
        <p id="ihsuj" style={{"marginTop": "auto", "paddingTop": "20px", "borderTop": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "opacity": "0.8", "textAlign": "center", "--chart-color-palette": "default"}}>{"© 2025 BESSER. All rights reserved."}</p>
      </nav>
      <main id="ivhqm" style={{"flex": "1", "padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default"}}>
        <h1 id="it472" style={{"marginTop": "0", "color": "#333", "fontSize": "32px", "marginBottom": "10px", "--chart-color-palette": "default"}}>{"User"}</h1>
        <p id="icifn" style={{"color": "#666", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"Manage User data"}</p>
        <TableBlock id="table-user-0" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="User List" options={{"showHeader": true, "stripedRows": false, "showPagination": true, "rowsPerPage": 5, "actionButtons": true, "columns": [{"label": "Id", "column_type": "field", "field": "id", "type": "int", "required": true}, {"label": "Username", "column_type": "field", "field": "username", "type": "str", "required": true}, {"label": "Email", "column_type": "field", "field": "email", "type": "str", "required": true}, {"label": "DateOfBirth", "column_type": "field", "field": "dateOfBirth", "type": "date", "required": true}, {"label": "IsActive", "column_type": "field", "field": "isActive", "type": "bool", "required": true}]}} dataBinding={{"entity": "User", "endpoint": "/user/"}} />
      </main>
    </div>    </div>
  );
};

export default User;
