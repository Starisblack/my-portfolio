import "./Card.css";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import { ArrowRightAlt } from "@mui/icons-material";
// import cairopdx from  "../../assets/cairopdx.png"
// import { Link } from "react-router-dom";
export const Card = ({ title, desc, tools, }) => {

  return (
    <div className="content-wrapper h-100">
      <div className="wrap-icon default">
        <div className="wrap-icon-inner icon default">
          <i aria-hidden="true" className=" pe-7s-science"></i>{" "}
        </div>
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>
        {tools?.map((item) => {
          return (
            <List key={item} dense={false}>
              <ListItem>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            </List>
          );
        })}
        {/* <div className="description">
          <p>
            Duis aute irure dolor in it esse cillum dolore eu fugiat nulla pari
            erunt mollit anim id est laborum.
          </p>
        </div> */}
      </div>
    </div>
  );
};


// export const SecondCard = ({itemData}) => {
//    return (
    
//     <div className="container_foto ">
    
//     <div class="img">
//         <img src={cairopdx} alt="" style={{opacity: "1"}}/>
//         </div>
//         <div class="content">
//             <p class="type-test">Website</p>
//             <h2 class="title-test">CAIROPDX</h2>
//             <p class="text">
//             It is the mission of the Center for African Immigrants and Refugees Organization (CAIRO)...
//             </p>
//             <Link class="read btn-style-1" to="/projects/1">See Project  <ArrowRightAlt /> </Link>
//         </div>
//   </div>
//    )
// }