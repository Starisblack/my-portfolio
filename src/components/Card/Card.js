import "./Card.css";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
