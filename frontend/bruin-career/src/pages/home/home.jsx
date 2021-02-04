import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import "./home.css";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Home = (props) => {
  return (
    <div>
      <div className="search-wrapper">
        <InputField
          fullWidth={true}
          label="Search user/project/category"
          name="search"
          required
          autoComplete="Search user/project/category"
          variant="outlined"
          margin="dense"
          size="medium"
          inputProps={{ style: { color: "black" } }}
        />
      </div>
      <h1>Featured Projects</h1>
      <div className="project-list">
        <div className="proj1">hi</div>
        <div className="proj2"></div>
        <div className="proj3"></div>
        <div className="proj4"></div>
      </div>

      <h1>Browser By Category</h1>
      <div className="category-list">
        <div className="category-card category-title">Engineer</div>
        <div className="category-card category-title">
          <p>Business</p>
        </div>
        <div className="category-card category-title">
          <p>Arts</p>
        </div>
        <div className="category-card category-title">
          <p>Science</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
