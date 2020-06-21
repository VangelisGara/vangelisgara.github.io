import React, { Component } from "react";
import Projects from "./Projects.json";
import "./Projects.css";

let fontawesome_icons = {
  hub: "fa-github",
  bucket: "fa-bitbucket",
  happy: "far fa-smile-beam",
  working: "fas fa-wrench",
  hackathon: "fab fa-dev"
};

class projects extends Component {
  state = {
    renderedProjects: []
  };

  componentDidMount() {
    Projects.categories.forEach(category => {
      this.setState(prevState => ({
        renderedProjects: [
          ...prevState.renderedProjects,
          {
            category_title: category.title,
            current_triplet: 3
          }
        ]
      }));
    });
  }

  getProjects = (category, category_index) => {
    if (this.state.renderedProjects[category_index]) {
      let to = this.state.renderedProjects[category_index].current_triplet;
      let from = to - 3;
      var projects_cards = category.projects
        .slice(from, to)
        .map((project, project_index) => {
          var langs = project.langs.map((lang, lang_index) => {
            return (
              <p className="lang" key={"" + project_index + lang_index}>
                {lang}
              </p>
            );
          });
          var site = project.code ? project.code : null;
          var git_site = (
            <a href={site} target="_blank" rel="noopener noreferrer">
              <i className={"fab " + fontawesome_icons[project.git]}></i>
            </a>
          );
          return (
            <div className="card projectcard" key={"" + project_index}>
              <div className="card-body">
                <h5 className="card-title"> {project.title}</h5>
                <div className="langsused"> [ {langs} ] </div>
                <p className="card-text"> {project.description} </p>
              </div>
              <div className="card-footer myfooter">
                <div className="gitsite"> {git_site} </div>
              </div>
            </div>
          );
        });
      return projects_cards;
    }
  };

  controlProjects = (category_index, operation) => event => {
    let renderProjectsInCategory = [...this.state.renderedProjects];
    if (operation === "next")
      renderProjectsInCategory[category_index].current_triplet += 3;
    else if (operation === "prev")
      renderProjectsInCategory[category_index].current_triplet -= 3;
    else console.log("Invalid Control Projects Operation");
    this.setState({ renderedProjects: renderProjectsInCategory });
  };

  render() {
    var renderProjects = Projects.categories.map((category, category_index) => {
      if (!this.state.renderedProjects[category_index]) return null;
      let curr_triplet = this.state.renderedProjects[category_index]
        .current_triplet;
      return (
        <div key={"" + category_index}>
          <h3 className="mb-4 catitle">{category.title}</h3>
          {this.state.renderedProjects[category.title]}
          <div className="card-deck projectcardeck">
            {this.getProjects(category, category_index)}
            <div className="control">
              {curr_triplet !== 3 ? (
                <span
                  className="btn fas fa-angle-right prev"
                  onClick={this.controlProjects(category_index, "prev")}
                />
              ) : null}
              {curr_triplet < category.projects.length ? (
                <span
                  className="btn fas fa-angle-right next"
                  onClick={this.controlProjects(category_index, "next")}
                />
              ) : null}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="my-auto mobile">
        <h2 className={"mb-4 " + (this.props.isgreek ? "greekcathdr" : null)}>
          {this.props.isgreek ? "Δουλειες Μου" : "Projects"}
        </h2>
        {renderProjects}
      </div>
    );
  }
}

export default projects;
