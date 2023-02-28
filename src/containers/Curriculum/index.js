import MainContent from "./components/Content";
import TableOfContent from "./components/TableOfContent";

const Curriculum = () => {
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
