// import { Link } from 'react-router-dom'
import MainContent from "../pages/Content";
import TableOfContent from "../pages/TableOfContent";

const data = [
  {
    week1: {
      "Computer science concepts": [],
      "Role of computers in today’s world": [],
      "Computer architecture": [],
      "E-commerce": [],
      "Computer-related jobs": [],
    },
    week2: {
      "Introduction to programming": [],
      "Introduction to web design and development": [],
      "Introduction to mobile development": [],
    },
    week3: {
      "Version control": [],
      "Introduction to GitHub": [],
      "Introduction to databases": [],
    },
    week4: {
      "Computer security": [],
      "Introduction to desktop application": [],
    },
  },
];

const Curriculum = () => {
  // console.log({ data });
  return (
    <div className="container-fluid mh-100">
      <div style={ {display: "flex"}}>
        <div className="col-3 bg-primary">
          <TableOfContent />
        </div>
        <div className="col-10 bg-info">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
